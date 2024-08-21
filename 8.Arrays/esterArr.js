// Array are data types tat you use to store a list of datas

// let person1 = { name: 'ester', gender: 'gfemales' };

// let students = [person1, 2, true, 'dele'];

// the two ways to create an array in javscript
let studentAge = [11, 222, 33, 77];

let myStudents = new Array();

console.log(myStudents);

// addiging items to an array
// Array.push()
studentAge.push(33);
studentAge.push('ester');

//remove things in an array
// Array.pop()

//removes teh first elelenet in an array
// Array.shift()
studentAge.shift();

//addd to the first index of teh array
// Array.unnshift()
studentAge.unshift('first');

let copySection = studentAge.slice(0, 3);

let copySection2 = studentAge.slice(0, 8);

//console.log(copySection2);

//Array.Splice()

// If you want to addd something to the middel of an array or at any position in the array or even remve an item

studentAge.splice(0, 1, 99);

console.log(studentAge);

// Merging array
// join two or more aarays topgethr

let array1 = [2, 4, 6, 8];
let aray2 = [3, 5, 7, 9];

let result = array1 + aray2;
console.log([...array1, ...aray2]);

let ress = array1.concat(aray2);
console.log(ress);

// the world problem is check an item already exisist in an array

// add news students Ages to this Array but ensure that you dont add studenst with te same age

let ages = [12, 15, 18, 19, 22, 29, 33];

let res = ages.includes(12, 3);
console.log(res);

function greet_st(name, gender = 'human being') {
  console.log('my name is ' + name + ' an di am a ' + gender);
}

greet_st('ester', 'female');

function addds(a, b = 0) {
  return a + b;
}

console.log(addds(2));
// anonymous function
// ()=>{

// }

// () =>

// find
// findIndex

let checkResult = ages.find((item) => item == 44);

// assignmenets
// use for loop to check if any value already exisits in teh array before

// assignmenet 2
// write a program to add ages into an array1, check if the thing already exisist. if it DOMParser.apply. DOnt add, if it doeasnt add

// assignmenet 3
// 1. Create an object to store your personal information such as name, age, and favorite hobby.
// 2. Prompt the user to enter their name, age, and favorite hobby and store it in the object.
// 3. Create a function to display the information in a formatted way.like this => My name is { name } and my hobby is { hobby } and i am { age }

let arraySample = [12, 44, 77, 34, 12];

// assignmnet 3
// check if the item with id of 2 already exisist in teh array
let newArr = [
  { id: 1, name: 'Dele' },
  { id: 2, name: 'Bello' },
  { id: 3, name: 'kinle' },
  { id: 4, name: 'David' },
  { id: 5, name: 'bosun' },
];

let checkIndex = ages.findIndex((item, index, arr) => {
  return item == 19;
});
console.log(checkIndex);

// const greet = () =>{

// }
// () =>{

// }

// function greet(){

// }

// function(){

// }
