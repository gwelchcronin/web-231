/*
============================================
; Title:  welchcronin-assignment 7.2.js
; Author: Professor Krasso 
; Date:   02 December 2020
; Modified By: Georgia Welch Cronin
; Description: Creating a Javascript program using constructor objects, constructor functions.
;===========================================
*/


const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 7.2"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

//Creation of the employee constructor object with the four (4) required parameters/fields. 
function Employee(id, firstName, lastName, title) {
    this.id = id;

    this.firstName = firstName;

    this.lastName = lastName;

    this.title = title;

}

//Creation of 5 new employee objects. The id parameter is left blank since it was not provided and is not needed in the ouput.
let employee = [
    new Employee('', 'Thomas', 'Edison','Software Engineer'),
    new Employee('', "Benjamin", "Franklin","Programmer"),
    new Employee('', "Nikola", "Tesla","Project Manager"),
    new Employee('', "Charles", "Babbage","Product Manager"),
    new Employee('', "Alexander", "Bell","Business Analyst"),
];

//Creating the console.log to generate the desired output. It iterates through the variables and returns the items requested int he dot notation.
console.log
let index = 1
for (let x = 0; x < employee.length; x++) {
  console.log(index + '. ' + employee[x].firstName +" " + employee[x].lastName +" "  + employee[x].title)
  index++
}