const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');

var card1, card2, card3, deck, round;

describe('Round', function() {

  beforeEach(function() {
    card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should should create instances of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should store a deck', function() {
    expect(round.deck).to.deep.equal(deck);
  });

  it('can return the current card', function() {
    expect(round.returnCurrentCard()).to.deep.equal(card1);
  });

  describe('takeTurn', function() {

    it('has a method called takeTurn', function() {
      expect(round.takeTurn).to.be.a('function');
    });

    it('has takeTurn method that creates a new instance of Turn', function() {
      expect(round.takeTurn('sea otter')).to.equal('correct!');
      expect(round.takeTurn('spleen')).to.equal('incorrect!');
    });

    it('has takeTurn method that increases turn count', function() {
      expect(round.turns).to.equal(0);
      round.takeTurn('seaOtter');
      expect(round.turns).to.equal(1);
    })

    it('can evaluate guesses', function() {
      expect(round.takeTurn('blue')).to.equal('incorrect!');
      expect(round.takeTurn('gallbladder')).to.equal('correct!');
    })

    it('can store ids of incorrect guesses', function() {
      round.takeTurn('blue');
      expect(round.incorrectGuesses[0]).to.equal(1);
      round.takeTurn('gallbladder');
      expect(round.incorrectGuesses[0]).to.equal(1);
      round.takeTurn('George');
      expect(round.incorrectGuesses).to.deep.equal([1, 12])
    });

    it('can return percent correct', function() {
      round.takeTurn('blue');
      round.takeTurn('gallbladder');
      round.takeTurn('George');
      expect(round.calculatePercentCorrect()).to.equal(33)
    });

  });

});