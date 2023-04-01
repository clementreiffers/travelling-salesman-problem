import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

/*
Below, 4 values you can change to test the code
it's only hyper parameters:
- The number of city (maxCities)
- The population size (maxPopulation)
- The max distance calculated (maxDistance): It could be either a Number and Undefined
- the number of iteration
- the width of the map
- the height of the map
 */

const PARAMETERS = {
	maxCities: 50,
	maxPopulation: 10,
	maxDistance: undefined,
	maxIterations: 100,
	width: 500,
	height: 500,
};

const map = createMap(PARAMETERS);
let population = createPop(PARAMETERS);

const changePopulation = () => {
	population = nextGeneration(map, PARAMETERS, population);
	return population;
};

const repeatNextGeneration = ({maxIterations}) =>
	R.times(changePopulation, maxIterations);

const getResults = R.pipe(
	R.applySpec({
		firstIteration: R.head,
		lastIteration: R.last,
	}),
	R.map(R.head),
);

console.log('All Cities : \n', map);
console.log(getResults(repeatNextGeneration(PARAMETERS)));
