import * as R from 'ramda';

const isLessThanMaxDistanceRequired = (acc) => R.gt(250, acc.dist);

// R.memoizeWith('city1.name + city2.name + axis')
// const computePowAxis = (city1, city2) => axis => [R.prop(axis, city1), R.prop(axis, city2)] -> R.subtract -> Math.pow(__, 2);
// const powerAxis = computePowAxis(city1, city2)
// juxt([powerAxis('x'), powerAxis('y')] -> R.add  -> Math.sqrt

const distance = (city1, city2) =>
  Math.sqrt(Math.pow(city1.x - city2.x, 2) + Math.pow(city1.y - city2.y, 2));

const initCalculationsForScore = (acc, v) => {
  acc.isFirstCity = false;
  return acc;
};

const proceedCalculationsForScore = (acc, v) => (map) => {
  acc.dist += distance(R.prop(v, map), acc.city);
  acc.value += R.prop(v, map).value;
  acc.city = R.prop(v, map);
  acc.cityPassed += 1;
  // R.applySpec({
  //    dist:
  //    score:
  //    city:
  // })
  return acc;
};

const calculateScoreOfIndiv = (m) =>
  R.pipe(
    R.reduceWhile(
      isLessThanMaxDistanceRequired,
      (acc, v) => {
        if (acc.cityPassed === acc.nbrCityWanted) {
          acc.value = 0;
          acc.dist = 0;
          acc.cityPassed = 0;
        }
        if (R.not(acc.isFirstCity))
          acc = proceedCalculationsForScore(acc, v)(m);
        else acc = initCalculationsForScore(acc, v);
        return acc;
      },
      {
        dist: 0,
        value: 0,
        cityPassed: 0,
        city: R.prop(0, m),
        nbrCityWanted: R.prop('max', m),
        isFirstCity: true
      }
    ),
    R.omit(['isFirstCity', 'city', 'nbrCityWanted'])
  );

const calculateScoresFromArrays = (m) =>
  R.pipe(R.prop('order'), calculateScoreOfIndiv(m));

const getDistanceFromScoreOfObject = (indiv) => R.prop('value');

const assocTimeInSeconds = (m) =>
  R.pipe(R.converge(R.mergeRight, [calculateScoresFromArrays(m), R.identity]));

const sortListByTimesWithTemporaryName_ = (temporaryProp) => (m) =>
  R.pipe(R.map(assocTimeInSeconds(m)), R.sortBy(R.prop(temporaryProp)));

const sortListByScores = (m) => sortListByTimesWithTemporaryName_('value')(m);

const sortListByDist = (m) => sortListByTimesWithTemporaryName_('dist')(m);

export {sortListByScores, sortListByDist};
