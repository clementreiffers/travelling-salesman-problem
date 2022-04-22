import * as R from "ramda";

const appendCityToMap_ = (map) => (city) => R.assoc(city, createCity_(), map);

const getRandomValue_ = () => Math.floor(Math.random() * 10);

const createCity_ = R.applySpec({
    x: getRandomValue_,
    y: getRandomValue_,
    value: getRandomValue_
});

const createMap = (maxCities) => (map) => R.times(appendCityToMap_(map), maxCities);

export {createMap}