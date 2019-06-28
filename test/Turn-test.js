const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

var card, turn1;

describe('Turn', function() {

  beforeEach(function() {
    card = new Card({id: 1, question: 'Where is Turing Located?', answers: ['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'});
    turn1 = new Turn('Denver', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should create instances of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn);
  });

  it('should store a guess', function() {

    expect(turn1.guess).to.equal('Denver');
  });

  it('should store a card', function() {

    expect(turn1.card).to.deep.equal(card);
  });

  it('should return guesses', function() {

    expect(turn1.returnGuess()).to.equal('Denver');
  });

  it('should return cards', function() {

    expect(turn1.returnCard()).to.deep.equal({id: 1, question: 'Where is Turing Located?', answers: ['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'})
  });

  describe('evaluateGuess', function() {

    it('should evaluate correct guesses', function() {
      expect(turn1.evaluateGuess()).to.equal(true);
      const turn2 = new Turn('Chicago', card);
      expect(turn2.evaluateGuess()).to.equal(false);
    });

    it('should evaluate incorrect guesses', function() {
      const turn2 = new Turn('Chicago', card);
      expect(turn2.evaluateGuess()).to.equal(false);
    });

  });

  describe('giveFeedback', function() {

    it('should give feedback on correct guesses', function() {
      expect(turn1.giveFeedback()).to.equal('correct!');
    });

    it('should give feedback on incorrect guesses', function() {
      const turn2 = new Turn('Chicago', card);
      expect(turn2.giveFeedback()).to.equal('incorrect!');
    });

  });

  it('should give feedback on guesses', function() {

    expect(turn1.giveFeedback()).to.equal('correct!');
    const turn2 = new Turn('Chicago', card);
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});