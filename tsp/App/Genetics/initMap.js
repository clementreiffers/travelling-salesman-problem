import * as R from 'ramda';
import {getRandomValue} from './commonFunctions.js';
import {max} from 'ramda';

const appendCityToMap_ = (map) => (maxCities) => (city) =>
  R.assoc(city, createCity_(maxCities), map);

const createCity_ = R.applySpec({
  x: getRandomValue,
  y: getRandomValue,
  value: getRandomValue
});

const createMap = (maxCities) =>
  R.mergeAll(R.times(appendCityToMap_({max: maxCities})(maxCities), maxCities));

export {createMap};
