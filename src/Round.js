const Turn = require('../src/Turn');

class Round {

  constructor(deck) {
    this.deck = deck || [];
    this.turns = 0;
    this.incorrectGuesses = [];
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
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
};

module.exports = Round;