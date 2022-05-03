import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 100;
const numberOfIteration = 1;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

for (let i = 0; i < numberOfIteration; i++) {
  population = nextGeneration(map)(population);
}

console.log(population);
