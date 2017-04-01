const express = require('express');
const userController = require('./controllers/UserController');
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
  }
  saveClient(uname, client, bank) {
    this.clientList[uname] = {
      client,
      bank,
    };
  }
}

// class Game {
//   constructor() {
//     this.players = [];
//     //this.hand;
//   }
//   addPlayer(uname, hand, bank) {
//     this.clientList[uname] = {
//       hand
//       turn
//     };
//   }
// }

const clients = new Clients();

const socket = new WebSocket.Server({ port: 8080 });
socket.on('connection', (client) => {
  client.on('message', (msg) => {
    const pMsg = JSON.parse(msg);
    clients.saveClient(pMsg.username, client, 100);
  });
});


app.listen(3000, () => console.log('Listening on port 3000'));




    // Object.keys(clients.clientList).forEach((key) => { 
    //   console.log('username', key);
    //   console.log('ready state', clients.clientList[key].readyState);  
    // });

    // console.log('-----------------------------------------------------------');
