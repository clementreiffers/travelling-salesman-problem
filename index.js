import * as R from 'ramda';
import {createPop} from './App/Genetics/population.js';
import {createMap} from './App/Genetics/map.js';
import nextGeneration from './App/Genetics/next-gen.js';

const MAX_CITIES = 10;
const MAX_POPULATION = 10;
const MAX_DISTANCE = 150;
const numberOfIteration = 10;

const map = createMap(MAX_CITIES);
let population = createPop(MAX_POPULATION)(MAX_CITIES);

// population = nextGeneration(map)(MAX_DISTANCE)(population);
// console.log('First iteration :', R.head(population));
//
// for (let i = 0; i < numberOfIteration; i++) {
//   population = nextGeneration(map)(MAX_DISTANCE)(population);
//   console.log(R.head(population));
// }
// console.log('Last iteration (' + numberOfIteration + ') :', R.head(population));

// const testRepeat = R.repeat(
//   R.head(nextGeneration(map)(MAX_DISTANCE)(population)),
//   numberOfIteration
// );
//
// console.log(testRepeat); //Retourne le meilleur résultat de chaque itération !!!

const pasBeau = (index) => {
  // console.log(pop === population);
  console.log(index);
  population = nextGeneration(map)(MAX_DISTANCE)(population);
  return population;
};

const testRepeat = R.times(pasBeau(population), numberOfIteration);

console.log(testRepeat); //Retourne le meilleur résultat de chaque itération !!!

// R.repeat() // ne fonctionne pas correctement car il appelle la fonction envoyé en paramètre qu'une sule fois ce con. Ce qui fait que ça met à jour la population qu'une fois mdr

// console.log(R.head(testRepeat)); //Retourne le meilleur résultat de chaque itération !!!

// console.log(testRepeat);

// let test = [1,2,3,4,5,6,7,8,9];
//
// const testfunc = (tab)=>{
//   tab[2]=-10;
// }
//
// testfunc(test)
//
// console.log(test)
