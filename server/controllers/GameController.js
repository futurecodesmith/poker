const mongoose = require('mongoose');
const Game = require('../../models/Game.js');


mongoose.connect('mongodb://localhost/poker-game');

const GameController = {
  createGame: (req, res, next) => {
    User.create(req.body, (err, doc) => {
      if (err) throw err;
      else next();
    })
  },

  createDeck: () => {
    const cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,
      24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,
      59,50,51];
    const deck = [];

    for (let i = 52; i > 40; i -= 1) {
      let cardIndex = Math.floor(Math.random()*i);
      deck.push(cards.splice(cardIndex, 1)[0]);
    }
    return deck;
  },

  createHand: (message) => {
    const hand = {
      deck: GameController.createDeck(),
      dealer: message.sender,
      round1: [],
      round2: [],
      round3: [],
      round4: []
    }
  }

  

}

module.exports = GameController;
