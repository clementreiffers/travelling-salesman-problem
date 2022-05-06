import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;
const MAX_DISTANCE = 150;
const numberOfIteration = 10;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const doCyle = () => {
  population = nextGeneration(map)(MAX_DISTANCE)(population);
  return population;
};

const calculateTsp = R.times(doCyle, numberOfIteration);

//First iteration best result
console.log(R.head(R.head(calculateTsp)));
//Last iteration best result
console.log(R.head(R.last(calculateTsp)));
