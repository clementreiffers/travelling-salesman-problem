import * as R from "ramda";

const MAX_POPULATION = 10;

const villes = [
    {x: 2, y: 5},
    {x: 6, y: 2},
    {x: 8, y: 1}
];


let population = [];

// on initialise ici chaque individus par une direction differente (ils vont demarrer au même point)
const createIndiv = n => population.push(
        {
            0: {
                nbrCities: 0,
                dx: parseInt(Math.random() * 10),
                dy: parseInt(Math.random() * 10),
                x: 0,
                y: 0
            }

        }
    );


// fonction qui nous sert pour le unfold
const createItemForIterate = n => n == 0 ? false : [-n, n + 1]; // R.unfold(createItemForIterate, -MAX_POPULATION


// on cree la population ici
const createPopulation = R.forEach(createIndiv, R.unfold(createItemForIterate, -MAX_POPULATION));


console.log(population);


/*
* fonctions à implementer pour la selection naturelle :
*   sort :
*       On veut trier selon plusieurs criteres :
*           combien de ville il est passé
*           en combien d'étapes il l'a fait
*   mutation
*   selection
*   crossover
*
 */

