import * as R from 'ramda';

const pow = (n) => n ** 2;

const sqrt = (n) => n ** (1 / 2);

const subtractAxis = (city1, city2) => (axis) =>
  R.subtract(R.prop(axis, city1), R.prop(axis, city2));

const distance_ = (city1, city2) => {
  if (city1 === 0) return 0;

  return sqrt(
    R.add(
      pow(subtractAxis(city1, city2)('x')),
      pow(subtractAxis(city1, city2)('y'))
    )
  );
};

const isDistanceLessThanTheMax = (value, constraint) => {
  return R.lt(value, constraint);
};

const affiliateValues = (key, value) => R.over(R.lensProp(key), value);

const computeScoreWithConstraint = (cities, constraint) =>
  R.pipe(
    R.reduceWhile(
      (acc) => isDistanceLessThanTheMax(R.prop('distance', acc), constraint),
      (acc, x) =>
        R.pipe(
          affiliateValues('score', R.add(R.prop('value', R.prop(x, cities)))),
          affiliateValues(
            'distance',
            R.add(distance_(R.prop('currentPosition', acc), R.prop(x, cities)))
          ),
          affiliateValues('currentPosition', () => R.prop(x, cities))
        )(acc),
      {
        distance: 0,
        score: 0,
        currentPosition: 0
      }
    ),
    R.prop('score')
  );
const getScoreFromPopulation = (cities, constraint) =>
  R.map(
    R.applySpec({
      order: R.identity,
      score: computeScoreWithConstraint(cities, constraint)
    })
  );

const sortPopulationWithProp_ = (prop) => R.sortBy(R.prop(prop));

const sortListByScores = () => sortPopulationWithProp_('score');

export {sortListByScores, getScoreFromPopulation};
