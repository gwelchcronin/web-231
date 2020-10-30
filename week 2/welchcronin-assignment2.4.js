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
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 2.4
  Today's Date
  Hello my name is <your actual name goes here>!
  Today's date is <today's date> and the current temperature is <33.6 - use the formatNumber function> degrees.
  I am <your actual age - parsed int value> years old and my savings account goal is <your actual goal - parsed float value> dollars.
*/

fullName = "Georgia Welch Cronin!"
dateWriter = "2020, October, 29, "
formatNumber = "45.48"
convertToInt = "52"
convertToFloat = "500"

function fullName(firstName,lastName){
    return fullName;
}
function dateWriter(year, month, day) {
    return dateWriter;
}
function formatNumber(number, numOfFixedPositions) {
    return formatNumber;
}
function convertToInt(myage) {
    return convertToInt;
}
function convertToFloat(money) {
    return convertToFloat;
}



console.log("Hello my name is " + fullName) 
console.log("Today's date is " + dateWriter + "and the current temperature is " + formatNumber + " degrees.")
console.log("My age is " + convertToInt + " years old " + "and my savings account goal is " + convertToFloat + " dollars." )