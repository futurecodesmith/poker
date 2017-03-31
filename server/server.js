const express = require('express');
const userController = require('./userController');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/user', userController.createUser);

app.listen(3000, () => console.log('Listening on port 3000'));
