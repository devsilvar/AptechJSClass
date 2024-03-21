//Second Methodd of creating an Array


// MERGING ARRAYS
let cheapCars = [ "Toyota", "Volkwagen", "Hyundai", "Mazda", "504Benz", "Peagot" ]


let expensiveCars = [
    "Ferrari", "RoyceRoyze", "bently", "Limounsine", "Lexus", "Benz", "Tesla"
]


let allCars = cheapCars.concat( expensiveCars )


let allCARS = [ ...cheapCars, ...expensiveCars ]
console.log( allCARS )



// Using the concat() method



// create an array using an instance of an array based on teh second method of creating an Object
let newObj = new Object()
let newOBJ = {}


let newArr = new Array()
let newARR = []








// let Jambscore = [ 40, 30, 80, 46, 67 ]
// //remove the Jamcodre 80 which is in the middle

// // SPLICE
// Jambscore.splice( 2, 1 )

// console.log( Jambscore )


let checkForFerrari = allCARS.indexOf( "Lexus" )
console.log( checkForFerrari )












// How do you know if an element is present in an array?
// using indexOf()
// allCARS

// let userInput = prompt( "Add a new car" )


// if ( allCARS.indexOf( userInput ) == -1 ) {
//     allCARS.push( userInput )
//     console.log( allCARS )
// } else {
//     console.log( allCARS )
// }




//l;et us create a function that adds new cars to the list privdede the car is not in the list









// Aside from Index we can also use Includes
// using includes()
let checkLexus = allCARS.includes( "Lexus" )

//console.log( checkLexus )


let checkVolvo = allCARS.includes( "volvo" )

//console.log( checkVolvo )


// Assignmnet
// Using this array below 

// create function that accepst an input from a user checks if the input is already inside the array before adding it into the array

// If the input is present in the array dont add it up

// if it isn't add it to the array

//2 
// - generate a function that converts a word to capital Letter 

//- create a functional prototype that creates an array with 4 values








// If the value is not there it will bring false



//However if we want to look for obect in an array how do we do it

let AptechStudent = [ { name: "harison" }, { name: "gideoan" }, { name: "destiny" } ]


let results = AptechStudent.find( function ( key ) {
    return key.name == "destinyss"
} )


let res = AptechStudent.filter( ( key ) => key.name == "harison" )

//console.log( res )


//clw
//create an object of an array

// Finding if an object exist in an array
// Using find();

//     // {car: 'Maserati'}
//     return element.car === "Maserati"; //true
// } );
// //console.log( maserati );



// Assignmnet

// // QUESTION 1
const car1 = {
    name: "Volvo",
    color: "red",
    hasTintedGlass: false,
    price: 50000,
    Engine: "v8",
    Model: "volvo-2004"
}

// //output of the Array
// // HINT
// console.log( key + "=>" + value )
// console.log( `${key} => ${value} ` )

// name => Volvo,
//     color => red,
//     hasTintedGlass => false,
//     price => 50000
// Engine => v8
// Model => volvo - 2004

let carsEntry = Object.entries( car1 )


for ( let [ key, value ] of carsEntry ) {
    console.log( key + " => " + value )
}





console.log( carsEntry )

// for(let  in )



// QUESTION 2
// 1. Create an object to store your personal information such as name, age, and favorite hobby.
// 2. Prompt the user to enter their name, age, and favorite hobby and store it in the object.
// 3. Create a function to display the information in a formatted way.like this => My name is { name } and my hobby is { hobby } and i am { age }
// 4. Add a method to the object that allows the user to update any of the properties.
// 5. Prompt the user to choose which property they want to update and call the corresponding method.

let newARRR;

function myObject ( name, age, favoriteHobby ) {
    return {
        name: name,
        age: age,
        favoriteHobby: favoriteHobby,
        updateProp: function () {
            let prop = prompt( "what property do you want to Update  name or age or hobby" )

            let propValue = prompt( `enter your ${prop}` )
            alert( this.name )
            if ( prop = "name" ) {
                this.name = propValue
            } else if ( prop = "age" ) {
                this.age = propValue
            } else if ( prop == "favorite" ) {
                this.favoriteHobby = propValue
            }
        }
    }
}



// newARRR = myObject( myName, age, hobby )
// newARRR.updateProp()
// console.log( newARRR )






function formatText ( name, age, hobby ) {
    let result = `My name is ${name} and my hobby is ${hobby} and i am ${age} years old`
    console.log( result )
}


// formatText( myName, age, hobby )






// QUESTION 3
// 1. Create an empty object to store a person's information.
// 2. Create a function that prompts the user to enter the person's name, age, and favorite hobby and adds it to the object.
// 3. Create a function to display the person's information in a formatted way.
// 4. Add a method to the object that allows the user to update any of the properties.
// 5. Prompt the user to choose which property they want to update and call the corresponding method.
// 6. Add a method to the object that calculates how many years until the person turns 100.
// 7. Display the result.


let newObject = new Object();

let myName = prompt( "enter your name" )
let age = prompt( "enter your age" )
let hobby = prompt( "enter your Hobby" )


function myNewObject ( name, age, favoriteHobby ) {
    return {
        name: name,
        age: age,
        favoriteHobby: favoriteHobby,
    }
}


function generatetext ( name, age, favoriteHobby ) {

    let result = `My name is ${name} and my hobby is ${favoriteHobby} and i am ${age} years old`
    console.log( result )
}


let newStudent = myNewObject( myName, age, hobby )


console.log( newStudent )

newStudent.updateProp = function () {
    this.name = "Fatia"
}
function updateSTudent(prop){
    
}