/*
 * GENERATION OF POPULATION
 */
import * as R from "ramda";

const shuffleList_ = R.sort(() => Math.random() - 0.5);

const createRandomCityPath_ = (maxCities) =>
  shuffleList_(R.times(R.identity, maxCities));

const createRandomIndiv_ = (maxCity) =>
  R.applySpec({
    order: () => createRandomCityPath_(maxCity),
    score: null,
  });

const appendIndivToPopulation_ = (population) => (indiv) =>
  R.append(indiv, population);

const appendRandomIndivToPopulation_ = (population) => (maxCity) => (n) =>
  appendIndivToPopulation_(population)(createRandomIndiv_(maxCity)());

const createPop = (maxPop) => (maxCity) =>
  R.times(appendRandomIndivToPopulation_([])(maxCity), maxPop);

export { createPop };
