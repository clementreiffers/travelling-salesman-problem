import * as R from 'ramda';

// Repair :

const listCities = (individual) => R.times(R.identity, individual.length);

const getMissingCity = (individual) =>
  R.pipe(R.uniq, R.difference(listCities(individual)))(individual);

const repair = R.converge(R.concat, [R.uniq, getMissingCity]);

const repairPopulation = (population) => R.map(repair, population);

export {repairPopulation};
