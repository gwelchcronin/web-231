/*
============================================
; Title:  welchcronin-assignment3.4.js
; Author: Professor Krasso 
; Date:   07 November 2020
; Modified By: Georgia Welch Cronin
; Description: Loops
;===========================================
*/

const header = require('./welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 3.4"));
console.log('\n'); //Here I am adding a line break between header and exercise output.
console.log("---DO THE NUMBERS MATCH GAME---")

//start program


//This is a function supplied that will provide a random number between 1 and 10 for the assignment.
function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

//This is creating a variable (testNumber) with a value between 1 and 10 (8), and creating a For loop with 10 iterations (<10) of a local variable (x) that is assigned the random number,
//Here I am creating an if else statement to test if the variable (testNumber) is equal to the randomNumber (x).
//the randomNumber function is within the body so that it will be called and a random number generated. Once moved here it no longer recognizes my 10 iterations, I'm not sure why.
let testNumber = 3;

for (let index = 0; index < 10; index++) {
    let x = randomNumber()
    if (match(testNumber, x)) {
        logMatch(testNumber, x);
    } else {
        logMismatch(testNumber, x);
    }    

}

//

//Here I am copying functions from 3.2 for match, logMismatch and logMatch.
//The first function is defined and shows if arg1 and arg2 are absolutely equal or if they are not.
function match(arg1, arg2){   
    if (arg1 === arg2)
        return true
    else
        return false
} 

//The logMismatch function is defined with 2 parameters, arg1 and arg2.
//The return for this function shows when arg1 and arg2 parameters are not equal.
function logMismatch(arg1, arg2) { 
    console.log(arg1 + " does not match " + arg2 + " !");
}

//The logMatch function is defined showing two parameters, arg1 and arg2.
//The return for this function shows when arg1 and arg2 are equal.
function logMatch(arg1, arg2) {
    console.log(arg1 + " does match " + arg2 + " !");
}


