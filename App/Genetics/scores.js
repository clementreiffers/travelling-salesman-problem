import * as R from 'ramda';

const isLessThanMaxDistanceRequired_ = (acc) => R.gt(250, acc.dist);

const pow = (n) => n ** 2;

const sqrt = (n) => n ** (1 / 2);

const subtractAxis = (city1, city2) => (axis) =>
  R.subtract(R.prop(axis, city1), R.prop(axis, city2));

const distance_ = (city1, city2) =>
  sqrt(
    R.add(
      pow(subtractAxis(city1, city2)('x')),
      pow(subtractAxis(city1, city2)('y'))
    )
  );

const initCalculationsForScore_ = (acc) => {
  acc.isFirstCity = false;
  return acc;
};

const proceedCalculationsForScore_ = (acc, v) => (map) =>
  setAcc(
    R.add(R.prop('value', acc), R.prop('value', R.prop(v, map))),
    R.add(R.prop('dist', acc), distance_(R.prop(v, map), acc.city)),
    R.inc(R.prop('cityPassed', acc)),
    R.prop('city', acc),
    R.prop('nbrCityWanted', acc),
    R.prop('isFirstCity', acc)
  )();

const setAcc = (value, dist, cityPassed, city, nbrCityWanted, isFirstCity) =>
  R.pipe(
    R.applySpec({
      city: () => city,
      value: () => value,
      cityPassed: () => cityPassed,
      dist: () => dist,
      nbrCityWanted: () => nbrCityWanted,
      isFirstCity: () => isFirstCity
    })
  );

const calculateScoreOfIndiv_ = (map) =>
  R.pipe(
    R.reduceWhile(
      isLessThanMaxDistanceRequired_,
      (acc, v) => {
        // acc = R.ifElse(
        //   () =>
        //     R.converge(R.equals, [
        //       R.prop('cityPassed', acc),
        //       R.prop('nbrCityWanted', acc)
        //     ]),
        //   () => setAcc(0, 0, 0, acc.city, acc.nbrCityWanted, acc.isFirstCity)(),
        //   () => acc
        // )();

        acc = R.ifElse(
          () => R.prop('isFirstCity', acc),
          () => initCalculationsForScore_(acc),
          () => proceedCalculationsForScore_(acc, v)(map)
        )();
        return acc;
      },
      {
        dist: 0,
        value: 0,
        cityPassed: 0,
        city: R.prop(0, map),
        nbrCityWanted: R.prop('max', map),
        isFirstCity: true
      }
    ),
    R.omit(['isFirstCity', 'city', 'nbrCityWanted'])
  );

const calculateScoresFromArrays_ = (map) =>
  R.pipe(R.prop('order'), calculateScoreOfIndiv_(map));

const calculateScoresAndDistsFromIndiv_ = (map) =>
  R.pipe(
    R.converge(R.mergeRight, [calculateScoresFromArrays_(map), R.identity])
  );

const sortPopulationWithProp_ = (temporaryProp) => (m) =>
  R.pipe(
    R.map(calculateScoresAndDistsFromIndiv_(m)),
    R.sortBy(R.prop(temporaryProp))
  );

const sortListByScores = (m) => sortPopulationWithProp_('value')(m);

const sortListByDist = (m) => sortPopulationWithProp_('dist')(m);

export {sortListByScores, sortListByDist};
