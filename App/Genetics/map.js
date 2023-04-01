import * as R from 'ramda';
import {getRandomValue} from './common-functions.js';

const appendCityToMap_ = (map) => (maxCities, width, height) => (city) =>
  R.assoc(city, createCity_(maxCities, width, height), map);

const createCity_ = (maxCities, width, height) =>
  R.applySpec({
    x: R.pipe(getRandomValue, R.multiply(width)),
    y: R.pipe(getRandomValue, R.multiply(height)),
    value: R.pipe(getRandomValue, R.multiply(maxCities))
  })(maxCities);

const createMap = (maxCities, width, height) =>
  R.mergeAll(
    R.times(
      appendCityToMap_({max: maxCities})(maxCities, width, height),
      maxCities
    )
  );
export {createMap};
