/*
============================================
; Title:  welchcronin-exercise 4.2.js
; Author: Professor Krasso 
; Date:   10 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array with 5 items and using a function to output
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Exercise 4.2"));
console.log('\n'); //Here I am adding a line break between header and exercise output.


//start program

//Create a string array of five (5) fruit items (order does not matter).
let fruits = ["Apple", "Orange", "Banana", "Mango", "Pear"];

//Create a function called getFruit with one parameter (an array)
//In the body of the getFruit function iterate over the parameterized array (see step 2) and output the results using the console.log() function.
function getFruit (arr) {
    for(let index = 0; index < arr.length; index++)
    console.log(arr[index]);
}

//Call the getFruit function and pass-in the array created in step 1 to test the results.
getFruit(fruits);