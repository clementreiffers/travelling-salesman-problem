import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {createPop, createPopulationFromListOfOrder} from './population.js';
import {sortListByDist} from './scores.js';

const percentageDeleted = (population) => 60 / 100;

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
    R.concat(createPop(maxPop)(maxCities))
  );

export default nextGeneration;
