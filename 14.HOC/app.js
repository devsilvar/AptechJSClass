// HIGHER ORDER FUNCTIONS & CALLBACL FUNCTIONS

// What is a Higher Order Function?
// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.


// There are several different exmaples higher order functions like map and reduce


// Callback function, passed as a parameter in the higher order function


// BASIC EXMAPLE

function GreetingsMessage () {
    return "Hello"
}


function Person ( callBack ) {
    return callBack() + " Shade"
}

let res = Person( GreetingsMessage )
console.log( res )



// ANOTHER EXMAPLE
// NOTE - alert() , Prompt() , console.log() are all javascript inbuilt functions


function SpitOutMessage ( message, callback ) {
    callback( message )
}

SpitOutMessage( "How are you doing", console.log )

SpitOutMessage( "Can you dipslay me in the alert ", alert )

SpitOutMessage( "Are you At Home", prompt )

SpitOutMessage( "Displayme on the Browser DOM", document.write )


// WHERE HOC WORKS BEST

//Example 2: Write a function that calculates the area, circumference and the diameter of a circle with radius 5




// Exmaple 3
// Write a a javscript program that calculates the area,circumference and the diameter of there 8 circles
let circleRadii = [ 2, 4, 6, 8, 5, 10, 12, 15 ]


// Beginnner




//intermediate


//loop through each of the Radiuses

// as you are doing so calculate the area of each of them and output them

// ouput the array 




//expericned intermediate
function calculateAreas ( radii ) {
    //create a new Array to push the calculated areas


    //loop through each of the Radiuses


    // as you are doing so calculate the area of each of them and push it to the created array

    // ouput the array 
}




//Pro
// HOC
// // Using HOF and Callbacks to solve the question above
console.log( "DEMONSTRATION OF HIGHER ORDER FUNCTIONS & CALLBACK FUNCTIONS" );

function area ( radius ) {
    let area = Math.PI * radius ** 2;
    return area;
}

function diameter ( radius ) {
    let diameter = 2 * radius;
    return diameter;
}

function circumference ( radius ) {
    let circumference = 2 * Math.PI * radius;
    return circumference;
}


let areas = circleOperation( [ 1, 2, 3 ], area );
console.log( areas );

let diameters = circleOperation( [ 1, 2, 3 ], diameter );
console.log( diameters );

let circumferences = circleOperation( [ 1, 2, 3 ], circumference );
console.log( circumferences );




// DO you Know that Array has in-built HOFs methods like .map(), .filter(), .reduce() and many more.



// lets see how to use them
const usingMapToCalCDiameter = [ 1, 2, 3 ].map( diameter );
console.log( usingMapToCalCDiameter );


const usingMapToCalCAREA = [ 1, 2, 3 ].map( area );
console.log( usingMapToCalCAREA );

// setTimeout
// setInterval


// Assignmnet




// Given an array of objects representing students, calculate the sum of the age of all the students who have an age greater than 20.

// Write a JavaScript function that takes the above data and filters out all people whose age is less than 25.