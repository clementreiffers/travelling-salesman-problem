import * as R from 'ramda';

//Random functions :

const getRandomValue = (maxValue) => Math.floor(Math.random() * (maxValue + 1)); //Math.random return 0 to 1 (0 included but not 1).
const getRandomIndex = (individual) =>
  Math.floor(Math.random() * individual.length); //Math.random return 0 to 1 (0 included but not 1).

// Mutation :

// const isMutating = R.pipe(Math.random, R.lt(1 - mutateProbability));
const shouldMutate = (mutateProb) => () => Math.random() > 1 - mutateProb;

const moveCityFromIndividual = R.converge(R.move, [
  getRandomIndex,
  getRandomIndex,
  R.identity
]);

const tryMutate = R.when(shouldMutate, moveCityFromIndividual);

const mutatePopulation = R.map(tryMutate);

// console.log(
//   mutatePopulation([
//     [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     [60, 70, 80, 90, 100, 110, 120, 130, 140]
//   ])
// );

// Crossover :

// const isCrossovering = () => Math.random() > 1 - crossoverProbability;
const shouldCrossover = (crossoverProb) => () =>
  Math.random() > 1 - crossoverProb;

// const importCityFromIndividual = R.converge(R.nth, [
//   getRandomIndex,
//   R.identity
// ]);

const importCityFromNeighbour = R.converge(R.move, [
  getRandomIndex / 2,
  getRandomIndex,
  R.identity
]);

const concatParents = R.concat;

const moveCityFromIndToInd = 

const tryCrossover = R.when(shouldCrossover, moveCityFromIndToInd);

const crossoverPopulation = R.map(tryCrossover);

console.log(
  crossoverPopulation([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [60, 70, 80, 90, 100, 110, 120, 130, 140]
  ])
);

// // Repair :
//
// const repair = ()=> R.pipe(R.uniq, R.difference())

// Mutate, Crossover and Repair
//
// const nextGen = R.map(
//   R.pipe(mutatePopulation, crossoverPopulation, repairPopulation)
// );

export {importCityFromIndividual};
