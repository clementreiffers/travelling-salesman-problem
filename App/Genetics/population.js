import * as R from 'ramda';
import {shuffleList} from './common-functions.js';

const createRandomCityPath_ = maxCities =>
	shuffleList(R.times(R.identity, maxCities));

const createRandomIndiv_ = maxCity =>
	R.applySpec({
		path: () => createRandomCityPath_(maxCity),
	});

const appendIndivToPopulation_ = population => indiv =>
	R.nth(0, R.append(indiv, population));

const appendRandomIndivToPopulation_ = maxCity => population => () =>
	appendIndivToPopulation_(population)(createRandomIndiv_(maxCity)());

const createPop = ({maxPopulation, maxCities}) =>
	R.times(appendRandomIndivToPopulation_(maxCities)([]), maxPopulation);

export {createPop};
