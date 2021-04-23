function greetPeople(people) {
  var greeting = "He";
  greeting = greeting + "llo";
  greeting = greeting + " ";

  // people.forEach(function (person) {
  //   greeting = greeting + person;
  //   console.log(greeting);
  // });
  for (const key in people) {
    const person = people[key];
    if (key == people.length - 1) {
      greeting = `${greeting} ${person}.`;
      console.log(greeting);
      // } else if (key == people.length - 2) {
      //   greeting = `${greeting} ${person} &`;
    } else {
      greeting = `${greeting} ${person}, `;
      console.log(greeting);
    }
  }
  console.log(greeting);
  return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */

var mentors = ["Irina", "Ashleigh", "Etza"];
var result = greetPeople(mentors);
// Hello Irina
// Hello IrinaAshleigh
// Hello IrinaAshleighEtza
