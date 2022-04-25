# TSP_system

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascriptLogo" style="height:50px;"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejsLogo" style="height:50px;"/>
  <img src="https://ramdajs.com/ramdaFilled_200x235.png" alt="ramdajsLogo" style="height:50px;"/>
</p>  

## Description

Travelling Salesman Problem system, made in functionnal programming Javascript with Ramda.

### Travalling Salesman Problem

The Travelleing Salesman Problem also know as TSP is an NP-hard problem in combinatorial optimization.  
Imagine a set of city disposed on a map, you have a set of salesman (population) and they must all go to every city in the least amount of time/distance.
The optimisation solution is the one one where a saleman goes through all the cities with the least distance or/and time.  

In the image below you can see a representation of the tsp problem with cities named A, B, C, D. Going from a city to another take more or less time than other depending on the distance.

<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Weighted_K4.svg/1024px-Weighted_K4.svg.png" alt="tspExampleImage" style="height:400px"/>
</p>  

### App description/implementation

To implement the TSP problem we use genetic algorithm.  

Step order:

1. Generate a population where very salesman (individual) has a list of city he goes through.

2. Mutate the population (20% chance of happening on every individual)

3. Crossover the population to create 40% of new individuals that will replace 40% of the old one. An offspring heritate all cities from its first parent and a chance of 20% to heritate a city from its second parent).

4. Repair the population, repair the individuals that pass to a city more than one time.

5. Display best result of population

6. Iterate a new time from step 2.

## Installation

To run the app, you need to install node:  
<https://nodejs.org/en/download/>

Once installed, with your terminal go to the folder to the root of the project and run the following commande:  

If you're using npm:

```node
npm install
```

or if you're using Yarn:

```node
yarn install
```

It will install all the needed libraries to start the project.

## Start the app

After just start the program by typing:

```node
npm start
```

or

```node
yarn start
```

## Output example

```text
first step {
  value: 9,
  cityPassed: 9,
  dist: 44,
  order: [
    3, 2, 7, 5, 1,
    6, 4, 8, 9, 0
  ]
}
111
last step {
  value: 9,
  cityPassed: 9,
  dist: 49,
  order: [
    5, 8, 3, 6, 0,
    9, 7, 4, 1, 2
  ]
}
```

## Project architecture

|   |**Location**|
|---|---|
|**Source code**|root|
|**Gulpfile**|root|
|**Unit test scripts**|test folder|

The Source code is at the root folder and contains the TSP.  
The gulpfile is an auto-run script to run the TSP.  
The unit test scripts are a set of scripts to verify the good behaviour of some functions.  

## Developers tools

The project is set with some tools like auto run (gulp), unit test (chai, mocha), code formatter (xo/prettier).

### Auto run project

The project has a gulpfile to autorun the script while prorgramming. To install gulp type the following command:

```node
npm install --global gulp-cli
```

or

```node
yarn add gulp-cli
```

To start it type in the root folder the command:

```node
gulp
```

Each time a js script is modified and save, it will run the index.js file.  
The gulp file is written in js.

### Unit test

To run the unit test scritps, you can type the command:

```node
npm test
```

or

```node
yarn test
```

It will start mocha that will look for test scripts.  
The test scripts are written in js with Chai.
Take note that github verify the correct work of the tests.

### Code format test

You can test the format code of the project by typing the following command:  

```node
npm run code-style
```

or

```node
yarn run code-style
```

Warning:  
*To easily achieve the code format test, you should use prettier for xo codeformatting that is already set with some parameters in the project*

## GitActions

[![Node.js CI test and code-style](https://github.com/clementreiffers/travelling_salesman_problem/actions/workflows/node.js.yml/badge.svg)](https://github.com/clementreiffers/travelling_salesman_problem/actions/workflows/node.js.yml)

The project is set with GitHub Actions that will test:

- code format and functions not used (xo)

- unit test scripts (chai and mocha)

If one of those test failed a mail is sent to the person who tried to merge its code from the staging to main branch.

## Authors

- Quentin MOREL (<https://github.com/Im-Rises/>)
- Clément REIFFERS (<https://github.com/clementreiffers>)

## Special thanks

- Maxime ROBIN (<https://github.com/Waxo>)

## Documentations

<https://en.wikipedia.org/wiki/Travelling_salesman_problem>  
<https://www.youtube.com/watch?v=ncj_hBfRt-Y>  

## Libraries

Node and npm (runtime environment and software packaging system):  
<https://nodejs.org/>  

Yarn (software packaging system):  
<https://classic.yarnpkg.com/lang/en>  

Ramda (functional programming library in JS):  
<https://ramdajs.com>  

Gulp (auto script starter):  
<https://gulpjs.com>  

Chai (assertion library):  
<https://www.chaijs.com/>  

Mocha (test framework):  
<https://mochajs.org>  

Xo (code formater wraper):  
<https://github.com/xojs/xo>  

Prettier (code formatter):  
<https://prettier.io>  

Editor config (normalize the IDE for the project):  
<https://EditorConfig.org>
