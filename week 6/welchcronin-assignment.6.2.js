/*
============================================
; Title:  welchcronin-discussion 6.2.js
; Author: Professor Krasso 
; Date:   25 November 2020
; Modified By: Georgia Welch Cronin
; Additional ideas for code from https://www.w3schools.com/js/js_errors.asp 
  and the code for returning a number from https://www.w3resource.com/javascript/form/all-numbers.php
; Description: Creating a simple Javascript program using exception handling to throw an error and display it
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Discussion 6.2"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program


//Throw an error of your choosing (cannot be a divide by zero exception)

//I want the user to enter a 6 digit zipcode so they are prompted by an alert
// console.log("Please enter your zipcode" + '\n');

//Using a try, catch, and finally block, catch and display the error

try {
    // variables, asking for user to input a number 
    //(I imagine asking for say a zipcode, though I have commented out that portion so the output is accurate for the exercise)
    let numbers = /^[0-9]+$/;

  
    // if statement, if what they enter is not a number
    if (numbers != /^[0-9]+$/) 
    //throw statement, what they entered is not a number
    throw 'NotANumberException'
  
    // output
    console.log(sum)
  } catch (err) {
    console.log('Catch clause: ' + err)
  } finally {
    console.log('Finally clause reached...')
  }

