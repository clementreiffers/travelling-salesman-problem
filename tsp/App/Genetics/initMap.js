import * as R from 'ramda';
import {getRandomValue} from './commonFunctions.js';

const appendCityToMap_ = (map) => (maxCities) => (city) =>
  R.assoc(city, createCity_(maxCities), map);

// const getRandomValue_ = () => Math.floor(Math.random() * 10);

const createCity_ = R.applySpec({
  x: () => getRandomValue(R.identity),
  y: () => getRandomValue(R.identity),
  value: () => getRandomValue(R.identity)
});

const createMap = (maxCities) =>
  R.times(appendCityToMap_({})(maxCities), maxCities);

export {createMap};
