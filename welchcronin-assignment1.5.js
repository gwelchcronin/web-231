/*
============================================
; Title: Assignment 1.5 Types, Values and Variables
; Author: Professor Krasso
; Date: 21 October 2020
; Modified By: Georgia Welch Cronin
; Additional Code on Dates from : 
; https://github.com/buwebdev/web-231/blob/master/week-1/dates.js
; Description: This program shows how to assign values to variables, focusing on primitive data types. 
;===========================================
*/ 

//emloyee 1
var firstName1 = 'Kathy'
var lastName1 = 'Chvatal'
var address1 = '304 South Purdue'
var payRate1 = 14.98;
var hireDate = new Date();
let now = hireDate.toLocaleDateString()
let nowV2 = hireDate.toLocaleDateString('en-US')

//employee 2
var firstName2 = 'Melanie'
var lastName2 = 'Bristol'
var address2 = '8824 Shasta Lane'
var payRate2 = 12.77;
var hireDate = new Date();

//employee 3
var firstName3 = 'Amber'
var lastName3 = 'Waverly'
var address3 = '5031 Underwood Apt. 4B'
var payRate3 = 10.08;
var hireDate = new Date();


console.log('--Displaying Employee Records--')
//adding a line break
console.log(' ')

console.log('First Name: ' + firstName1)
console.log('Last Name: ' + lastName1)
console.log('Address: ' + address1)
//number goes to 1 decimal point
console.log('Pay rate: ' + payRate1.toFixed(1));
//hire date reads as todays date
console.log('Hire Date: ' + now)

//adding a line break
console.log(' ')

console.log('First Name: ' + firstName2)
console.log('Last Name: ' + lastName2)
console.log('Address: ' + address2)
//number goes to 1 decimal point
console.log('Pay rate: ' + payRate2.toFixed(1));
//hire date reads as todays date
console.log('Hire Date: ' + now)

//adding a line break
console.log(' ')

console.log('First Name: ' + firstName3)
console.log('Last Name: ' + lastName3)
console.log('Address: ' + address3)
 //number goes to 1 decimal point
console.log('Pay rate: ' + payRate3.toFixed(1));
 //hire date reads as todays date
console.log('Hire Date: ' + now)

