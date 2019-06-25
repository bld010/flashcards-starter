const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card')
const Deck = require('../src/Deck');



class Game {
  constructor() {}
    // this.currentRound


  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(questions) {
    let newCards = questions.map(cardObj => new Card(cardObj))
    let newDeck = new Deck(newCards);
    // creates Cards 
    // Put cards in a Deck;
    // Create new Round using the Deck;
    // 
  }

}

module.exports = Game;