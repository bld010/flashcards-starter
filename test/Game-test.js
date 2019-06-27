const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Turn = require('../src/Turn');
const Game = require('../src/Game');

var game, card1, card2, card3, gameCards;

describe('Game', function() {

  beforeEach(function() {
    card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    gameCards = [card1, card2, card3];
    game = new Game();
  });
  
  it('should create new instances of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should create cards', function() {
    game.start(gameCards);
    expect(game.currentCards).to.deep.equal([card1, card2, card3])
  });

  it('should put cards in a Deck', function() {
    game.start(gameCards);
    expect(game.currentDeck.cards).to.deep.equal(game.currentCards);
  });

  it('should keep track of current round', function() {
    game.start(gameCards);
    expect(game.currentRound.turns).to.equal(0);
    expect(game.currentRound.deck.cards).to.deep.equal(gameCards);
    expect(game.currentRound.incorrectGuesses).to.deep.equal([]);
  }); 

});