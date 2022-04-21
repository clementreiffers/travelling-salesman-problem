import * as R from "ramda";

let MAX_CITIES = 0;

const appendCityToMap_ = map => city => R.assoc(city, createCity_(), map);

const getRandomValue_ = () => Math.floor(Math.random() * 10);

const createCity_ = R.applySpec({
    x: getRandomValue_,
    y: getRandomValue_,
    value: getRandomValue_
});

const createMap = (map) => R.times(appendCityToMap_(map), MAX_CITIES);

const setMaxCities = maxCities => MAX_CITIES = maxCities;

export {createMap, setMaxCities}