import * as R from 'ramda';

const allCities = {
  paris: {x: 1, y: 2, value: 300},
  lyon: {x: 100, y: 300, value: 500},
  marseille: {x: 120, y: 500, value: 20},
  bordeaux: {x: -12, y: 300, value: 1000}
};

const parents = [
  ['paris', 'lyon', 'marseille', 'bordeaux'],
  ['bordeaux', 'lyon', 'marseille', 'paris'],
  ['bordeaux', 'lyon', 'paris', 'marseille'],
  ['marseille', 'lyon', 'bordeaux', 'paris'],
  ['paris', 'lyon', 'marseille', 'bordeaux']
];

// console.log(getScoreFromPopulation(allCities, 1000)(parents));
