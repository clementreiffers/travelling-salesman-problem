import * as R from 'ramda';
import {append} from 'ramda';

// Repair :

const listCities = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getMissingCity = R.pipe(R.uniq, R.difference(listCities));

const repair = R.converge(R.concat, [R.uniq, getMissingCity]);

const repairPopulation = (population) => R.map(repair, population);

// console.log(
//   repairPopulation([
//     [1, 1, 3, 4, 5, 6, 7, 8, 9],
//     [9, 9, 7, 6, 5, 4, 3, 2, 1],
//     [1, 2, 2, 4, 5, 6, 7, 8, 9],
//     [9, 8, 7, 6, 5, 7, 3, 2, 1]
//   ])
// );
