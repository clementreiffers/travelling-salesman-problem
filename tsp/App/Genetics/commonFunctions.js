import * as R from 'ramda';

const getRandomValue = (maxValue) => Math.floor(Math.random() * (maxValue + 1)); //Math.random return 0 to 1 (0 included but not 1).
const getRandomIndex = (individual) =>
  Math.floor(Math.random() * individual.length); //Math.random return 0 to 1 (0 included but not 1).

export {getRandomIndex};
