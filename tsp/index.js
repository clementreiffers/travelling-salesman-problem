import * as R from "ramda";
// import * as p5 from "p5";

const MAX_CITIES = 10;
const MAX_POPULATION = 10;

const cities = {};
const population = [];
const offspring = [];

const crossoverNumberCity = 3;

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


// const getCrossoverTab = (table, index, crossoverNumberElement) => {
//     return R.slice(index, index + crossoverNumberElement, table);
// }
//
// const getRandomInt = (maxValue) => {
//     return Math.floor(Math.random() * maxValue);
// }
//
// const doCrossover = (individual1, individual2, crossoverIndex) => {
//
//     return R.concat(individual1, getCrossoverTab(individual2, crossoverIndex, crossoverValue));
// }
//
// console.log(doCrossover([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [30, 31, 32, 33, 34, 35, 36, 37, 38, 39], getRandomInt(10), crossoverValue))

// const doCrossover = (individual1, individual2, index) => {
//     return individual1[index] = individual2[index];
// }
//
// const getRandomInt = (maxValue) => Math.floor(Math.random() * maxValue);
//
// const swipeCities = (value1, value2) => {
//     const temp = value1;
//     value1 = value2;
//     value2 = temp;
// }

// const swap = (array, index1, index2)=>{
//     array = R.move(index1,index2, array);
//     array = R.move(index2-1,index1, array);
//     console.log(array)
// }
//
// console.log(swap([1,2,3,4,5],0,4))
//
// const swap = (array, index1, index2) => {
//     return R.pipe(R.move(index1, index2, array), R.move(index2 - 1, index1, array))
// }
//
// console.log(swap([1, 2, 3, 4, 5], 0, 4))


// const swap = (idx1, idx2) => R.pipe(
//     R.move(idx1, idx2),
//     R.move(idx2 - 1, idx1)
// );
//
// console.log(swap(0, 2) ([1, 2, 3, 4, 5, 6, 7, 8]))

// console.log(getRandomIndex([1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(mutate(4, 0, [1, 2, 3, 4, 5, 6, 7, 8]))
// console.log(doMutation(parent1, parent2, getRandomIndex(parent1)))
// console.log(getMutated(getRandomIndex(parent1),parent1))

const parent1 = [1, 2, 3, 4, 5, 6, 7, 8];
const parent2 = [10, 11, 12, 13, 14, 15, 16, 17];


const getRandomIndex = (array) => Math.floor((Math.random() * 10) % array.length);

const getMutated = (randomIndex, array) => getRandomIndex(array);

const mutate = (value, index, array) => R.move(R.indexOf(value, array), index, array);

const doMutation = (parent1, parent2, index) => {
    return mutate(getMutated(parent1, index), index, parent2);
}

console.log(doMutation(parent1, parent2, getRandomIndex(parent.length)))


// const crossover = R.when(isMutating, doMutation);