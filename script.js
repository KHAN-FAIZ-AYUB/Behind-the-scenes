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

/*
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
*/

/*
// var firstName='faiz';
const jonas = {
  firstName: 'jonas',
  year: 1998,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // *****Solution 1*****
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // *****Solution 2*****
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 4, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

let age = 25;
let oldAge = age;
age = 26;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Faiz',
  age: 25,
};

const friend = me;
friend.age = 27;
console.log('Friend', friend);
console.log('Me', me);
