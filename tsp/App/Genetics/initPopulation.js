/*
 * GENERATION OF POPULATION
 */
import * as R from "ramda";

let MAX_POPULATION = 0;

const shuffleList_ = R.sort(() => Math.random() - 0.5);

const createRandomCityPath_ = () => shuffleList_(R.times(R.identity, MAX_POPULATION));


const createRandomIndiv_ = R.applySpec({
    order : createRandomCityPath_,
    score: null
});

const appendIndivToPopulation_ = population => indiv => R.append(indiv, population)

const appendRandomIndivToPopulation_ = population => n => R.nth(0, appendIndivToPopulation_(population)(createRandomIndiv_()))

const createPop = pop => R.times(appendRandomIndivToPopulation_(pop), MAX_POPULATION);

const setMaxPopulation = maxPop => MAX_POPULATION = maxPop;

export {createPop, setMaxPopulation};