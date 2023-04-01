import * as R from 'ramda';

const listCities_ = individual => R.times(R.identity, individual.length);

const getMissingCity_ = individual =>
	R.pipe(R.uniq, R.difference(listCities_(individual)))(individual);

const repair_ = R.converge(R.concat, [R.uniq, getMissingCity_]);

const repairPopulation = population => R.map(repair_, population);

export {repairPopulation};

