import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';
import {sortListByDist} from './App/Genetics/scores.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 100;
// Tconst MAX_GEN = 10;

// Tconst map = {0: {x: 0, y: 0, value: 0}, 1: {x: 1, y: 1, value: 1}};
// Tconst population = [{order: [0, 0]}, {order: [0, 1]}];

// Tconsole.log(sortListByDist(map)(population));

const map = createMap(MAX_CITIES);
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
