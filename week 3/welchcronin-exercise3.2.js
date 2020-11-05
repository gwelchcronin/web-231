/*
============================================
; Title:  welchcronin-assignment3.2.js
; Author: Professor Krasso 
; Date:   03 November 2020
; Modified By: Georgia Welch Cronin
; Description: Pattern Matching Functions
;===========================================
*/

const header = require('./welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 3.2"));

//start program


//local variables are set for this test
let testVar1 = "Truck";
let testVar2 = "Car"
let testVar3 = "Camper"
let testVar4 = "Camper"
let testVar5 = "Bicycle"
let testVar6 = "Tricycle"


//first function is defined showing if arg1 and arg2 are absolutely equal
function match(arg1, arg2){   
    if (arg1 === arg2)
        return true
    else
        return false
} 

//second function is defined with 2 parameters, arg1 and arg2
//the return for this function shows when arg1 and arg2 parameters are not equal
function logMismatch(arg1, arg2) { 
    console.log(arg1 + " and " + arg2 + " do not match!");
}

//third function is defined showing two parameters, arg1 and arg2
//the return for this function shows when arg1 and arg2 are equal
function logMatch(arg1, arg2) {
    console.log(arg1 + " and " + arg2 + " do match!");
}


//output from the match() function
console.log('\n'); //adding a line break between header and exercise output
console.log(match("A", "B"));
console.log(match(2,2));

//if else statement to test the functions with variables 1 & 2
if (match(testVar1, testVar2)) {
    logMatch(testVar1, testVar2);
} else {
    logMismatch(testVar1, testVar2);
}

//if else statement to test the functions with variables 3 & 4
if (match(testVar3, testVar4)) {
    logMatch(testVar3, testVar4);
} else {
    logMismatch(testVar3, testVar4);
}

//if else statement to test the functions with variables 5 & 6
if (match(testVar5, testVar6)) {
    logMatch(testVar5, testVar6);
} else {
    logMismatch(testVar5, testVar6);
}