import {expect} from 'chai';
import {
  getScoreFromPopulation,
  sortListByScores
} from '../App/Genetics/scores.js';

const map = {
  paris: {x: 1, y: 2, value: 300},
  lyon: {x: 100, y: 300, value: 500},
  marseille: {x: 120, y: 500, value: 20},
  bordeaux: {x: -12, y: 300, value: 1000}
};

const population = [
  ['paris', 'lyon', 'marseille', 'bordeaux'],
  ['bordeaux', 'lyon', 'marseille', 'paris']
];

describe('../App/Genetics/scores.js', () => {
  describe('#sortListByScores()', () => {
    it('should return a sorted array of population by scores', () => {
      expect(sortListByScores(map)(population)).to.be.an('array');

      it.skip('should return an error', () => {});
    });
  });
  describe('#getScoreFromPopulation()', () => {
    it('should return an array of path with their scores', () => {
      expect(getScoreFromPopulation(map, 100)(population)).to.be.an('array');

      it.skip('should return an error', () => {});
    });
  });
});
