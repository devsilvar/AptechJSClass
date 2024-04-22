function GreetMessage () {
    return "Hello"
}

function GreetEveryOne ( func ) {
    return func() + "Fatia"
}

let res = GreetEveryOne( GreetMessage )
console.log( res )


// alert()
// console.log()
// prompt()
// confirm()


function HigherOrderFunc ( callbackFunc, message ) {
    return callbackFunc( message )
}



HigherOrderFunc( console.log, "Good Morning" )

// HigherOrderFunc( alert, "How was your weekend" )

// HigherOrderFunc( prompt, "How are you " )



// 

let radii = [ 12, 3, 4, 7, 8, 9, 10, 5 ]
radii[ 5 ]

function HOF2 ( radii ) {
    //create an array t output all our area
    let newArr = [];

    for ( let i = 0; i < radii.length; i++ ) {
        let val = Math.PI * radii[ i ] * radii[ i ]   ////
        newArr.push( val )
    }
    return newArr
}




function HOF3 ( radii ) {
    //create an array t output all our area
    let newArr = [];

    for ( let i = 0; i < radii.length; i++ ) {
        let val = 2 * radii[ i ]   ////
        newArr.push( val )
    }
    return newArr
}




function HOF4 ( radii ) {
    //create an array t output all our area
    let newArr = [];

    for ( let i = 0; i < radii.length; i++ ) {
        let val = 2 * Math.PI * radii[ i ]  ///
        newArr.push( val )
    }
    return newArr
}

function HOF11 ( callback, radiuses ) {
    let newArr = [];
    for ( let i = 0; i < radii.length; i++ ) {
        let val = callback( radiuses[ i ] )
        newArr.push( val )
    }
    return newArr;
}


console.log( HOF11( area, radii ) )
console.log( HOF11( diameter, radii ) )
console.log( HOF11( circumference, radii ) )

function area ( radius ) {
    return Math.PI * radius * radius
}


function diameter ( radius ) {
    return 2 * radius
}

console.log( diameter( 2 ) )
Array.map()

// Write a Javsccript Program that caluculates the area, and circumference of these 8 circles.. where there radii are 


function area ( radius ) {
    return Math.PI * radius * radius
}


function circumference ( radius ) {
    return 2 * Math.PI * radius
}

let cir = radii.map( ( item, index, arr ) => area( item ) )

console.log( cir )


// let greterThan10 = radii.filter( ( item ) => {
//     return item >= 10
// } )





// Assignmenet
let mult = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
function HCOC ( num, mult ) {


}

let studentArr = [
    { name: "ade", age: 12, gender: "male" },
    { name: "ade", age: 16, gender: "male" },
    { name: "ade", age: 18, gender: "male" },
    { name: "ade", age: 22, gender: "male" },
    { name: "ade", age: 25, gender: "male" }
]

// Given an array of objects representing students, calculate the sum of the age of all the students who have an age greater than 18.