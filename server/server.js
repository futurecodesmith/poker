const express = require('express');
const userController = require('./userController');
const fs = require('fs');
const path = require('path');
const WebSocket = require('ws');

const app = express();

// app.use('/static', express.static(path.resolve(__dirname, 'server')));


// app.get('/', (req, res) => {
//   fs.readFile('index.html', (err, data) => {
//     if (err) res.send(err);
//     res.header('content-type', 'text/html');
//     res.send(data);
//   });
// });

// app.get('/index.js', (req, res) => {
//   fs.readFile('index.js', (err, data) => {
//     if (err) res.send(err);
//     res.send(data);
//   });
// });

app.post('/user', userController.createUser);


app.listen(3000, () => console.log('Listening on port 3000'));
