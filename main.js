/**
 * @author Sims, Nicolas (sableye.nico@gmail.com)
 * @version 0.0.1
 * @summary Design a program for the Hollywood Movie Rating Guide || created: 10.11.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let finished, switchThing, wolfSide, cabbageSide, goatSide, farmerSide;

function main() {
    setCabbageSide();
    setFarmerSide();
    setGoatSide();
    setWolfSide();
    printPuzzle();
    while (finished == null) {
        setSwitchThing();
        printSideUpdate();
        setFinished();
    }
}

main();

function printPuzzle() {
    console.log('Bring the goat, cabbage, and wolf to the other side of the river.\nIf you leave the wolf and goat ' +
        'alone, the goat\'s a goner. If you leave the goat and cabbage alone, the cabbage is done for. Now, do it!');
}

function setSwitchThing() {
    switchThing = PROMPT.question('What would you like to move to the other side of the river?\n' +
        '<1> = The Cabbage. <2> = The Goat. <3> = The Wolf. <4> = Just yourself.\n>');
    if (switchThing == 1) {
        setCabbageSide();
        setFarmerSide();
    } else if (switchThing == 2) {
        setGoatSide();
        setFarmerSide();
    } else if (switchThing == 3) {
        setWolfSide();
        setFarmerSide();
    } else if (switchThing == 4) {
        setFarmerSide();
    } else {
        while (switchThing != 1 && switchThing != 2 && switchThing != 3 && switchThing != 4) {
            switchThing = PROMPT.question('Please review your inputs.\n' +
                'What would you like to move to the other side of the river?\n' +
                '<1> = The Cabbage. <2> = The Goat. <3> = The Wolf. <4> = Just yourself.\n>');
        }
    }
}

//|| switchThing == 1 && cabbageSide != farmerSide || switchThing == 2 && goatSide != farmerSide || switchThing == 3 && wolfSide != farmerSide

function setCabbageSide() {
    if (cabbageSide == null || cabbageSide == 2) {
        cabbageSide = 1;
    } else {
        cabbageSide = 2;
    }
}

function setGoatSide() {
    if (goatSide == null || goatSide == 2) {
        goatSide = 1;
    } else {
        goatSide = 2;
    }
}

function setWolfSide() {
    if (wolfSide == null || wolfSide == 2) {
        wolfSide = 1;
    } else {
        wolfSide = 2;
    }
}

function setFarmerSide() {
    if (farmerSide == null || farmerSide == 2) {
        farmerSide = 1;
    } else {
        farmerSide = 2;
    }
}

function printSideUpdate() {
    console.log('The cabbage is on side ' + cabbageSide + '\n' +
        'The goat is on side ' + goatSide + '\n' +
        'The wolf is on side ' + wolfSide + '\n' +
        'You are on side ' + farmerSide + '\n')
}

function setFinished() {
    if (cabbageSide == goatSide && goatSide != cabbageSide) {
        finished = 0;
        console.log('The goat eats the cabbage');
    } else if (wolfSide == goatSide && farmerSide != wolfSide) {
        finished = 0;
        console.log('The wolf eats the goat');
    } else if (wolfSide == 2 && goatSide == 2 && cabbageSide == 2 && farmerSide == 2) {
        finished = 1;
        console.log('You win.');
    }
}