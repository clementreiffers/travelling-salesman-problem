import {expect} from 'chai';
import {createPop} from '../App/Genetics/population.js';

describe('../App/Genetics/population.js', () => {
  describe('#createPop()', () => {
    it('should return an array of all Population', () => {
      expect(createPop(10)(10)).to.be.an('array');

      it.skip('should return an error', () => {});
    });
  });
});
