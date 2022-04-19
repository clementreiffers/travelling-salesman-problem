import * as R from "ramda";

const MAX_CITIES = 10;

const cities = {};
const indiv = [];

const createCity = (number) => cities[number] = {x:parseInt(Math.random()*10), y:parseInt(Math.random()*10)};

// fonction qui nous sert pour le unfold
const createItemForIterate = n => n === 0 ? false : [-n, n + 1];

// unfold c'est l'inverse d'un reduce, on cree ici une liste d'element a partir d'un chiffre
const unfoldPopulation = R.unfold(createItemForIterate, -MAX_CITIES);

const createCities = R.forEach(createCity, unfoldPopulation);

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

const createIndiv = () => indiv.push(shuffle(unfoldPopulation));

createIndiv()
createIndiv()

console.log(indiv)