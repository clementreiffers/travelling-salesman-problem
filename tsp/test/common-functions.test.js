import {expect} from 'chai';
import {
  getRandomIndex,
  getRandomValue
} from '../App/Genetics/common-functions.js';

describe('../App/Genetics/common-functions.js', () => {
  describe('#getRandomIndex()', () => {
    it('RandomIndex generation', () => {
      expect(getRandomIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]))
        .to.be.an('number')
        .to.be.below(10);
    });
  });
  describe('#getRandomValue()', () => {
    it('RandomValue generation', () => {
      expect(getRandomValue(9)).to.be.an('number').to.be.below(10);
    });
  });
});
