import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/nextGen.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

console.log(nextGeneration(map)(population));
