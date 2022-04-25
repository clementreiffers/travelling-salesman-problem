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
