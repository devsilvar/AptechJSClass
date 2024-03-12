// NUMBER LITERALS
// Number literals are specific values that represent numbers in programming languages. Examples include 5, 10.75, and -3.

// NUMBER OBJECTS
// Number objects, on the other hand, are complex data types that can hold and manipulate numbers, similar to how strings hold and manipulate text. They have properties and methods that allow for mathematical operations and formatting.
// Some examples of number methods include toFixed(), which rounds a number to a specified number of decimal places, and toString(), which converts a number to a string.


// MATH OBJECT
// The Math object is a built-in object in JavaScript that provides mathematical constants and functions for use in mathematical expressions. Some methods of the Math object include round(), which rounds a number to the nearest integer, which returns the absolute value of a number.


// DATE OBJECT
// The Date object is another built-in object in JavaScript that is used to work with dates and times. It allows for creating new date objects, getting and setting different components of a date (such as day, month, and year), and performing operations on dates (such as adding or subtracting days).

// Working with numbers involves using these objects and methods to perform mathematical calculations and manipulate numerical data in various ways. This can include basic arithmetic operations, as well as more complex algorithms and formulas. 

//creating a variable 
let age = 23;

//reassigning the variable
age = 23


//convert age to string
age = String( age )


//checking the type of string
console.log( typeof ( age ) )

//Maths Object


//removing the strings form the number
let weight = "234kg"
console.log( Number.parseInt( weight ) )




let num1 = 23.56
let num2 = 23.22

//ceil will raise it to the highest whole number no matter what
console.log( Math.ceil( num2 ) )


//floor will raise to the lowest number no matter what
console.log( Math.floor( num1 ) )
console.log( Math.round( num2 ) )




let ages = [ 12, 15, 19, 34 ]
console.log( Math.max( ...ages ) )


//reduces the nuber after the decimal place
console.log( ( 100 / 3 ).toFixed( 2 ) )


console.log( Math.trunc( 100 / 3 ) )


console.log( new Date() )







// alert( "My name is Gideon" )
// let confirmName = confirm( "is your name julia" )
// console.log( confirmName )
// let yourAge = prompt( "How old are you" );
// console.log( yourAge )
// console.log( typeof ( yourAge ) )




let currentMonth = new Date().getMonth()
console.log( currentMonth )

let curretDay = new Date().getDay()
console.log( curretDay )


let currentDate = new Date().getDate()
console.log( currentDate )

let currentYear = new Date().getFullYear()
console.log( currentYear )

console.log( new Date().getHours() )
console.log( new Date().getMinutes() )
console.log( new Date().getSeconds() )


// time = "10 : 24 : 34"


let ourTime = new Date().getHours() + " : " + new Date().getMinutes() + " : " + new Date().getSeconds();
console.log( ourTime )


// let genratedTime = Hours + " : " + Minutes + " : " + seconds
// console.log( genratedTime )



function runTime () {
    //for minutes
    let Minutes = new Date().getMinutes()

    //for hours
    let Hours = new Date().getHours()

    // for seconds
    let seconds = new Date().getSeconds()

    let genTime = `${Hours} : ${Minutes} : ${seconds}`

    document.getElementById( "time" ).textContent = genTime;
}


//assignment

//convert the time to 12 hours format
//format - 11:46:23:AM

setInterval( () => {
    runTime()
}, 1000 );



// function Timing () {
//     let presentDate1 = new Date()

//     let SampleDate = `${presentDate1.getHours()}:${presentDate1.getMinutes()}:${presentDate1.getSeconds()}`

//     time.textContent = SampleDate


// }
// setInterval( () => {
//     // Timing()
// }, 1000 );



















