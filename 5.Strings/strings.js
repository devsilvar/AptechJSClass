// String is a Data Type




let age = Number( "67" ) + Number( "34" )

console.log( age )

console.log( typeof ( age ) )








let names = "julia"




// names[0]
// names[1]
// names[2]


//acessing each number in an array
console.log( names[ 0 ] )
console.log( names[ 1 ] )
console.log( names[ 2 ] )
console.log( names[ 3 ] )
console.log( names[ 4 ] )




//console.log( "my name is " + names + ( 67 - 34 ) )




//to join string and number you can achie that using backticsk `````



let userDOB = 1999

//outp => i am 12 years old

//console.log( `I am ${2024 - userDOB} years old` )

console.log( "i am " + ( 2024 - 1999 ) + " years old" )



let gender = "male"

console.log( `My name is Daniel and i am a ${gender} and the next year will be ${2023 + 2}` )

console.log( gender.split( "" ) )


// Methods of Manipulating a String
//check for a palindrome
console.log( names[ 4 ] )
console.log( names[ 0 ] )



let putArr = " i am a boy"


console.log( putArr.split( " " ).reverse() )
// madam
// mallam


let covvertStr = putArr.split( " " ).reverse().join( " " )

console.log( covvertStr )


let newName = names.split( "" )

console.log( newName )

console.log( newName.reverse() )


console.log( newName.join( "" ) )




let nam1 = "fatia"
console.log( nam1.split( "" ) )

let nameval = nam1.split( "" );

console.log( nameval )

console.log( nameval.join( "" ) )


// String Concatenation

let age1 = 32;

// print out I am 32 yeasr Old

console.log( "I am " + age1 + " years old" )

console.log( `I am ${age1} years old` )

// print =>  i am 45 years old

console.log( 'i am ' + 32 + 13 + " years old" )


// Type Conversion


console.log( 'i am ' + Number( 32 + 13 ) + " years old" )

console.log( `I am ${Number( 32 + 13 )} years old` )


let num1 = "David"
let num2 = 5
console.log( num1 - num2 )



let checkForPalindrome = "mallam"
// let check_for_palindrome

//convert name to an arrray
//step1
let nameConverted = checkForPalindrome.split( "" )


//step 2
//reverse the array
nameConverted = nameConverted.reverse()


//step 3
//convert the reverserd array back to a string
nameConverted = nameConverted.join( "" )

// let a = [ 1, 2, 3 ]
// let b = [ 1, 2, 3 ]


//let uys check for a plaindrom

if ( checkForPalindrome === nameConverted ) {
    console.log( "You have a palindrom" )
} else {
    console.log( "Not a Palindrom" )
}

console.log( nameConverted )

// mallam
// madam
// dad
// mom




//check if number is divisible by 2 - 2-50
// for ( let i = 0; i <= 50; i++ ) {
//     if ( i % 2 == 0 ) {
//         console.log( i )
//     }
// }


for ( let i = 0; i <= 50; i += 2 ) {
    console.log( i )
}


for ( let i = 1; i <= 12; i++ ) {
    // console.log( '2 x ' + i + " = " + 2 * i )
    // console.log( `2 * ${ i } = ${ 2 * i } ` )
}



let givenNumber = 4

// calculate the factorial of a given number


let accumulator = 1
for ( let i = 4; i >= 1; i-- ) {
    accumulator = accumulator * i;
}

// acc = 1 * 4 = 4
// acc = 4 * 3 = 12
// acc = 12 * 2 = 24
// acc = 24 * 1 = 24


// console.log( accumulator )



// for ( let i = 2; i < 50; i += 1 ) {
//     if ( i % 2 != 0 && i >= 3 && i % 3 != 0 ) {
//         console.log( i )
//     }
// }


// TO print out only prime number from 1 to 100
for ( let i = 2; i <= 100; i++ ) {
    if ( i == 3 ) {
        console.log( i )
    } else if ( i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0 ) {
        console.log( i )
    }
}

















