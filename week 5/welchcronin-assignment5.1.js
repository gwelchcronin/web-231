/*
============================================
; Title:  welchcronin-assignment 5.1.js
; Author: Professor Krasso 
; Date:   16 November 2020
; Modified By: Georgia Welch Cronin
;Additional ideas for code from the Keyed Collections _MDN reading this week
; Description: Creating a keyed collection array with 2 errors
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 5.1"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

//Creating a keyed collection array of vintage campers.
let vintageCamp = new Map();
vintageCamp.map ('Shasta', 'Aljo');
vintageCamp.set ('Nomad', 'Kit');
vintageCamp.set ('Franklin', 'Airstream');

//Output the title for the list.
console.log('-- COOL VINTAGE CAMPERS --')

//Iterating through and creating a list of the array in an output statement.
for (let [value, key] of vintageCamp) {
    console.log('\n' + key + ' is cooler than ' + value);
}


//Desired Output:
// -- COOL VINTAGE CAMPERS --

// Shasta is cooler than Aljo

// Nomad is cooler than Kit

// Franklin is cooler than Airstream
