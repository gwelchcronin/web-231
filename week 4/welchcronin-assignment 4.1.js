/*
============================================
; Title:  welchcronin-assignment 4.1.js
; Author: Professor Krasso 
; Date:   10 November 2020
; Modified By: Georgia Welch Cronin
; Additional ideas about working with arrays and the sort method from (Flanagan, p 149, 2011) and from https://www.w3schools.com/js/js_array_sort.asp
; Description: Creating an array with 2 errors
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 4.1"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program


//Creating an array with 4 items.
let inks = ['cyan', 'magenta', 'yellow', 'black']

//Using the sort method to alphabetize the ink names.
inks.sort();

//Adding a title line to explain the output.
console.log("Printer Inks in Alphabetical Order");

//Adding a space between the title and the output.
console.log('\n');

//Calling the array to be sorted. 
console.log(inks);


//Expected output: (4) ['black', 'cyan', 'magenta', 'yelow']