const Turn = require('../src/Turn');
const data = require('../src/data');
const prototypeQuestions = data.prototypeData;

class Round {

  constructor(deck, game) {
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.game = game;
  };

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  };

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentCard.id)
    }
    if (this.turns > this.deck.length) {
      this.endRound();
    }
    return turn.giveFeedback();
  };

  calculatePercentCorrect() {
    return parseInt((this.turns - this.incorrectGuesses.length)/this.turns*100)
  };

  endRound() {
    if (this.calculatePercentCorrect() >= 90 ) {
      console.log(`\n \n \n \n ** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!'`)
    } 
    else {
      console.log(`\n \n \n \nYou scored less than 90% correct. Please try again!' \n \n \n \n`);
      this.game.start();
    }
  }
};

module.exports = Round;