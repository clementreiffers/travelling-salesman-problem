import {expect} from 'chai';
import {createMap} from '../App/Genetics/map.js';

describe('../App/Genetics/map.js', () => {
  describe('#createMap()', () => {
    it('should return a map with coordinate of cities', () => {
      expect(createMap(10)).to.be.an('Object');

      it.skip('should return an error', () => {});
    });
  });
});
