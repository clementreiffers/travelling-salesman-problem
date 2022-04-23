import * as R from 'ramda';

import {createPop} from './App/Genetics/initPopulation.js';
import {createMap} from './App/Genetics/initMap.js';
import sortListByScores from './App/Genetics/scores.js';
import {mutatePopulation} from './App/Genetics/mutation.js';
import {} from './App/Genetics/crossover.js';
import {} from './App/Genetics/repair.js';
import {} from './App/Genetics/commonFunctions.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 20;

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const crossoverNumberCity = 3;

population = sortListByScores(map)(population);
console.log(population);
