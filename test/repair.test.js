import {expect} from 'chai';
import {repairPopulation} from '../App/Genetics/repair.js';

// eslint-disable-next-line no-undef
describe('../App/Genetics/repair.js', () => {
	// eslint-disable-next-line no-undef
	describe('#repairPopulation()', () => {
		// eslint-disable-next-line no-undef
		it('Repair function', () => {
			expect(
				repairPopulation([
					[0, 1, 1, 3, 4, 5, 6, 7, 8],
					[8, 7, 6, 5, 4, 3, 2, 2, 0],
				]),
			)
				.to.be.an('array')
				.to.be.lengthOf(2);
			expect(
				repairPopulation([
					[0, 1, 1, 3, 4, 5, 6, 7, 8],
					[8, 7, 6, 5, 4, 3, 2, 2, 0],
				])[0],
			)
				.to.be.an('array')
				.to.be.lengthOf(9);
			expect(
				repairPopulation([
					[0, 1, 1, 3, 4, 5, 6, 7, 8],
					[8, 7, 6, 5, 4, 3, 2, 2, 0],
				])[1],
			)
				.to.be.an('array')
				.to.be.lengthOf(9);
		});
	});
});
