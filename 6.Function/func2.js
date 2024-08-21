import { checkELigible } from "./function.js"

// let myName = "julia" // global variable

// function outer () {
//     myName = "Harrison";
//     console.log( myName );


//     // function inner () {
//     //     let myName = "lotti";
//     //     console.log( myName )
//     // }
//     // inner()
// }

// outer()
// console.log( myName )
// //console.log( myName )


// let age = 23;


// function changeAge () {
//     age = 24;
//     console.log( age )
// }
// console.log( age )


// changeAge()
// console.log( age )



//create a function that collect the users firstname and lastname and prints out => My name is femi gideon
// use prompt to get the first name and last name


function getUserDetails () {
    let firstName = prompt( "Enter Your FirstName" )
    let lastName = prompt( "Enter Your Lastname" )
    return `My Name is ${firstName} ${lastName}`
}

// let results = getUserDetails()
// console.log( results )


console.log( checkELigible( '10' ) )



function add ( a, b, c ) {
    return a + b + c
}

console.log( add( 2, 3, 4 ) )


