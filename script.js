'use strict';

/*
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
*/

// variables
/*
console.log(me);
console.log(job);
console.log(year);

var me = 'Faiz';
let job = 'Developer';
const year = 1998;
*/

// functions
/*
console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

// Example
/*
console.log(numProduct);

if (!numProduct) deleteShoppingCart();

var numProduct = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
*/
/*
var x = 1;
let y = 2;
const z = 3;
*/

// console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1981);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f();
