/*
 * GENERATION OF POPULATION
 */
import * as R from 'ramda';
import {shuffleList} from './commonFunctions.js';

const createRandomCityPath_ = (maxCities) =>
  shuffleList(R.times(R.identity, maxCities));

const createRandomIndiv_ = (maxCity) =>
  R.applySpec({
    order: () => createRandomCityPath_(maxCity),
    score: null
  });

const appendIndivToPopulation_ = (population) => (indiv) =>
  R.nth(0, R.append(indiv, population));

const appendRandomIndivToPopulation_ = (population) => (maxCity) => (n) =>
  appendIndivToPopulation_(population)(createRandomIndiv_(maxCity)());

const createPop = (maxPop) => (maxCity) =>
  R.times(appendRandomIndivToPopulation_([])(maxCity), maxPop);

export {createPop};
