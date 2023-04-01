import {expect} from 'chai';
import {createPop} from '../App/Genetics/population.js';

describe('../App/Genetics/population.js', () => {
  describe('#createPop()', () => {
    it('should return an array of all Population', () => {
      expect(createPop({maxPopulation: 10, maxCities: 10})).to.be.an('array');

      it.skip('should return an error', () => {});
    });
  });
});
