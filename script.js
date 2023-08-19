'use strict';

function calcAge(birthYear) {
  const age = -birthYear;

  function printAge() {
    let output = `${firstName}, you are${age},born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      const firstName = 'Steven';

      output = 'NEW OUTPUT';

      const str = `Oh, and youre a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);

    console.log(output);
  }

  printAge();

  return age;
}

const firstName = 'John';
calcAge(1991);
