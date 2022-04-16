import * as R from "ramda";

// constante a initialiser pour avoir le nombre total de population
const MAX_POPULATION = 100;

// tableau qui sert à enregistrer chaque deplacement de chaque individus
let population = [];

// fonction qui nous sert pour le unfold
const createItemForIterate = n => n === 0 ? false : [-n, n + 1];

// unfold c'est l'inverse d'un reduce, on cree ici une liste d'element a partir d'un chiffre
const unfoldPopulation = R.unfold(createItemForIterate, -MAX_POPULATION);

// coordonnees x et y de chaque villes
const cities = [
    {x: 2, y: 5},
    {x: 6, y: 2},
    {x: 8, y: 1}
];

// on regarde ici si un individus passe par une ville (en regardant bien les coordonnees)
const checkIfSomeonePassThroughCity = (indiv, city) => {
    if (R.and(R.equals(indiv[indiv.ways].x, city.x), R.equals(indiv[indiv.ways].y, city.y)))
        indiv.nbrCities++;
}

// on fait deplacer un individus
const addStepToIndiv = (indiv) => {
    indiv[indiv.ways+1] = {
        dx:Math.random() < 0.5 ?  -parseInt(Math.random()*10) : parseInt(Math.random()*10),
        dy:Math.random() < 0.5 ? -parseInt(Math.random()*10) : parseInt(Math.random()*10),
        x:indiv[indiv.ways].x+indiv[indiv.ways].dx,
        y:indiv[indiv.ways].y+indiv[indiv.ways].dy
    }
    indiv.ways++;
    for(let city of cities)
        checkIfSomeonePassThroughCity(indiv, city);
}

// on initialise ici chaque individus par une direction differente (ils vont demarrer au même point)
const createIndiv = n => population.push(
        {
            ways:0,
            nbrCities: 0,
            0: {
                dx: Math.random() < 0.5 ? -parseInt(Math.random()*10) : parseInt(Math.random()*10),
                dy: Math.random() < 0.5 ? -parseInt(Math.random()*10) : parseInt(Math.random()*10),
                x: 0,
                y: 0
            }

        }
    );


// on cree la population ici
const createPopulation = R.forEach(createIndiv, unfoldPopulation);

// on va muter tous les individus un par un
const mutatatePopulation = () => R.forEach(addStepToIndiv, population);

// la queue est toujours le meilleur specimen
const sortPopulationByCities = R.sortBy(R.prop("nbrCities"));

// on les fait muter 100 fois
for(let i = 0; i<100 ; i++)
    mutatatePopulation();

// on affiche le resultat de la mutation + le tri
console.log(R.tail(sortPopulationByCities(population)));



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

