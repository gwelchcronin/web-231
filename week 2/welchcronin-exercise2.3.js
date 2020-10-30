/*
============================================
; Title:  header.js
; Author: Professor Krasso 
; Date:   27 June 2020
; Modified By: Georgia Welch Cronin
; Description: Displays a formatted header
;===========================================
*/
//start program

/*
Expected output:
FirstName LastName
Exercise 2.3
Today's Date

Hello FirstName LastName!
*/


// function property is defined here
myName.georgia = "Georgia Welch Cronin";

// here is the actual function and what I want it to do
function myName(){
    return myName.georgia;
}

//output from the function
console.log("Hello " + myName() +"!");

//end program