import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {createPopulationFromListOfOrder, immigration} from './population.js';
import {sortListByDist} from './scores.js';

const percentageDeleted = (population) =>
  R.divide(100, R.multiply(R.length(population), 25));

const indexMaxFromPercentageDeleted = (population) =>
  Math.round(R.multiply(percentageDeleted(population), R.length(population)));

const killWeakPeople = (population) =>
  R.slice(
    indexMaxFromPercentageDeleted(population),
    R.length(population),
    population
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
    immigration(maxPop)(maxCities)
  );

export default nextGeneration;
