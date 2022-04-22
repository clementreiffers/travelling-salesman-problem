import * as R from "ramda";
// import * as p5 from "p5";
import { createPop } from "./App/Genetics/initPopulation.js";
import { createMap } from "./App/Genetics/initMap.js";
import sortListByScores from "./App/Genetics/scores.js";

const MAX_CITIES = 10;
const MAX_POPULATION = 20;

let map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

const offspring = [];

const crossoverNumberCity = 3;

population = sortListByScores(map)(population);
console.log(population);

// console.log(population);
/*
 * Parent 2 city is mutated into parent 1 to create offspring.
 */

// const parent1 = [1, 1, 1, 1, 2];
// const parent2 = [2, 2, 2, 2, 1];

const parent1 = [1, 2, 3, 4, 5, 6, 7, 8];
const parent2 = [8, 4, 2, 5, 1, 6, 3, 7];

const doMutation = (parent1, parent2, mutationIndex) =>
  mutate(R.nth(mutationIndex, parent2), mutationIndex, parent1);

const getRandomIndex = (maxValue) =>
  Math.floor((Math.random() * 10) % maxValue);

const mutate = (value, index, parent1) =>
  R.move(R.indexOf(value, parent1), index, parent1);

const crossover = (parent1, parent2) =>
  doMutation(parent1, parent2, getRandomIndex(parent2.length));

// console.log(crossover(parent1, parent2));

const createOffsprings = (offspringNumber, parentList) => {
  return R.times(
    crossover(parentList[i * 2], parentList[i * 2 + 1]),
    offspringNumber
  );
};

// console.log(createOffsprings(1, parent1, parent2))
