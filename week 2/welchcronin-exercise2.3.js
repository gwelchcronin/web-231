/*
============================================
; Title:  welchcronin-exercise2.3.js
; Author: Professor Krasso 
; Date:   30 October 2020
; Modified By: Georgia Welch Cronin
; Description: Learning function properties
;===========================================
*/

const header = require('./welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Exercise 2.3"));

//start program

/*
Expected output:
FirstName LastName
Exercise 2.3
Today's Date

Hello FirstName LastName!
*/


// The function property is defined here.
myName.georgia = "Georgia WelchCronin";

// Here is the actual function and what I want it to do.
function myName(){
    return myName.georgia;
}

//This is the output from the function.
console.log('\n');
console.log("Hello " + myName() +"!");

//end program