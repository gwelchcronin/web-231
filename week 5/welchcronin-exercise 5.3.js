/*
============================================
; Title:  welchcronin-exercise 5.3.js
; Author: Professor Krasso 
; Date:   16 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array-like object collection and filtering the output using the forEach() function.
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 5.3"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

//Creating an array of five composer objects with first and last name, their genre and a rating score.
const famousComposers = [
    {
        firstName: "John",
        lastName: "Williams",
        genre: "film scores",
        rating: 10
    },
    {
        firstName: "James",
        lastName: "Horner",
        genre: "film scores",
        rating: 8
    },
    {
        firstName: "Danny",
        lastName: "Elfman",
        genre: "film scores",
        rating: 7
    },
    {
        firstName: "Hans",
        lastName: "Zimmer",
        genre: "film scores",
        rating: 10
    },
    {
        firstName: "James",
        lastName: "Horner",
        genre: "film scores",
        rating: 9
    },
];

//Using JavaScripts built-in forEach() function, iterate over the composer objects.
//Output the results for last name, genre and ratings only. 
console.log('-- MY FAVORITE COMPOSERS --')
let index = 1
famousComposers.forEach((composer) => {
    console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)
    index++
})