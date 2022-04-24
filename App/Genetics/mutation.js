import * as R from 'ramda';
import {getRandomIndex} from './common-functions.js';

// Mutation :

const mutateProbability = 1 / 5; // 0.2 mutation percent possibility

const shouldMutate = R.pipe(Math.random, R.lt(1 - mutateProbability));

const mutate = R.converge(R.move, [getRandomIndex, getRandomIndex, R.identity]);

const tryMutate = R.when(shouldMutate, mutate);

const mutatePopulation = (population) => R.map(tryMutate, population);

export {mutatePopulation};
