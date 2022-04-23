import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/nextGen.js';
import * as R from 'ramda';
import {sortListByDist} from './App/Genetics/scores.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;
const MAX_GEN = 10;

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = sortListByDist(map)(population);
console.log('first step', R.head(population));

population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);

population = sortListByDist(map)(population);
console.log(R.length(population));

console.log('last step', R.head(population));
