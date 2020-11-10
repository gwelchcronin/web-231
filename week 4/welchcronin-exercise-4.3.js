/*
============================================
; Title:  welchcronin-assignment 4.3.js
; Author: Professor Krasso 
; Date:   10 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array with 5 items and using a function and loop to output
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 4.3"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

//Create a string array of 5 vehicles.
let vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

//Create a function called getValue with two parameters: an array and a string value.
//In the body of the getValue function, iterate over the parameterized array
//In the body of the for loop add an if statement and use the second parameter (see step 2) 
//...to test if the string value(stringValue) matches the current value(arr/index) in the loop. 
function getValue (arr, stringValue) {
    for(let index = 0; index < arr.length; index++)
    if(arr[index] === stringValue)
    console.log(arr[index]);
}

//Use the console.log() function to output the matching value. 
//Output is of the full length (or all items in) the vehicles array. 
console.log("--DISPLAYING ARRAY ITEMS--") //Header for the output of this section.
    for(let y = 0; y < vehicles.length; y++) {
        console.log(vehicles[y]);
    }

console.log('\n'); //Here I am adding a line break between exercise outputs.

//Use the function(getValue) to output the selected value or item. 
//Output is one of the items in the vehicles array. 
console.log("--DISPLAYING SELECTED ITEM--") //Header for the output of this section.
getValue(vehicles, "Motorcycle");

console.log('\n'); //Here I am adding a line break between exercise outputs.

//Use the function(getValue) to output the selected value or item. 
//Output is one of the items in the vehicles array. 
console.log("--DISPLAYING SELECTED ITEM--") //Header for the output of this section.
getValue(vehicles, "Airplane");