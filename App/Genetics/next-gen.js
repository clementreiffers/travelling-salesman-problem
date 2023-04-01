import * as R from 'ramda';
import {mutatePopulation} from './mutation.js';
import {crossOverPopulation} from './crossover.js';
import {repairPopulation} from './repair.js';
import {getScoreFromPopulation, sortListByScores} from './scores.js';

const nextGeneration = (map, {maxDistance}, population) =>
	R.pipe(
		R.pluck('path'),
		mutatePopulation,
		crossOverPopulation,
		repairPopulation,
		getScoreFromPopulation(map, maxDistance),
		sortListByScores(maxDistance),
		R.reverse, // To have the best scores on the top of the list
	)(population);

export default nextGeneration;

