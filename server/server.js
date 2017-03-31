const express = require('express');
//const userController = require('./userController');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const app = express();

app.use('/static', express.static(path.resolve(__dirname, 'server')));

app.get('/', (req, res) => {
  fs.readFile('test.html', (err, data) => {
    if (err) res.send(err);
    res.header('content-type', 'text/html');
    res.send(data);
  });
});

app.post('/login', (req, res) => {
  console.log('username ', req.body.username, ' pw: ', req.body.username);
});

app.get('/test.js', (req, res) => {
  fs.readFile('test.js', (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

class Clients {
  constructor() {
    this.clientList = {};
  }
  saveClient(uname, client) {
    this.clientList[uname] = client;
  }
}

const clients = new Clients();

const socket = new WebSocket.Server({ port: 8080 });
socket.on('connection', (client) => {
  client.on('message', (message) => {
    const pMessage = JSON.parse(message);
    //console.log('clients object', clients.clientList);
    clients.saveClient(pMessage.username, client);
    Object.keys(clients.clientList).forEach((key) => { 
      console.log('username', key);
      console.log('ready state', clients.clientList[key].readyState);  
    });
    console.log('-----------------------------------------------------------');
  });
});

//app.post('/user', userController.createUser);


app.listen(3000, () => console.log('Listening on port 3000'));
