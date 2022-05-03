import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';
import {
  sortListByScores,
  getScoreFromPopulation
} from './App/Genetics/scores.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 2;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// console.log('first step', R.head(population));

// console.log(population);

// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
// population = nextGeneration(map)(MAX_POPULATION)(MAX_CITIES)(population);
//
// console.log(population);
