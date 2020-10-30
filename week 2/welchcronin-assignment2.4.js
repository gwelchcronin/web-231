/*
============================================
; Title:  welchcronin-assignment2.4.js
; Author: Professor Krasso 
; Date:   30 October 2020
; Modified By: Georgia Welch Cronin
; Additional dateWriter code ideas from https://stackoverflow.com/questions/60408068/date-and-time-function-formatting
; Description: Defining and calling functions practice
;===========================================
*/

const header = require('./welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 2.4"));

//start program


//functions
function fullName(firstName,lastName){
    return firstName + ' ' + lastName;
}
function dateWriter(year,month,day){
    return month+"/"+day+"/"+year;
}
function formatNumber(number, toNumOfFixedpositions){
    return number;
}
function convertToInt(str){
    return parseInt(str, 10);
}
function convertToFloat(str){
    return parseFloat(str);
}

//assigning results of the function to variables in the output
console.log('\n');
console.log("Hello my name is " + fullName('Georgia', 'WelchCronin') +"!");
console.log("Today's date is " + dateWriter(2020, 10, 30) + " and the current temperature is " + formatNumber('32.0') + " degrees.");
console.log("I am " + convertToInt('52') + " years old and my savings account goal is " + convertToFloat('5000.00') + " dollars.");