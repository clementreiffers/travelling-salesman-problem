import * as R from 'ramda';
import {getRandomIndex} from './common-functions.js';

// Crossover
const crossoverProbability = 1;

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

const crossOverPopulation = (population) =>
  R.pipe(
    R.append(
      R.converge(R.mapAccum(magicMapper), [R.last, R.identity])(population)
    ),
    R.last
  )(population);

console.log(
  crossOverPopulation([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [60, 70, 80, 90, 100, 110, 120, 130, 140]
  ])
);

export {crossOverPopulation};
