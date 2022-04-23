import {expect} from 'chai';
import {mutatePopulation} from '../App/Genetics/mutation.js';
import {crossOverPopulation} from '../App/Genetics/crossover.js';
import {repairPopulation} from '../App/Genetics/repair.js';
import {
  getRandomIndex,
  getRandomValue,
  shuffleList
} from '../App/Genetics/common-functions.js';

describe('../App/Genetics/mutation.js', () => {
  describe('#mutatePopulation()', () => {
    it('Mutation : ', () => {
      expect(
        mutatePopulation([
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [60, 70, 80, 90, 100, 110, 120, 130, 140]
        ])
      )
        .to.be.an('array')
        .to.be.lengthOf(2);
      expect(
        mutatePopulation([
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [60, 70, 80, 90, 100, 110, 120, 130, 140]
        ])[0]
      )
        .to.be.an('array')
        .to.be.lengthOf(9)
        .to.include.members([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      expect(
        mutatePopulation([
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [60, 70, 80, 90, 100, 110, 120, 130, 140]
        ])[1]
      )
        .to.be.an('array')
        .to.be.lengthOf(9)
        .to.include.members([60, 70, 80, 90, 100, 110, 120, 130, 140]);
    });
  });
});

describe('../App/Genetics/crossover.js', () => {
  describe('#crossOverPopulation()', () => {
    it('Crossover : ', () => {
      expect(
        crossOverPopulation([
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [60, 70, 80, 90, 100, 110, 120, 130, 140]
        ])
      )
        .to.be.an('array')
        .to.be.lengthOf(2);
      expect(
        crossOverPopulation([
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [60, 70, 80, 90, 100, 110, 120, 130, 140]
        ])[0]
      )
        .to.be.an('array')
        .to.be.lengthOf(9);
      expect(
        crossOverPopulation([
          [1, 2, 3, 4, 5, 6, 7, 8, 9],
          [60, 70, 80, 90, 100, 110, 120, 130, 140]
        ])[1]
      )
        .to.be.an('array')
        .to.be.lengthOf(9);
    });
  });
});

describe('../App/Genetics/repair.js', () => {
  describe('#repairPopulation()', () => {
    it('Repair : ', () => {
      expect(
        repairPopulation([
          [0, 1, 1, 3, 4, 5, 6, 7, 8],
          [8, 7, 6, 5, 4, 3, 2, 2, 0]
        ])
      )
        .to.be.an('array')
        .to.be.lengthOf(2);
      expect(
        repairPopulation([
          [0, 1, 1, 3, 4, 5, 6, 7, 8],
          [8, 7, 6, 5, 4, 3, 2, 2, 0]
        ])[0]
      )
        .to.be.an('array')
        .to.be.lengthOf(9);
      expect(
        repairPopulation([
          [0, 1, 1, 3, 4, 5, 6, 7, 8],
          [8, 7, 6, 5, 4, 3, 2, 2, 0]
        ])[1]
      )
        .to.be.an('array')
        .to.be.lengthOf(9);
    });
  });
});

describe('../App/Genetics/common-functions.js', () => {
  describe('#getRandomIndex()', () => {
    it('Repair : ', () => {
      expect(getRandomIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]))
        .to.be.an('number')
        .to.be.below(10);
    });
  });
  describe('#getRandomValue()', () => {
    it('Repair : ', () => {
      expect(getRandomValue(9)).to.be.an('number').to.be.below(10);
    });
  });
});
