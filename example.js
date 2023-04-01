import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

/*
Below, 4 values you can change to test the code
it's only hyper parameters:
- The number of city
- The population size
- The max distance calculated
- the number of iteration
 */

const MAX_CITIES = 50;
const MAX_POPULATION = 10;
const MAX_DISTANCE = undefined;
const MAX_ITERATIONS = 100;

const PARAMETERS = {
  maxCities: 50,
  maxPopulation: 10,
  maxDistance: undefined,
  maxIterations: 100,
  width: 500,
  height: 500
};

const map = createMap(PARAMETERS);
let population = createPop(PARAMETERS);

const changePopulation = () => {
  population = nextGeneration(map, MAX_DISTANCE, population);
  return population;
};

const repeatNextGeneration = R.times(changePopulation, MAX_ITERATIONS);

const getResults = R.pipe(
  R.applySpec({
    firstIteration: R.head,
    lastIteration: R.last
  }),
  R.map(R.head)
);

console.log('All Cities : \n', map);
console.log(getResults(repeatNextGeneration));
