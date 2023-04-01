import {expect} from 'chai';
import {createPop} from '../App/Genetics/population.js';

// eslint-disable-next-line no-undef
describe('../App/Genetics/population.js', () => {
	// eslint-disable-next-line no-undef
	describe('#createPop()', () => {
		// eslint-disable-next-line no-undef
		it('should return an array of all Population', () => {
			expect(createPop({maxPopulation: 10, maxCities: 10})).to.be.an('array');

			// eslint-disable-next-line no-undef
			it.skip('should return an error', () => {
			});
		});
	});
});

