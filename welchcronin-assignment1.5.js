/*
============================================
; Title: Assignment 1.5 Types, Values and Variables
; Author: Professor Krasso
; Date: 21 October 2020
; Modified By: Georgia Welch Cronin
; Description: This program shows how to assign values to variables, focusing on primitive data types. 
;===========================================
*/ 

//emloyee 1
var firstName = 'Kathy'
var lastName = 'Chvatal'
var address = '304 South Purdue'
var payRate = '14.98'
payRate = tofixed(1); //number goes to 1 decimal point
var now = newDate();

//employee 2
var firstName = 'Melanie'
var lastName = 'Bristol'
var address = '8824 Shasta Lane'
var payRate = '16.98'
payRate = tofixed(1);
var now = newDate();

//employee 3
var firstName = 'Amber'
var lastName = 'Waverly'
var address = '5031 Underwood Apt.4B'
var payRate = '10.98'
payRate = tofixed(1);
var now = newDate();

console.log('First Name: ' + firstName)
console.log('Last Name:' + lastName)
console.log('Address: ' + address)
console.log('Pay Rate: ' + payRate) 
console.log('Hire Date: ' + newDate)