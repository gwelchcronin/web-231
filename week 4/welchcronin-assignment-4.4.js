/*
============================================
; Title:  welchcronin-assignment 4.4.js
; Author: Professor Krasso 
; Date:   10 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating an array with 5 items, and using a predicate to output
;===========================================
*/

const header = require('../welchcronin-header.js');
console.log(header.display("Georgia", "WelchCronin", "Assignment 4.4"));
console.log('\n'); //Here I am adding a line break between header and exercise output.
//start program

//Create a string array of 5 states. 
const states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];


console.log("--ORIGINAL ARRAY--") //Header for the output of this section.
//Create an iteration for the array using the for method and a console.log to output the array. 
for (let index = 0; index < states.length; index++) {
        console.log(states[index]); 
        }



console.log('\n'); //Here I am adding a line break between output sections.



//Create a console.log to generate an output to show the sorted array, which is looking for an alphabetized array. 
console.log("--SORTED ARRAY--") //Header for the output of this section.
states.sort(); //Creating a sort method calling in the name of the array.
for(let index = 0; index <states.length; index++) { //Telling the sort to iterate through the array to alphabetize.
    console.log(states[index]);
}

console.log('\n'); //Here I am adding a line break between output sections.



//Create a function called getState with two string parameters (statesIndex and stateToCompare).
//In the body of the getState function add an if statement to test if the two string parameters match.  
//...If they match, return true, else false.
function getState (statesIndex, stateToCompare) 
{
    if (statesIndex === stateToCompare) 
    {
        return true;
    }
    else
    {
        return false;
    }
}


//Output to show the selected value, using the get state function asn seeking the Iowa item. 
console.log("--SELECTED VALUE--") //Header for the output of this section.
//Using JavaScript's built-in filter() function, 
//Call the getState function and pass-in the current element (statesIndex)
//...of the filter loop and the value (Iowa) to find it (see page 154 of the courses textbook). 
let filteredStates = states.filter(function(statesIndex) {
    return getState(statesIndex,'Iowa')
})
console.log(filteredStates[0]);




