const mongoose = require('mongoose');
const User = require('../../models/User.js');


mongoose.connect('mongodb://localhost/poker-game');

const UserController = {
  createUser: (req, res, next) => {
    User.create(req.body, (err, doc) => {
      if (err) throw err;
      else next();
    })
  }
}

module.exports = UserController;
