import * as R from 'ramda';

const getRandomValue = () => Math.random(); // Math.random return 0 to 1 (0 included but not 1).

const getRandomIndex = individual =>
	Math.floor(Math.random() * individual.length); // Math.random return 0 to 1 (0 included but not 1).

const shuffleList = R.sort(() => Math.random() - 0.5);

export {getRandomIndex, getRandomValue, shuffleList};

