import * as R from 'ramda';

// Repair :

const listCities = (individual) => R.times(R.identity, individual.length);

const getMissingCity = (individual) =>
  R.pipe(R.uniq, R.difference(listCities(individual)))(individual);

const repair = R.converge(R.concat, [R.uniq, getMissingCity]);

const repairPopulation = (population) => R.map(repair, population);

export {repairPopulation};

// console.log(
//   repairPopulation([
//     [0, 1, 1, 3, 4, 5, 6, 7, 8, 9],
//     [0, 9, 9, 7, 6, 5, 4, 3, 2, 1],
//     [0, 1, 2, 2, 4, 5, 6, 7, 8, 9],
//     [0, 9, 8, 7, 6, 5, 7, 3, 2, 1]
//   ])
// );
