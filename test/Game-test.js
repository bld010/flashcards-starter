const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');

var game;

describe('Game', function() {

  beforeEach(function() {
    game = new Game();
  });
  
  it('should create new instances of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('should keep track of current round', function() {
    game.start();
    expect(game.currentRound.turns).to.equal(0);
  }); 

});