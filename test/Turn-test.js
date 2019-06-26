const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function(){

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it.skip('should store a guess', function(){
    const turn = new Turn('foo');
    expect(turn.guess).to.equal('foo');
  });

  it.skip('should store a card', function() {
    const card = new Card({id: 1, question: 'Where is Turing Located?', answers:'Denver'});
    const turn = new Turn('Denver', card);
    expect(turn.card).to.deep.equal(card);
  });

  it.skip('should have a method to return guess', function() {
    const card = new Card({id: 1, question: 'Where is Turing Located?', answers:'Denver'});
    const turn = new Turn('Denver', card);
    expect(turn.returnGuess()).to.equal('Denver');
  });

  it.skip('should have a method to return card', function() {
    const card = new Card({id: 1, question: 'Where is Turing Located?', answers:['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'});
    const turn = new Turn('Denver', card);
    expect(turn.returnCard()).to.deep.equal({id: 1, question: 'Where is Turing Located?', answers: ['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'})
  });

  it.skip('should have a method to evaluate guess', function() {
    const card = new Card({id: 1, question: 'Where is Turing Located?', answers:['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'});
    const turn1 = new Turn('Denver', card);
    expect(turn1.evaluateGuess()).to.equal(true);
    const turn2 = new Turn('Chicago', card);
    expect(turn2.evaluateGuess()).to.equal(false);
  })

  it.skip('should give feedback on guess', function() {
    const card = new Card({id: 1, question: 'Where is Turing Located?', answers:['Denver', 'Chicago', 'New York'], correctAnswer: 'Denver'});
    const turn1 = new Turn('Denver', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
    const turn2 = new Turn('Chicago', card);
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });

});