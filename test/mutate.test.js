import {expect} from 'chai';
import {mutatePopulation} from '../App/Genetics/mutation.js';

// eslint-disable-next-line no-undef
describe('../App/Genetics/mutation.js', () => {
	// eslint-disable-next-line no-undef
	describe('#mutatePopulation()', () => {
		// eslint-disable-next-line no-undef
		it('Mutation function', () => {
			expect(
				mutatePopulation([
					[1, 2, 3, 4, 5, 6, 7, 8, 9],
					[60, 70, 80, 90, 100, 110, 120, 130, 140],
				]),
			)
				.to.be.an('array')
				.to.be.lengthOf(2);
			expect(
				mutatePopulation([
					[1, 2, 3, 4, 5, 6, 7, 8, 9],
					[60, 70, 80, 90, 100, 110, 120, 130, 140],
				])[0],
			)
				.to.be.an('array')
				.to.be.lengthOf(9)
				.to.include.members([1, 2, 3, 4, 5, 6, 7, 8, 9]);
			expect(
				mutatePopulation([
					[1, 2, 3, 4, 5, 6, 7, 8, 9],
					[60, 70, 80, 90, 100, 110, 120, 130, 140],
				])[1],
			)
				.to.be.an('array')
				.to.be.lengthOf(9)
				.to.include.members([60, 70, 80, 90, 100, 110, 120, 130, 140]);
		});
	});
});
