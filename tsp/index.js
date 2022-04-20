import * as R from "ramda";
// import * as p5 from "p5";

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

const cities = {};
const population = [];

const crossoverValue = 1 / 4;

const createCity = (number) => cities[number] = {x: parseInt(Math.random() * 10), y: parseInt(Math.random() * 10)};

// fonction qui nous sert pour le unfold
const createItemForIterate = n => n === 0 ? false : [-n, n + 1];

// unfold c'est l'inverse d'un reduce, on cree ici une liste d'element a partir d'un chiffre
const unfoldCities = R.unfold(createItemForIterate, -MAX_CITIES);

const shuffle = R.sort(() => Math.random() - 0.5);

const createIndiv = () => population.push({order: shuffle(unfoldPopulation), score: ""});
const unfoldPopulation = R.unfold(createItemForIterate, -MAX_POPULATION);

const vectorNorm = (city1, city2) => Math.sqrt(Math.pow(city1.x - city2.x, 2) + Math.pow(city1.y - city2.y, 2));
// const

const createPopulation = R.append(R.forEach(createIndiv, unfoldCities));

// a revoir
const createCities = R.forEach(createCity, unfoldCities);


const calculateScores = (array) => {
    let score = 0;
    for (let i in array) {
        if (Number(i) + 1 < array.length)
            score += vectorNorm(cities[R.nth(i, array)], cities[R.nth(Number(i) + 1, array)]);
    }
    return score;
}

console.log(calculateScores([1, 2, 3, 4]));

// console.log(createPopulation(population));


const getCrossoVerTab = (table, index, crossoverValue) => {
    return R.slice(index, index + crossoverValue * table.length, table);
}

const getRandomInt = (maxValue) => {
    return Math.floor(Math.random() * maxValue);
}

console.log(getCrossoVerTab([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], getRandomInt(12), crossoverValue))


// const doCrossover = (individual) => {
//
// }