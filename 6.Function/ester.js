// write a function that adds two random numbers
// resuable code

import { checkELigible } from './function';

add();

// functional declaration
function add() {
  console.log('ester');
}

// arrow function
const mult = () => {
  console.log('Daniel');
};

// what is hoisting
// hoisting is the ability to call or acess a function before decalring

// parameter and arguments
function addThreeNUmbers(a, b, c) {
  console.log(a + b + c);
}
// a, b, c => parameters

addThreeNUmbers(2, 3, 4);
// 2,3,4 =>  arguments

// let a = 2;
// let b = 3;
// let c = 4;

// let result = a + b + c;

// console.log(result);

addThreeNUmbers(7, 8, 10);
// let d = 7;
// let e = 8;
// let j = 10;

// result = d + e + j;
// console.log(result);

// write a program to check if a user is eligibel to vote

let userAge = 18;
if (userAge > 17) {
  console.log('eligible');
} else {
  console.log('support nigeria TV');
}

let userAge1 = 19;
if (userAge > 17) {
  console.log('eligible');
} else {
  console.log('support nigeria TV');
}
// assignmenet
function checkEligibity(age) {
  if (age > 17) {
    console.log('eligible');
  } else {
    console.log('support nigeria TV');
  }
}

checkEligibity(15);

// first assignmente
// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun  mallam

// Anonymouns function are functions that doest have a name

function incBy10(a, b) {
  let c = 10;
  return a + b + c;
}

console.log(incBy10(2, 3));

const mults = (a, b) => a + b;

// console.log(mults(8, 2));

// HIgher Order function

// function greet() {
//   function add() {}
// }

// HOF
function addup(func, name) {
  return func() + name;
}

function greet() {
  return 'good morning';
}

console.log(addup(greet, ' ester'));

// what if you wanted to find the area and cirumfereces of these radiuses whihc is a circle

let radiuses = [2, 5, 7, 3, 9, 11, 6, 4];

// Math.PI
function areaOfCircle(r) {
  return Math.PI * r * r;
}

function circumference(s) {
  return 2 * Math.PI * s;
}

let areas = radiuses.map((index, fff) => areaOfCircle(fff));

console.log(areas);

// for (let i = 0; i < radiuses.length; i++) {
//   console.log(circumference(radiuses[i]));
// }

function genrateOperations(radiusesArray, funcOperation) {
  for (let i = 0; i < radiusesArray.length; i++) {
    console.log(funcOperation(radiusesArray[i]));
  }
}

genrateOperations(radiuses, circumference);

let ages = [2, 5, 7, 9, 11];

// named arrow function
const add = () => {};

// aonymous arrow function
// ()=>{

// }
