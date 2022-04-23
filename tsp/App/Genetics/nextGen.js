import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {createPopulationFromListOfOrder} from './population.js';
import {sortListByDist} from './scores.js';

const nextGeneration = (map) =>
  R.pipe(
    R.pluck('order'),
    mutatePopulation,
    crossOverPopulation,
    repairPopulation,
    createPopulationFromListOfOrder,
    sortListByDist(map)
  );

export default nextGeneration;
