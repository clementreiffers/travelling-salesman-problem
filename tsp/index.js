import * as R from 'ramda';

import {createPop} from './App/Genetics/initPopulation.js';
import {createMap} from './App/Genetics/initMap.js';
import sortListByScores from './App/Genetics/scores.js';
import {mutatePopulation} from './App/Genetics/mutation.js';
import {crossOverPopulation} from './App/Genetics/crossover.js';
import {repairPopulation} from './App/Genetics/repair.js';
import {} from './App/Genetics/commonFunctions.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 20;

// listCities(MAX_POPULATION);

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const crossoverNumberCity = 3;

population = sortListByScores(map)(population);

console.log(population);

const new_population = R.pipe(
  R.pluck('order'),
  mutatePopulation,
  crossOverPopulation,
  repairPopulation
);

console.log(new_population(population));
