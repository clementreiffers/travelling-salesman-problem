import * as R from 'ramda';

const pow_ = n => n ** 2;

const sqrt_ = n => n ** (1 / 2);

const subtractAxis_ = (city1, city2) => axis =>
	R.subtract(R.prop(axis, city1), R.prop(axis, city2));

const distance_ = (city1, city2) => {
	if (city1 === 0) {
		return 0;
	}

	return sqrt_(
		R.add(
			pow_(subtractAxis_(city1, city2)('x')),
			pow_(subtractAxis_(city1, city2)('y')),
		),
	);
};

const isDistanceLessThanTheMax_ = (value, maxDistance) =>
	R.lt(value, maxDistance);

const affiliateValues_ = (key, value) => R.over(R.lensProp(key), value);

const computeScoreWithMaxDistance_ = (cities, maxDistance) =>
	R.pipe(
		R.reduceWhile(
			acc => isDistanceLessThanTheMax_(R.prop('distance', acc), maxDistance),
			(acc, x) =>
				R.pipe(
					affiliateValues_('score', R.add(R.prop('value', R.prop(x, cities)))),
					affiliateValues_(
						'distance',
						R.add(distance_(R.prop('currentPosition', acc), R.prop(x, cities))),
					),
					affiliateValues_('currentPosition', () => R.prop(x, cities)),
				)(acc),
			{
				distance: 0,
				score: 0,
				currentPosition: 0,
			},
		),
		R.prop('score'),
	);

const sortPopulationWithProp_ = prop => R.sortBy(R.prop(prop));

const setCitiesAtIndice_ = cities => indice => R.prop(indice, cities);

const computeScoreWithoutMaxDistance_ = cities => path => R.pipe(
	R.aperture(2),
	R.map(R.map(setCitiesAtIndice_(cities))),
	R.map(([city1, city2]) => distance_(city1, city2)),
	R.sum,
)(path);

const isMaxDistanceIsUndefined_ = R.equals(undefined);

const computeScore_ = (cities, maxDistance) =>
	R.ifElse(
		() => isMaxDistanceIsUndefined_(maxDistance),
		computeScoreWithoutMaxDistance_(cities),
		computeScoreWithMaxDistance_(cities, maxDistance),
	);

const getScoreFromPopulation = (cities, maxDistance) =>
	R.pipe(
		R.map(
			R.applySpec({
				path: R.identity,
				score: computeScore_(cities, maxDistance),
			}),
		),
	);

const sortListByScores = maxDistance =>
	R.ifElse(
		() => isMaxDistanceIsUndefined_(maxDistance),
		R.pipe(sortPopulationWithProp_('score'), R.reverse),
		sortPopulationWithProp_('score'),
	);

export {sortListByScores, getScoreFromPopulation};

