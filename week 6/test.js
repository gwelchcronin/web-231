// object with nested object
const ticket = {
    id: 105,
    name: "ticketRequest",
    dateCreated: "today's date",
    priority: "high",
  
    // nested object
    person: {
      id: 1007,
      firstName: "Bob",
      lastName: "Jones",
      jobTitle: "(Programmer One)",
    }
  }
  
  // output
  console.log('Ticket ' + ticket.id + " was created on " + ticket.dateCreated + ' and assigned to employee ' + ticket.person.firstName + ' ' + ticket.person.lastName + ' ' +  ticket.person.jobTitle + '.')
