const mongoose = require('mongoose');
const Game = require('../../models/Game.js');


mongoose.connect('mongodb://localhost/poker-game');

const GameController = {
  createGame: (req, res, next) => {
    User.create(req.body, (err, doc) => {
      if (err) throw err;
      else next();
    })
  }
}

module.exports = GameController;
