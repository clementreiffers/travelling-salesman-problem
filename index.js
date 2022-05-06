import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

const MAX_CITIES = 100;
const MAX_POPULATION = 5;
const MAX_DISTANCE = 500;
const numberOfIteration = 100;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const doCyle = () => {
  population = nextGeneration(map)(MAX_DISTANCE)(population);
  return population;
};

const calculateTsp = R.times(doCyle, numberOfIteration);

// First iteration best result
console.log('Best result 1st iteration :', R.head(R.head(calculateTsp)));
// Last iteration best result
console.log(
  'Best result ' + numberOfIteration + ' iterations',
  R.head(R.last(calculateTsp))
);
