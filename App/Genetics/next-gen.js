import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {createPop, createPopulationFromListOfOrder} from './population.js';
import {sortListByDist} from './scores.js';
import {shuffleList} from './common-functions.js';

const sixtyPercent = (pop) =>
  Math.floor(R.divide(R.multiply(60, R.length(pop)), 100));

const killRandomPeople = (pop) =>
  R.slice(0, sixtyPercent(pop), shuffleList(pop));

const cloneTheBestIndiv = (pop) => R.append(R.head(pop), pop);

const nextGeneration = (map) => (maxPop) => (maxCities) =>
  R.pipe(
    R.pluck('order'),
    mutatePopulation,
    crossOverPopulation,
    repairPopulation,
    createPopulationFromListOfOrder,
    killRandomPeople,
    sortListByDist(map),
    cloneTheBestIndiv,
    R.concat(createPop(maxPop)(maxCities))
  );

export default nextGeneration;
