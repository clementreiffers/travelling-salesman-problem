import * as R from 'ramda';
import {getRandomValue} from './common-functions.js';

const appendCityToMap_ = map => city =>
	R.assoc(city, createCity_(map), map);

const createCity_ = map =>
	R.pipe(
		R.applySpec({
			x: R.pipe(getRandomValue, R.multiply(R.prop('width', map))),
			y: R.pipe(getRandomValue, R.multiply(R.prop('height', map))),
			value: R.pipe(getRandomValue, R.multiply(R.prop('maxCities', map))),
		}),
	)(map);

const createMap = ({maxCities, width, height}) =>
	R.mergeAll(R.times(appendCityToMap_({maxCities, width, height}), maxCities));

export {createMap};

