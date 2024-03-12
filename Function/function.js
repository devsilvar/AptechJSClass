//declare a name
let name = "gideon"

// create a calcutor that can evaluate 2 numbers

//How do we declate a function in javascript

function subtract ( bigNum, smallNum ) {
    console.log( bigNum - smallNum )
}

subtract( 10, 5 )

//calculate the modulo of 27 and 3
console.log( 27 % 3 )

//create a function to divide two number
function divide ( a, b ) {
    console.log( a / b )
}

//call the function
divide( 15, 3 )


//create a function 
function multiplication ( a, b ) {
    console.log( a * b )
}

//calling the function
multiplication( 12, 2 )

//addTodo()
//arrow function 

// let add1 = () => {
//     console.log( "Show Todo" )
// }
//add1()


function add ( a, b, c ) {
    console.log( a + b + c )
}
//calling the function
add( 2, 3, 5 )

//function to add two numbers
const addition = ( a, b ) => {
    console.log( a + b )
}
//call the function
addition( 15, 5 )


//function to capitalize two numbers
function capitalize ( firstName ) {
    return firstName.toUpperCase()
}
// console.log( capitalize( "Emmanuel" ) )
// console.log( capitalize( "my name is femi" ) )
//My Name Is Femi

let firstName = "my name is femi";
function capitalizeWord ( firstName ) {
    //change words to aaray
    let changeToArr = firstName.split( " " )
    let newArr = []
    //loop through each words
    let name;
    for ( let i = 0; i < changeToArr.length; i++ ) {
        name = changeToArr[ i ].charAt( 0 ).toUpperCase() + changeToArr[ i ].slice( 1 ).toLowerCase()
        newArr.push( name )
    }
    console.log( newArr.join( " " ) )
}
capitalizeWord( firstName )






//assignment

//create a function that add any given number of digits
function addAnyNumber () {
    return
}
// addAnyNumber( 2, 3, 4 ) => 9
// addAnyNumber( 1, 2, 3, 4, 5 ) => 15
// addAnyNumber( 2, 4 ) => 6
//hint: use loop


//create a function that recives a user DOB and generates his current age
// use prompt to get the users Age


//create a function that collect the users firstname and lastname and prints out => My name is femi gideon
// use prompt to get the first name and last name
