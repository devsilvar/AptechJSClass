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





// Assignment
function table ( num ) {
    for ( let i = 0; i <= 12; i++ ) {
        return `${num} x ${i} = ${num * 1}`
    }
}

function multTable ( num, callback ) {
    return callback( num )
}

multTable( 5, table )




let studentArr = [
    { name: "Tade", age: 12, gender: "male" },
    { name: "bolade", age: 16, gender: "Female" },
    { name: "bade", age: 18, gender: "male" },
    { name: "shade", age: 22, gender: "Female" },
    { name: "laide", age: 25, gender: "Female" }
]


let filteredValues = studentArr.filter( person => person.gender == "Female" )


console.log( filteredValues )





// Given an array of objects representing students, calculate the sum of the age of all the students who have an age greater than 18.



function table ( num ) {
    for ( let i = 1; i <= 12; i++ ) {
        let result = `${num} x ${i} = ${num * i}`
        console.log( result )
    }
}


function HOF ( num, callback ) {
    return callback( num )
}


HOF(5, table)
