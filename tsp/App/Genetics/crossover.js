import * as R from 'ramda';

const getRandomValue = (maxValue) => Math.floor(Math.random() * (maxValue + 1)); //Math.random return 0 to 1 (0 included but not 1).
const getRandomIndex = (individual) =>
  Math.floor(Math.random() * individual.length); //Math.random return 0 to 1 (0 included but not 1).

//Crossover

const crossoverProbability = 1; //0.2 crossover percent possibility

const shouldCrossover = R.pipe(Math.random, R.lt(1 - crossoverProbability));
// const shouldCrossover = (crossoverProb) => () =>
//   Math.random() > 1 - crossoverProb;

// const importCityFromIndividual = R.converge(R.nth, [
//   getRandomIndex,
//   R.identity
// ]);

// const importCityFromNeighbour = R.converge(R.move, [
//   getRandomIndex / 2,
//   getRandomIndex,
//   R.identity
// ]);

const moveCityFromArrToArr = console.log;

const concatArrays = R.concat;

const tryCrossover = R.when(shouldCrossover, concatArrays);

const crossoverPopulation = R.map(tryCrossover);
// const crossoverPopulation = R.forEach(tryCrossover);

crossoverPopulation([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [60, 70, 80, 90, 100, 110, 120, 130, 140]
]);

// export {importCityFromIndividual};
