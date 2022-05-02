import * as R from 'ramda';
import {getRandomIndex} from './common-functions.js';

// Crossover
const crossoverProbability = 1 / 5;

const percentParentsDeletion = 4 / 10;

const shouldCrossOver = (proba) => R.pipe(Math.random, R.lt(1 - proba));

const doCrossOver = (reference, target, index) =>
  R.update(index, R.nth(index, reference), target);

const crossOverThis = (ref) => (target) =>
  doCrossOver(ref, target, getRandomIndex(target));

const _crossOver = (proba) => (reference, target) =>
  R.when(shouldCrossOver(proba), crossOverThis(reference))(target);

const magicMapper = (acc, value) => [
  value,
  _crossOver(crossoverProbability)(acc, value)
];

const createOffsprings = (population) =>
  R.pipe(
    R.converge(R.mapAccum(magicMapper), [R.last, R.identity]),
    R.last
  )(population);

const crossOverPopulation = (population) =>
  R.concat(
    R.slice(
      0,
      Math.ceil(population.length * percentParentsDeletion),
      createOffsprings(population)
    )
  )(
    R.slice(
      0,
      Math.floor(
        population.length - population.length * percentParentsDeletion
      ),
      population
    )
  );

export {crossOverPopulation};

// console.log(
//   crossOverPopulation([
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [60, 70, 80, 90, 100, 110, 120, 130, 140],
//     [150, 160, 170, 180, 190, 200, 210, 220, 230],
//     [240, 250, 260, 270, 280, 290, 300, 310, 320],
//     [330, 340, 350, 360, 370, 380, 390, 400, 410]
//   ])
// );
