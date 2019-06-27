const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

var deck, card1, card2, card3;

describe('Deck', function() {

  beforeEach(function() {
    card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    deck = new Deck([card1, card2, card3]);
  })

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should create instances of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should store cards', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  })

  it('should count cards', function() {
    expect(deck.countCards()).to.equal(3);
  });
});
