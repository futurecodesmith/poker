const express = require('express');
const userController = require('./controllers/UserController');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');
const bodyParser = require('body-parser');

const app = express();
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/static', express.static(path.join(__dirname, '..', 'client')));

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

//console.log('username: ', req.body.username, ' pw: ', req.body.password);


app.get('/test.js', (req, res) => {
  fs.readFile('test.js', (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
});

app.get('/webpack-bundle.js', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'build/webpack-bundle.js'), (err, data) => {
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
  client.on('message', (msg) => {
    const pMsg = JSON.parse(msg);
    clients.saveClient(pMsg.username, client);
  });
});

//app.post('/user', userController.createUser);


app.listen(3000, () => console.log('Listening on port 3000'));




    // Object.keys(clients.clientList).forEach((key) => { 
    //   console.log('username', key);
    //   console.log('ready state', clients.clientList[key].readyState);  
    // });

    // console.log('-----------------------------------------------------------');
