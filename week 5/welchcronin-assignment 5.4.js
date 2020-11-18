/*
============================================
; Title:  welchcronin-exercise 5.3.js
; Author: Professor Krasso 
; Date:   18 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array-like object collection and filtering the content using the map() function, then creating output using the forEach() function.
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


//Using JavaScripts built-in map() function, create a filtered array of composers by rating and last name.
const ratedComposers = famousComposers.map(function(composers) {
    return {
        rating: composers.rating,
        lastName: composers.lastName
    }
})
//Output the results for ratings and last name only. 
console.log('-- COMPOSER BY RATING --' + '\n')
ratedComposers.forEach(function(composers){
    console.log('Rating: ' + composers.rating +'\n' + 'Composer: ' + composers.lastName +'\n');
})

//Add a bit of space.
console.log('\n');

// Using JavaScripts built-in map() function, create a filtered array of composers by genre and last name. (Yes, I coined that new term genredComposers:)
const genredComposers = famousComposers.map(function(composers) {
    return {
        genre: composers.genre,
        lastName: composers.lastName
    }
})

//Output the results for genre and last name only. 
console.log('-- COMPOSER BY GENRE --' + '\n')
genredComposers.forEach(function(composers){
    console.log('Genre: ' + composers.genre +'\n' + 'Composer: ' + composers.lastName +'\n');
})
