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

//function properties
// fullName.glwc = "Georgia Welch-Cronin"
// dateWriter.current = "2020, October 29"
// formatNumber.temp = "45"
// convertToInt.me = "52"
// convertToFloat.mine = "500"

//functions
function fullName(firstName,lastName){
    return firstName + ' ' + lastName;
}
function dateWriter(year,month,day){
    return year, + ' ' + month, + ' ' + day;
}
function formatNumber(number,numOfFixedPositions){
    return number + numOfFixedPositions;
}
function convertToInt(str){
    return parseInt(str, 10);
}
function convertToFloat(str){
    return parseFloat(str);
}

//assigning results of the function to fullName variable
fullName = ('Georgia', 'WelchCronin');

//output
console.log('\n');
console.log("Hello my name is " + fullName +"!");
console.log("Today's date is " + dateWriter + " and the current temperature is " + formatNumber(32.50));
console.log("I am " + convertToInt + " years old and my savings account goal is " + convertToFloat(500.00) + " dollars.");