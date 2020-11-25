/*
============================================
; Title:  welchcronin-exercise 6.3.js
; Author: Professor Krasso 
; Date:   25 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating a ticketing system using object literals
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Exercise 6.3"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

// Create an object literal for a ticketing system with the following fields (provide your own default values)
    // id 
    // name
    // requestor
let employee = {

    id: "101",

    jobName: "Help Desk Support",

    requester: "Bob Jones"

};

//output using the dot notation method
console.log("id: " + employee.id + ", " + "name: " + employee.jobName + ", " + "requester: " + employee.requester);