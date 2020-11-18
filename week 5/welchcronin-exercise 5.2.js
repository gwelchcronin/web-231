/*
============================================
; Title:  welchcronin-assignment 5.2.js
; Author: Professor Krasso 
; Date:   18 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array with 5 items and using ES5 built-in functions
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 5.2"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

//Create a string array of 5 favorite foods.
let foods = ["Samosas", "Pears", "Pasta", "Nuts", "Falafel"];

//Using JavaScripts built-in forEach() function, iterate over the array and output the results.
foods.forEach((favFood) => {
    console.log(favFood)
})