import * as R from 'ramda';
import {getRandomIndex} from './commonFunctions.js';

// Mutation :

const mutateProbability = 1 / 5; //0.2 mutation percent possibility

const shouldMutate = R.pipe(Math.random, R.lt(1 - mutateProbability));

const mutate = R.converge(R.move, [getRandomIndex, getRandomIndex, R.identity]);

const tryMutate = R.when(shouldMutate, mutate);

const mutatePopulation = R.map(tryMutate);

export {mutatePopulation};

console.log(
  mutatePopulation([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [60, 70, 80, 90, 100, 110, 120, 130, 140]
  ])
);
