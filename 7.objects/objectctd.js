
//Factory Function
function mult ( a, b ) {
    console.log( a * b )
}



console.log( 2 * 3 )
console.log( 4 * 5 )



mult( 3, 4 )
mult( 5, 6 )


function aptechStudent ( name, age, Dept ) {
    return {
        name: name,
        age: age,
        Dept: Dept,
    }
}

const student1 = aptechStudent( "fatia", 70, "webAPp" )
const student2 = aptechStudent( "lotti", 32, "Ethical  Hacking" )


// console.log( student1 )
// console.log( student2 )


// student1.name = "Gideon"

// console.log( student1 )


// NESTED OBJECT
// Nested object is when you put an object inside an object


let firstSTudent = {
    name: "julia",
    grades: {
        penetrationTesting: 50,
        Networking: 60,
        Javscript: 30,
    }
}


let Fatia = {
    first_name: "fatia",
    last_name: "Ayomide",
    age: 30,
    jambScore: {
        ENG: 60,
        MATH: 70,
        PHY: 80,
        CHEM: 90
    }
}


// console.log( Fatia.jambScore.ENG )
// console.log( Fatia[ "jambScore" ][ "ENG" ] )



// COPYING /CLONING AN OBJECT
// To clone an object in javascript we can use Spread operator or use the Obect. assign Ayntax



// USING OBJECT .ASSIGN()

let firstBook = { name: "Harrypoter", Author: "rowlings", age: 50 }
let SecondBook = { name: "Things Falls Apart", Author: "Achebe" }
let studentss = { dept: "ADSE", grade: [ 70, 67, 56, 55 ] }
let nb = firstBook + firstSTudent;


let studentsDet = { name: "harisson", gender: "male", Dept: "ADSE", id: 33 }
let studentGrade = { Math: 56, English: 57, Chemistry: 58, Pysics: 59, id: 33 }


let harision = Object.assign( {}, studentsDet, studentGrade )
//console.log( harision )


// UISNG SPREAD OPERATOR

let harrison2 = { ...studentsDet, ...studentGrade }
let harrisonss = { studentsDet, studentGrade }

console.log( harrison2 )
console.log( "hello" )
console.log( harrisonss )

// When You spread a value you remove the Outer Shell if it is an Object or an Array

let voters = [ 23, 45, 67, 89 ]

// console.log( voters )
// console.log( ...voters )


// PROBLEM STATEMET

// Find out if color is contained among the keys of the car object


//find out of the car has a value of Volvo


const car = {
    name: "Volvo",
    color: "red",
    hasTintedGlass: false,
    price: 50000,
    Engine: "v8",
    Model: "volvo-2004"
}


if ( car.color ) {
    console.log( "Available" )
} else {
    console.log( "not available" )
}




let car_keys = Object.keys( car )
let car_value = Object.values( car )

// console.log( car_keys )
// console.log( car_value )





for ( let i in car_keys ) {
    console.log( i + " " + car_keys[ i ] )
}



// Assignmnet

// // QUESTION 1
// const car1 = {
//     name: "Volvo",
//     color: "red",
//     hasTintedGlass: false,
//     price: 50000,
//     Engine: "v8",
//     Model: "volvo-2004"
// }

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


// QUESTION 2
// 1. Create an object to store your personal information such as name, age, and favorite hobby.
// 2. Prompt the user to enter their name, age, and favorite hobby and store it in the object.
// 3. Create a function to display the information in a formatted way.like this => My name is { name } and my hobby is { hobby } and i am { age }
// 4. Add a method to the object that allows the user to update any of the properties.
// 5. Prompt the user to choose which property they want to update and call the corresponding method.




// QUESTION 3
// 1. Create an empty object to store a person's information.
// 2. Create a function that prompts the user to enter the person's name, age, and favorite hobby and adds it to the object.
// 3. Create a function to display the person's information in a formatted way.
// 4. Add a method to the object that allows the user to update any of the properties.
// 5. Prompt the user to choose which property they want to update and call the corresponding method.
// 6. Add a method to the object that calculates how many years until the person turns 100.
// 7. Display the result.



