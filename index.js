import * as R from "ramda";

const MAX_POPULATION = 100;

// fonction qui nous sert pour le unfold
const createItemForIterate = n => n == 0 ? false : [-n, n + 1];

const unfoldPopulation = R.unfold(createItemForIterate, -MAX_POPULATION);

const cities = [
    {x: 2, y: 5},
    {x: 6, y: 2},
    {x: 8, y: 1}
];


let population = [];

const getX = R.pipe(
    R.pluck("x")
)

const getY = R.pipe(
    R.pluck("y")
)

const checkIfSomeonePassThroughCity = (indiv, city) => {
    if (R.and(R.equals(indiv[indiv.ways].x, city.x), R.equals(indiv[indiv.ways].y, city.y)))
        indiv.nbrCities++;
}


const addStepToIndiv = (indiv) => {
    indiv[indiv.ways+1] = {
        dx:indiv[indiv.ways].dx,
        dy:indiv[indiv.ways].dy,
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
                dx: parseInt(Math.random()*10),
                dy: parseInt(Math.random()*10),
                x: 0,
                y: 0
            }

        }
    );


// on cree la population ici
const createPopulation = R.forEach(createIndiv, unfoldPopulation);

const mutatatePopulation = () => R.forEach(addStepToIndiv, population);

// the tail is always the best speciemen
const sortPopulationByCities = R.sortBy(R.prop("nbrCities"));

mutatatePopulation();
mutatatePopulation();

console.log(sortPopulationByCities(population));



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

