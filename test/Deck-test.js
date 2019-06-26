const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');


describe('Deck', function() {

  it.skip('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it.skip('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });

  it.skip('should store cards', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
  })

  it.skip('should have a method to count cards', function() {
    const card1 = new Card({id: 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'});
    const card2 = new Card({id: 14, question: 'What organ is Khalid missing?', answers: ['spleen', 'appendix', 'gallbladder'], correctAnswer: 'gallbladder'});
    const card3 = new Card({id: 12, question: 'What is Travis\'s middle name?', answers: ['Lex', 'William', 'Fitzgerald'], correctAnswer: 'Fitzgerald'});
    const deck = new Deck([card1, card2, card3]);
    expect(deck.countCards()).to.equal(3);
  });
});
