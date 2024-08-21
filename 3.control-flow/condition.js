
let citizenAge = prompt( "How aOld Are you" )

if ( citizenAge < 17 ) {
    console.log( "You are not eligible to Vote" )
} else if ( citizenAge > 17 ) {
    console.log( "You Are ELigible to Vote " )
} else {
    console.log( "enter a Valid Age" )
}


// // Question1
// let userInput = 90
// 70-100 A
// 60 - 69 - B
// 50 -59 - c
// 40 - 49 - d
// 0- 30 -   F
//  - invalid Score 


//  Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the results.
// Sample numbers : -5, -2, -6, 0, -1

let num1 = 5;
let num2 = -2;
let num3 = -6;
let num4 = 0;
let num5 = -1;

let largest;

if ( num1 > ( num2 && num3 && num4 && num5 ) ) {
    largest = num1
    console.log( largest )
} else if ( num2 > ( num3 && num1 && num4 && num5 ) ) {
    largest = num2
    console.log( largest )
} else if ( num3 > ( num2 && num1 && num4 && num5 ) ) {
    largest = num3
    console.log( largest )
} else if ( num4 > ( num3 && num1 && num2 && num5 ) ) {
    largest = num4
    console.log( largest )
} else if ( num5 > ( num3 && num1 && num4 && num2 ) ) {
    largest = num5
    console.log( largest )
}

// Write a JavaScript program that checks if a person is old enough to drive. The legal driving age is 18

let userInput = 16;

if ( userInput >= 18 ) {
    console.log( "YOu can drive at yoru age" )
} else {
    console.log( "You cant drive" )
}



// Declare three variables num1, num2, and num3. Initialize them to any integer values. Compare all pairs of variables using comparison operators (==, !=, >, <, <=, >=), log the result






function add () {
    let res = 7 + 8;
    return res;
}

add()

