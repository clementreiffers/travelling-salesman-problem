import * as R from "ramda";
// import * as p5 from "p5";

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

const cities = {};
const population = [];
const offspring = [];

const crossoverNumberCity = 3;

const createCity = (number) => cities[number] = {
    x: parseInt(Math.random() * 10),
    y: parseInt(Math.random() * 10),
    value: 1
};

const shuffleList = R.sort(() => Math.random() - 0.5);

const createIndiv = () => population.push({
    order: shuffleList(R.times(R.identity, MAX_POPULATION)),
    score: ""
});

// a revoir
const createPopulation = R.append(R.times(createIndiv, MAX_POPULATION));

// a revoir
const createCities = R.pipe(R.times(createCity, MAX_CITIES));

const isLessThanMaxDistanceRequired = (acc, v) => acc.dist < 250;

const distance = (city1, city2) => Math.sqrt(Math.pow(city1.x - city2.x, 2) + Math.pow(city1.y - city2.y, 2));

const initCalculationsForScore = (acc, v) => {
    acc.isFirstCity = false;
    acc.previousCityNumber = v;
    return acc;
}

const proceedCalculationsForScore = (acc, v) => {
    acc.dist += distance(R.nth(v, cities), acc.city)
    acc.score += R.nth(v, cities).value;
    acc.city = R.nth(acc.previousCityNumber, cities);
    acc.previousCityNumber = v;
    return acc;
}

const calculateScores = R.reduceWhile(
    isLessThanMaxDistanceRequired,
    (acc, v) => {
        if (R.not(acc.isFirstCity)) {
            acc = proceedCalculationsForScore(acc, v);
        } else {
            acc = initCalculationsForScore(acc, v);
        }
        return acc;
    }, {dist: 0, score: 0, previousCityNumber: 0, city: R.nth(0, cities), isFirstCity: true}
);

console.log(calculateScores([1, 9, 3, 4]));

/*
* Parent 2 city is mutated into parent 1 to create offspring.
*/

// const parent1 = [1, 1, 1, 1, 2];
// const parent2 = [2, 2, 2, 2, 1];

const parent1 = [1, 2, 3, 4, 5, 6, 7, 8];
const parent2 = [8, 4, 2, 5, 1, 6, 3, 7];

const doMutation = (parent1, parent2, mutationIndex) => mutate(R.nth(mutationIndex, parent2), mutationIndex, parent1);

const getRandomIndex = (maxValue) => Math.floor((Math.random() * 10) % maxValue);

const mutate = (value, index, parent1) => R.move(R.indexOf(value, parent1), index, parent1);

const crossover = (parent1, parent2) => doMutation(parent1, parent2, getRandomIndex(parent2.length));

console.log(crossover(parent1, parent2));
