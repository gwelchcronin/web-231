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
console.log('-- COMPOSER BY RATING --')
let index = 1
famousComposers.forEach((composer) => {
    console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)
    index++
})

console.log('-- COMPOSER BY GENRE --')
let index = 1
famousComposers.forEach((composer) => {
    console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)
    index++
})

console.log('-- COMPOSER BY RATING --')
let index = 1
famousComposers.forEach((composer) => {
    console.log('Last Name: ' + composer.lastName + ', Genre: ' + composer.genre + ', Rating: ' + composer.rating)
    index++
})
//Using JavaScripts built-in map() function, create a filtered array of composers by rating (review the starter code for output expectations).
// Using JavaScripts built-in map() function, create a filtered array of composers by genre (review the starter code for output expectations).
// Using JavaScripts built-in forEach() function, iterate over each array and output the results.

  
/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.
  FirstName LastName
  Assignment 5.4
  Today's Date
  -- COMPOSER BY RATING --
  Rating: 8
  Composer: Beethoven
  Rating: 10
  Composer: Mozart
  Rating: 9
  Composer: Bach
  Rating: 6
  Composer: Haydn
  Rating: 5
  Composer: Schubert
  -- COMPOSER BY GENRE --
  Genre: Classical
  Composer: Beethoven
  Genre: Classical
  Composer: Mozart
  Genre: Classical
  Composer: Bach
  Genre: Classical
  Composer: Haydn
  Genre: Classical
  Composer: Schubert
*/