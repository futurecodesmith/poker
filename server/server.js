const express = require('express');
const userController = require('./controllers/UserController');
const gameController = require('./controllers/GameController');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

const app = express();
app.use('/static', express.static(path.join(__dirname, '..')));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.get('/', (req, res) => {
  //fs.readFile(path.join(__dirname, '..', 'client/index.html'), (err, data) => {
    fs.readFile(path.join(__dirname, '..', 'client/index.html'), (err, data) => {

    if (err) res.send(err)
    else {
      res.header('content-type', 'text/html');
      res.send(data);
    }
  });
});

app.post('/login', userController.validateUser);
app.post('/user', userController.createUser);

class Clients {
  constructor() {
    this.clientList = {};
    this.saveClient = this.saveClient.bind(this);
  }
  saveClient(uname, client) {
    this.clientList[uname] = { client, 
                              ready: false }
  }
}

// class Game {
//   constructor() {
//     this.players = [];
//     //this.hand;
//   }
//   addPlayer(uname) {
//     this.players.push(uname);
//   };
// }

let hand;
const clients = new Clients();
let winMessage;
const socket = new WebSocket.Server({ port: 8080 });
socket.on('connection', (client) => {

  client.on('message', (msg) => {
    const pMsg = JSON.parse(msg);
    clients.saveClient(pMsg.username, client);
    const clientArr = Object.keys(clients.clientList);
    if ((pMsg.action === 'createGame' || pMsg.action === 'joinGame') && clientArr.length === 2) hand = gameController.createHand(clientArr[0]);
    if (pMsg.action === 'ready') {
      clients.clientList[pMsg.username].ready = true;
      console.log('you pressed the button and I toooootally heard it');
      if (clients.clientList[clientArr[0]].ready && clients.clientList[clientArr[1]].ready) {
        console.log('shit yea two clients are ready!');
        hand.currentRound += 1;
        clients.clientList[clientArr[0]].ready = false;
        clients.clientList[clientArr[1]].ready = false;
        // win messasge { action: "win", winMessage: string }
        if (hand.currentRound === 5) {
          const handTypes = ['Straight Flush', 'Four of a Kind', 'Full House', 'Flush', 'Straight', 'Three of a Kind', 'Two Pair', 'Pair', 'High Card']
          if (hand.defaultWinner === 'dealer') {
            winMessage = `${hand.dealer} wins with a ${handTypes[hand.dealerHand[0]]}!`
          }
          else if (hand.defaultWinner === 'opponent') {
            winMessage = `${clientArr[1]} wins with a ${handTypes[hand.opponentHand[0]]}!`
          }
          else {
            winMessage = `Tie! It's a split pot mofossss`;
          }

        }
      }
    }
    console.log('cl arr length', clientArr.length);
    console.log('client array ', clientArr);
    if (clientArr.length >= 2) {
      clientArr.forEach((key, index) => {
        clients.clientList[key].client.send(JSON.stringify({ action: 'GameReady' }));
        console.log('round ', hand.currentRound);
        clients.clientList[key].client.send(JSON.stringify({ action: 'hand', hand, amDealer: index === 0 }));
        if (winMessage) clients.clientList[key].client.send(JSON.stringify({ action: "win", winMessage }));
      });
    }
  });
});


app.listen(3000, () => console.log('Listening on port 3000'));




    // Object.keys(clients.clientList).forEach((key) => { 
    //   console.log('username', key);
    //   console.log('ready state', clients.clientList[key].readyState);  
    // });

    // console.log('-----------------------------------------------------------');
