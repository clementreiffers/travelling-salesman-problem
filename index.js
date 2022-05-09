import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

/*
below, 4 values you can change to test the code
it's only hyperparameters
 */

const MAX_CITIES = 50;
const MAX_POPULATION = 10;
const MAX_DISTANCE = 500;
const MAX_ITERATIONS = 100;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const changePopulation = () => {
  population = nextGeneration(map)(MAX_DISTANCE)(population);
  return population;
};

const repeatNextGeneration = R.times(changePopulation, MAX_ITERATIONS);

const getBestResultFirstIteration = R.head(R.head(repeatNextGeneration));

const getBestResultLastIteration = R.head(R.last(repeatNextGeneration));

console.log(
  '-----------------------------------------------------------------'
);
console.log('All Cities : \n', map);

console.log('Best result 1st iteration :', getBestResultFirstIteration);
console.log(
  `Best result after ${MAX_ITERATIONS} iterations`,
  getBestResultLastIteration
);

console.log(
  '-----------------------------------------------------------------'
);
