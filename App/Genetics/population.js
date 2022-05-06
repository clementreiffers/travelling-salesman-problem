/*
 * GENERATION OF POPULATION
 */
import * as R from 'ramda';
import {shuffleList} from './common-functions.js';

const createRandomCityPath_ = (maxCities) =>
  shuffleList(R.times(R.identity, maxCities));

const createRandomIndiv_ = (maxCity) =>
  R.applySpec({
    path: () => createRandomCityPath_(maxCity)
  });

const appendIndivToPopulation_ = (population) => (indiv) =>
  R.nth(0, R.append(indiv, population));

const createIndivFromPath = R.applySpec({path: R.identity});

const createPop = (maxPop) => (maxCity) =>
  R.times(appendRandomIndivToPopulation(maxCity)([]), maxPop);

const appendRandomIndivToPopulation = (maxCity) => (population) => () =>
  appendIndivToPopulation_(population)(createRandomIndiv_(maxCity)());

const createPopulationFromListOfPath = R.map(createIndivFromPath);

export {createPop, createPopulationFromListOfPath};
