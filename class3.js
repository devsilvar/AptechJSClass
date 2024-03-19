// let score = 80;

// if (score >= 70) {
//   console.log("you perfromed Excellently: A");
// } else if (score >= 65 && score <= 69) {
//   console.log("You did Very Well : B2");
// } else if (score >= 60 && score <= 64) {
//   console.log("You perfromed Above Average: B3");
// } else if (score >= 55 && score <= 59) {
//   console.log("That was an Average Job : C4");
// } else if (score >= 50 && score <= 55) {
//   console.log("You are average student, You can do better : C6");
// } else if (score >= 45 && score <= 49) {
//   console.log("You failed teh course : F9");
// } else {
//   console.log("Enter a value within 0 and 100");
// }

// let Name = "daniel";
// if (Name == "daniel") {
//   console.log(Name + "is in class");
// }

// switch (Name) {
//   case "great":
//     console.log("she is not in class");
//     break;
//   case "daniel":
//     console.log("he is in class");
//     break;
//   case "jordan":
//     console.log("Hecame late ");
//     break;
//   default:
//     console.log("Invalid Input");
// }
// let score = 63;

// switch (true) {
//   case score > 70:
//     console.log("you perfromed Well");
//     break;
//   case score >= 65:
//     console.log("You did above average");
//     break;
//   case score > 60:
//     console.log("you can do better");
//     break;
//   default:
//     console.log("Enter a Correct score");
//     break;
// }

const daniel = {
  name: "daniel",
  complexion: "light",
  shirt: "yellow Top",
  attendance: ["mon", "tues", "thurs"],
  mark: { html: "70", css: 80 },
};

// console.log(daniel.attendance);
// console.log(daniel.mark);

let newStudent = Object.assign({}, daniel);
// console.log(newStudent);

let student1 = { ...daniel };
//console.log(student1);

let student2 = {
  name: "jordan",
  sex: "male",
};

let studentDept = {
  department: "Web Development with Python",
};

// {
//     name: "jordan",
//     sex: "male",
//     department: "Web Development with Python",
// }

let DeptStudent = { ...student2, ...studentDept };
console.log(DeptStudent);

// Objects are mutable in javascript

//console.log(DeptStudent);

DeptStudent.name = "daniel";
DeptStudent.score = "B";
//console.log(DeptStudent);

const newDeptStudent = new Object();

newDeptStudent.name = "great";

// console.log(newDeptStudent);
// console.log(newDeptStudent.name);
// console.log(newDeptStudent["name"]);

// To display the keys
let danielKeys = Object.keys(daniel);
console.log(danielKeys);

// to Display the values
let danielValues = Object.values(daniel);
console.log(danielValues);

let car = {
  name: "Camry",
  color: "blue",
  model: 2008,
  price: 4000000,
  glass: "Tinted",
  tyres: ["michellin", "Toyota", "Rayzor"],
};

let carkeys = Object.keys(car);
console.log(carkeys);
let carValues = Object.values(car);
console.log(carValues);

// // //Looping through the keys section of the car Object
for (let keys in carkeys) {
  console.log(carkeys[keys]);
}

//using a function to creat an Object
function studentDetails(name, age, Dept, score, gender) {
  return {
    name: name,
    age: age,
    Dept: Dept,
    score: score,
    gender: gender,
  };
}
console.log(Object.entries(car));

for (let [keys, value] of Object.entries(car)) {
  console.log(keys + ":" + value);
}

// console.log(studentDetails("Emmanuel", 15, "Web App with Python", 80, "male"));

// let studentCar = { ...car };

// class studenst = {
//     constructor(names,age){
//         this.names = names,
//         this.age = age,
//     }
// }

// new studenst(names, ages);

// const Add = () => {};

// //Looping through the Car Values in the Object

// let carValues = Object.values(car);
// console.log(carValues);

// for (let i in carValues) {
//   console.log(carValues[i]);
// }

// let Ages = [11, 15, 16, 19];

// console.log(Ages[0]);
// for (let i = 0; i < carValues.length; i++) {
//   console.log(i);
// }

// ARRAYS

const carc = {
  name: "ferarri",
};

const carsss = [
  "bently",
  "Toyota",
  "honda",
  "freeari",
  2,
  7,
  true,
  false,
  { name: "danile", age: 23 },
];
console.log(carsss.length);

// the first item in the array

console.log(carsss[3]);

carsss[3] = "Benz";

console.log(carsss);

let products = [
  { name: "bag", material: "leather", color: "brown", Brand: "liuzVitton" },
  { name: "Shoe", material: "rubber", color: "white", Brand: "AbaMade" },
  { name: "benz", color: "white", model: 2023, Engine: "V8" },
];

for (let i of products) {
  console.log(i.name);
}
