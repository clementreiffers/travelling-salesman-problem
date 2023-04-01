import {expect} from 'chai';
import {createMap} from '../App/Genetics/map.js';

// eslint-disable-next-line no-undef
describe('../App/Genetics/map.js', () => {
	// eslint-disable-next-line no-undef
	describe('#createMap()', () => {
		// eslint-disable-next-line no-undef
		it('should return a map with coordinate of cities', () => {
			expect(createMap({maxCities: 10, width: 10, height: 10})).to.be.an(
				'Object',
			);

			// eslint-disable-next-line no-undef
			it.skip('should return an error', () => {
			});
		});
	});
});
