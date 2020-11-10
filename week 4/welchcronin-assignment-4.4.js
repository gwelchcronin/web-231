/*
============================================
; Title:  welchcronin-assignment 4.14.js
; Author: Professor Krasso 
; Date:   10 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array with 5 items, and using a predicate to output
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 4.4"));

//start program

//Create a string array of 5 states. 
let states = ["California", "Washington", "Illinois", "Mississippi", "New York"];

//Create a function called getState with two string parameters.
//n the body of the getState function add an if statement to test if the two string parameters match.  
//...If they match, return true
function getState (param1, param2) {
    if (param1 === param2)
    return true
else
    return false
}

//Using JavaScript's built-in filter() function, 
//...call the getState function and pass-in the current element 
//...of the filter loop and the value to find (see page 154 of the courses textbook). 
states.filter(getState(true));


//Output to see if the parameters match. 
console.log("--ORIGINAL ARRAY--") //Header for the output of this section.
    for(let y = 0; y < states.length; y++) {
        console.log(states[y]);
    }