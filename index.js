import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

const MAX_CITIES = 50;
const MAX_POPULATION = 10;
const MAX_DISTANCE = 500;
const MAX_ITERATIONS = 100;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const doCyle = () => {
  population = nextGeneration(map)(MAX_DISTANCE)(population);
  return population;
};

const calculateTsp = R.times(doCyle, MAX_ITERATIONS);

const showBestResultFirstIteration = R.head(R.head(calculateTsp));

const showBestResultLastIteration = R.head(R.last(calculateTsp));

console.log(
  '-----------------------------------------------------------------'
);

console.log('All Cities : \n', map, '\n');

console.log('Best result 1st iteration :', showBestResultFirstIteration, '\n');
console.log(
  'Best result ' + MAX_ITERATIONS + ' iterations',
  showBestResultLastIteration,
  '\n'
);

console.log(
  '-----------------------------------------------------------------'
);
