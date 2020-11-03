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


/*
  Expected output:
  FirstName LastName
  Exercise 3.3
  Today's Date
  // Expected output
  The enter key was pressed
*/



console.log('\n'); //adding a line break between header and exercise output

//start program

let eventKeyCode = 13;


//Taking if else statements and turning int o a switch statement
switch (eventKeyCode){

    case 13: //start here if the eventKeyCode equals 13
        console.log("The enter key was pressed.");
        break; //stop here

    case 16: //start here if eventKeyCode equals 16
        console.log("The shift key was pressed.");
        break;  //stop here

    case 32: //start here if eventKeyCode equals 32
        console.log("The spacebar was pressed.");
        break;  //stop here

    case 8: //start here if eventKeyCode equals 8
        console.log("The backspace / delete key was pressed.");
        break;  //stop here

    default: //start here if eventKeyCode is unrecognized
        console.log("Unrecognized key.");
        break;  //stop here


}