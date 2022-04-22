import * as R from "ramda";

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

const getResidualCity = (city) => R.nth(R.keys(city), city);

const proceedCalculationsForScore = (acc, v) => (map) => {
  acc.dist += distance(
    getResidualCity(R.nth(v, map)),
    getResidualCity(acc.city)
  );

  acc.score += getResidualCity(R.nth(v, map)).value;
  acc.city = R.prop(v, map);

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
        if (R.not(acc.isFirstCity))
          acc = proceedCalculationsForScore(acc, v)(m);
        else acc = initCalculationsForScore(acc, v);

        return acc;
      },
      {
        dist: 0,
        score: 0,
        city: R.nth(0, m),
        isFirstCity: true,
      }
    ),
    R.omit(["isFirstCity", "city", "previousCityNumber"])
  );

const calculateScoresFromArrays = (m) =>
  R.pipe(R.prop("order"), calculateScoreOfIndiv(m));

const assocTimeInSeconds = (temporaryProp) => (m) =>
  R.converge(R.assoc(temporaryProp), [
    calculateScoresFromArrays(m),
    R.identity,
  ]);

const sortListByTimesWithTemporaryName_ = (temporaryProp) => (m) =>
  R.pipe(
    R.map(assocTimeInSeconds(temporaryProp)(m)),
    R.sortBy(R.prop(temporaryProp))
  );

const sortListByScores = (m) => sortListByTimesWithTemporaryName_("score")(m);

export default sortListByScores;
