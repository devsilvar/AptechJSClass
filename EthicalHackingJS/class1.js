
//let,const


let names1 = [ 12, 34, 5, 67, 78 ]
const names2 = 0
var namess2;

names1 = "femi"
//names2 = "Amir"


//console.log( names2 )

const name1 = "julia"
//name1 = "femi"

console.log( name1 )


let name = 'femi'
let name2 = "femi"

let istherLight = true
let allStudentsPresent = false


let student = {
    name: "femi",
    gender: "male",
    Dept: "Ethical hacking",
    inClass: true,
    presentYear: 2024
}

//console.log( student.name )


let addition = function () {
    let name = "femi"
    let stuent2 = "julia"
    console.log( name )
    console.log( stuent2 )
}

let Ages = [ 21, 31, 41, 22, 12, 17, 18, true, "femi" ]  // Array

addition()



let name3 = undefined
console.log( name3 )



console.log( Ages[ 3 ] )


let studentAge = 22;

// if else statement
if ( studentAge > 18 ) {
    console.log( "You can Cast Your Vote" )
} else {
    console.log( "You have to wait Till you are 18" )
}
// A1, B2, B3, C4, C6, D7, F9


// if(){

// }

// if(){

// }
// if(){

// }

// if(){
// }


// if ( studentScore == 70 ) {
//     console.log( "A1" )
// } else if ( studentScore == 60 ) {
//     console.log( 'B2' )
// } else if ( studentScore == 50 ) {
//     console.log( "B3" )
// } else if ( studentScore == 40 ) {
//     console.log( "f9" )
// } else {
//     console.log( "enter a valid score" )
// }

let studentScore = 60;


let answer = studentScore < 70

//console.log( answer )
switch ( true ) {
    case studentScore > 70:
        console.log( "greater than 70" )
        break;
    case studentScore < 70:
        console.log( "less than 70" )
        break;
    default:
        console.log( "enter a valid Input" )
        break;
}



let startingPoint = 0;

// do {
//     console.log( 'femi : ' + startingPoint )
//     startingPoint = startingPoint + 1

// } while ( startingPoint < 10 )




// while ( startingPoint < 10 ) {

//     startingPoint = startingPoint + 2;
//     console.log( "amir: " + startingPoint )
// }


for ( let i = 0; i < 10; i = i + 1 ) {
    console.log( "femi" + i )
}



function aptechStudent ( name, age ) {
    this.name = name;
    this.age = age;
}


class AptechStudent {
    constructor( name, age ) {
        this.age = age;
        this.name = name;
    }
}

const newStudent = new AptechStudent( "Femi", 50 )




// assignments

// Write a Javascript Program by doing the following

// - Create a variable and store your name inside it

// - Create a variable and store your gender inside it

// - Create a variable and store your Department inside it

// - And give me this Output =>

"My Name is ------"
"I am a -----"
"I am Studying ---- at Aptech"

"My Name is ------, I am a ----- ,I am Studying ---- at Aptech"
