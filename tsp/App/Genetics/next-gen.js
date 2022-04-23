import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {createPop, createPopulationFromListOfOrder} from './population.js';
import {sortListByDist} from './scores.js';

const percentageDeleted = () => 10 / 100;

const indexMaxFromPercentageDeleted = (population) =>
  Math.round(R.multiply(percentageDeleted(), R.length(population)));

const killWeakPeople = (population) =>
  R.slice(0, indexMaxFromPercentageDeleted(population), population);

const killIndiv = (population) => (n) => R.drop(n, population);

const shouldIHaveThePermissionToKill = () =>
  R.pipe(Math.random, R.lt(1 - 1 / 10));

const killRandomPeople = (population) =>
  R.last(
    R.times(R.when(shouldIHaveThePermissionToKill, killIndiv(population)), 3)
  );

const nextGeneration = (map) => (maxPop) => (maxCities) =>
  R.pipe(
    R.pluck('order'),
    mutatePopulation,
    crossOverPopulation,
    repairPopulation,
    createPopulationFromListOfOrder,
    sortListByDist(map),
    killWeakPeople,
    R.concat(createPop(maxPop)(maxCities))
  );

// Majuscule console.log(killRandomPeople([1, 2, 3, 4, 5, 6, 7, 8, 9]));

export default nextGeneration;
