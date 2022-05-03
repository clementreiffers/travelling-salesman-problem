import * as R from 'ramda';
import {getRandomValue} from './common-functions.js';

const appendCityToMap_ = (map) => (maxCities) => (city) =>
  R.assoc(city, createCity_(maxCities), map);

const createCity_ = R.applySpec({
  x: getRandomValue(100),
  y: getRandomValue(100),
  value: () => getRandomValue(100)
});

const createMap = (maxCities) =>
  R.mergeAll(R.times(appendCityToMap_({max: maxCities})(maxCities), maxCities));

export {createMap};
