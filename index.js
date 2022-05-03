import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;
const MAX_DISTANCE = 150;
const numberOfIteration = 100;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

population = nextGeneration(map)(MAX_DISTANCE)(population);
console.log('First iteration : ', R.head(population));

for (let i = 0; i < numberOfIteration; i++) {
  population = nextGeneration(map)(MAX_DISTANCE)(population);
}
console.log(
  'Last iteration (' + numberOfIteration + ') : ',
  R.head(population)
);
