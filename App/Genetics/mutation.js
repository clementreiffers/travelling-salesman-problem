import * as R from 'ramda';
import {getRandomIndex} from './common-functions.js';

// Mutation :

const mutateProbability_ = 1 / 5; // 0.2 mutation percent probability

const shouldMutate_ = R.pipe(Math.random, R.lt(1 - mutateProbability_));

const mutate_ = R.converge(R.move, [
	getRandomIndex,
	getRandomIndex,
	R.identity,
]);

const tryMutate_ = R.when(shouldMutate_, mutate_);

const mutatePopulation = population => R.map(tryMutate_, population);

export {mutatePopulation};

