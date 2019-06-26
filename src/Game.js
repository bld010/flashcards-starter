const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('../src/Card');
const Round = require('../src/Round')
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentCards = [];
    this.currentDeck;
    this.currentRound;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start(questions) {
    this.currentCards = questions.map(cardObj => new Card(cardObj))
    this.currentDeck = new Deck(this.currentCards);
    this.currentRound = new Round(this.currentDeck); 
    this.printMessage(this.currentDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

}

module.exports = Game;