import {expect} from 'chai';
import {getRandomIndex, getRandomValue} from '../App/Genetics/common-functions.js';

// eslint-disable-next-line no-undef
describe('../App/Genetics/common-functions.js', () => {
	// eslint-disable-next-line no-undef
	describe('#getRandomIndex()', () => {
		// eslint-disable-next-line no-undef
		it('RandomIndex generation', () => {
			expect(getRandomIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]))
				.to.be.an('number')
				.to.be.below(10);
		});
	});
	// eslint-disable-next-line no-undef
	describe('#getRandomValue()', () => {
		// eslint-disable-next-line no-undef
		it('RandomValue generation', () => {
			expect(getRandomValue(9)).to.be.an('number').to.be.below(10);
		});
	});
});

