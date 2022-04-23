import * as R from 'ramda';

import {createPop} from './App/Genetics/initPopulation.js';
import {createMap} from './App/Genetics/initMap.js';
import {sortListByScores, sortListByDist} from './App/Genetics/scores.js';
import {mutatePopulation} from './App/Genetics/mutation.js';
import {} from './App/Genetics/crossover.js';
import {} from './App/Genetics/repair.js';
import {} from './App/Genetics/commonFunctions.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const crossoverNumberCity = 3;

population = sortListByScores(map)(population);
console.log('-------------------PAR SCORES-----------------');
console.log(R.nth(0, population));
console.log(R.nth(1, population));
console.log(R.nth(2, population));

population = sortListByDist(map)(population);
console.log('-------------------PAR DIST-----------------');
console.log(R.nth(0, population));
console.log(R.nth(1, population));
console.log(R.nth(2, population));
// console.log(population);
// console.log(map);
