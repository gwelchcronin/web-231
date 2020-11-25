/*
============================================
; Title:  welchcronin-assignment 6.4.js
; Author: Professor Krasso 
; Date:   25 November 2020
; Modified By: Georgia Welch Cronin
; Description: Creating a ticketing system using object literals
;===========================================
*/

const header = require('../welchcronin-header.js');

console.log(header.display("Georgia", "WelchCronin", "Assignment 6.4"));
console.log('\n'); //Here I am adding a line break between header and exercise output.

//start program

// object literal for ticket including
    // Ticket fields 
        // id
        // name
        // dateCreated
        // priority 
const ticket = {
    id: 105,
    name: "ticketRequest",
    dateCreated: new Date().toLocaleDateString('en-US'),
    priority: "high",
  
    // with nested object literal person including
        // Person fields 
            // id 
            // firstName
            // lastName
            // jobTitle
    person: {
      id: 1007,
      firstName: "Bob",
      lastName: "Jones",
      jobTitle: "(Programmer I)",
    }
  }
  
  // output showing the ticket number, the date it was requested, who it was assigned to and what their job title is
  console.log('Ticket ' + ticket.id + " was created on " + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' ' +  ticket.person.jobTitle + '.')
