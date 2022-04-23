import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/nextGen.js';
import * as R from 'ramda';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
console.log(R.length(population));

population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
console.log(R.length(population));

population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
console.log(R.length(population));

console.log(population);
