import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {getScoreFromPopulation, sortListByScores} from './scores.js';

const nextGeneration = (map) => (maxDistance) =>
  R.pipe(
    R.pluck('path'),
    mutatePopulation,
    crossOverPopulation,
    repairPopulation,
    getScoreFromPopulation(map, maxDistance),
    sortListByScores(map),
    R.reverse
  );

export default nextGeneration;
