const mongoose = require('mongoose');
const User = require('../../models/User.js');


mongoose.connect('mongodb://localhost/poker-game');

const UserController = {
  createUser: (req, res, next) => {
    User.create(req.body, (err, doc) => {
      if (doc) {
        console.log(doc);
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    });
  },
  validateUser: (req, res, next) => {
    User.findOne({ username: req.body.username, password: req.body.password }, (err, doc) => {
      if (doc) {
        console.log(doc);
        res.sendStatus(200);
      } else {
        res.sendStatus(404);
      }
    });
  },
};

module.exports = UserController;
