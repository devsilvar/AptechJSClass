// CAR
/**
 * properties - brand, color, number of tyres, number of doors, isAutomatic
 *
 * 
 * 
 * 
 * functionalities - move forward, reverse, accelerate, play music, stop, start
 */
//literal Notation
let car = {
    name:"volkswagen",
    color:"red",
    model:"golf 2003",
    hasTintedScreen: true,
    Engine:"V6",
    price:"$400"
}

// print out the engin eof the car objejct


console.log(car.Engine)
console.log(car.model)
console.log(car["Engine"])
console.log(car["model"])


// How can we create an object?



/**
 * Literal Notation
 */

// syntax for literal notation
// const objectName = {
//     key1: value1, // key-value pair
//     key2: value2,
//     ...
// }







/**
 * Constructor Notation
 */
// const Car2 = new Object();


let car1 = new Object()
car1.name = "ferrari"
car1.price = "N500000"
console.log(car1)









// How do we access object properties and methods?
//1- Using Dot notation
car.Engine


//2- Using Bracket notation
car["Engine"]



// Accessing Object Methods
// Syntax = objectName.method();

let student = {
    name: "Harrison",
    gender: "male",
    complexion:"light",
gettingDarker : function(){
    console.log("He is no more " + this.complexion)
}
}

//student.gettingDarker()


// Why do we use the constructor method:

/**
 * Constructor notation can be used as a template or blueprint
 * for creating new objects.
 */







// Using APTECH_STIUDENT as an Exmaple


// Common properties & methods an aptech student has
/**
 * properties - 
 * methods - 
 */



//smaple function


// The function which serves as a blue print for all Toyota cars
// function Toyota(model, year, numberOfTyres, isAutomatic, currentDistance) {
//     this.numberOfTyres = numberOfTyres;
//     this.brand = "Toyota";
//     this.model = model;
//     this.year = year;
//     this.isAutomatic = isAutomatic;
//     this.currentDistance = currentDistance;
//     (this.accelerate = function () {
//       this.currentDistance += 5;
//     }),
//       (this.displayCurrentDistance = function () {
//         return this.currentDistance;
//       });
//   }
  


// Propertties ofCOnstructor function
/**
 * You create instances of the object using the constructor function.
 * The 'new' keyword followed by a call to the function creates a new object.
 * The properties of each object are given as arguments to the function.
 * You can create multiple objects from a constructor function.
 */



















// create an object give it a name of APtech student and slot in all possible properties baout you inside the object