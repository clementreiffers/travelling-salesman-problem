import * as R from "ramda";

import { createPop, setMaxPopulation } from "./App/Genetics/initPopulation.js";
import { createMap, setMaxCities } from "./App/Genetics/initMap.js";

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

setMaxPopulation(MAX_POPULATION);
setMaxCities(MAX_CITIES);

let map = createMap({});
let population = createPop([]);

const mutateProbability = 1; //0.2
const crossoverProbability = 1; //0.2

const naturalSelectionPercentParent = 0.6; // Check value

console.log(map);

const isLessThanMaxDistanceRequired = (acc) => R.gt(250, acc.dist);

const distance = (city1, city2) =>
  Math.sqrt(Math.pow(city1.x - city2.x, 2) + Math.pow(city1.y - city2.y, 2));

const initCalculationsForScore = (acc, v) => {
  acc.isFirstCity = false;
  acc.previousCityNumber = v;
  return acc;
};

const getResidualCity = (city) => R.nth(R.keys(city), city);

const proceedCalculationsForScore = (acc, v) => {
  acc.dist += distance(
    getResidualCity(R.nth(v, map)),
    getResidualCity(acc.city)
  );

  acc.score += getResidualCity(R.nth(v, map)).value;
  acc.city = R.nth(acc.previousCityNumber, map);
  acc.previousCityNumber = v;
  return acc;
};

const calculateScoreOfIndiv = R.pipe(
  R.reduceWhile(
    isLessThanMaxDistanceRequired,
    (acc, v) => {
      if (R.not(acc.isFirstCity)) acc = proceedCalculationsForScore(acc, v);
      else acc = initCalculationsForScore(acc, v);

      return acc;
    },
    {
      dist: 0,
      score: 0,
      previousCityNumber: 0,
      city: R.nth(0, map),
      isFirstCity: true,
    }
  ),
  R.dissoc("previousCityNumber"),
  R.dissoc("city"),
  R.dissoc("isFirstCity")
);

const calculateScoresFromArrays = R.pipe(
  R.prop("order"),
  calculateScoreOfIndiv
);

const assocTimeInSeconds = (temporaryProp) =>
  R.converge(R.assoc(temporaryProp), [calculateScoresFromArrays, R.identity]);

const sortListByTimesWithTemporaryName_ = (temporaryProp) =>
  R.pipe(
    R.map(assocTimeInSeconds(temporaryProp)),
    R.sortBy(R.prop(temporaryProp))
  );

const sortListByScores = sortListByTimesWithTemporaryName_("score");

population = sortListByScores(population);
console.log(population);

//------------------------------------------------------------------------------------------------------------

const getRandomValue = (maxValue) => Math.floor(Math.random() * (maxValue + 1)); //Math.random return 0 to 1 (0 included but not 1).

// Mutation :

// const isMutating = R.pipe(Math.random, R.lt(1 - mutateProbability));
const shouldMutate = (mutateProb) => () => Math.random() > 1 - mutateProb;

//Ajouter un converge ici pour simplifier ???
const moveCityFromIndivudal = (individual) =>
  R.move(
    getRandomValue(individual.length),
    getRandomValue(individual.length),
    individual
  );

const mutate = R.when(shouldMutate, moveCityFromIndivudal);

const mutatePopulation = R.map(mutate);

console.log(
  mutatePopulation([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [60, 70, 80, 90, 100, 110, 120, 130, 140],
  ])
);

// Crossover :

const isCrossovering = () => Math.random() > 1 - crossoverProbability;

const importCityFromNeighbour = (population) => ;

const crossover = () => R.when(isCrossovering, importCityFromOther)

// // Repair :
//
// const repair = ()=> R.pipe(R.uniq, R.difference())
