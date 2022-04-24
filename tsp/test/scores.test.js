import {sortListByDist, sortListByScores} from '../App/Genetics/scores.js';
import {expect} from 'chai';

const map = {0: {x: 0, y: 0, value: 0}, 1: {x: 1, y: 1, value: 1}};
const population = [{order: [0, 0]}, {order: [0, 1]}];
const sortedPop = sortListByDist(map)(population);

describe('../App/Genetics/scores.js', () => {
  describe('#sortListByDist()', () => {
    it('should return a sorted array of population by distance', () => {
      expect(sortListByDist(map)(population)).to.be.an('array');

      it.skip('should return an error', () => {});
    });
  });
  describe('#sortListByScores()', () => {
    it('should return a sorted array of population by value', () => {
      expect(sortListByScores(map)(population)).to.be.an('array');

      it.skip('should return an error', () => {});
    });
  });
});
