const Turn = require('../src/Turn');

class Round {

  constructor(deck) {
    this.deck = deck || [];
    this.turns = 0;
    // this.guess = guess || undefined;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.turns];
  }

  takeTurn(guess) {
    const currentCard = this.returnCurrentCard();
    const turn = new Turn(guess, currentCard);
    this.turns++;
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(currentCard.id)
    }
    return turn.giveFeedback();
    // return turn;
  }

  calculatePercentCorrect() {
    return parseInt((this.turns - this.incorrectGuesses.length)/this.turns*100)
  }
}

module.exports = Round;