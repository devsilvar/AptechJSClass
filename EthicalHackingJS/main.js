// import { getDOB, greetings, addthreeNumber } from "../2.js-operators/getdob.js"

// const age = 19
// console.log( getDOB( age ) )
// console.log( greetings( "Afternoon" ) )

// console.log( addthreeNumber( 3, 8, 2 ) )









// let format = "####-####-####";
// let formatNumber = '7794-3Y79-6779'

// function checkFormat ( number ) {

//     for ( let i = 0; i < number.length; i++ ) {
//         const singleChar = number[ i ];

//         if ( number[ 0 ] && number[ 1 ] && number[ 2 ] && number[ 3 ] < 0 ) {
//             return "first Part: not a number"
//         }


//         if ( number[ 5 ] && number[ 6 ] && number[ 7 ] && number[ 8 ] < 0 ) {
//             return "Second Part: not a number"
//         }


//         if ( number[ 10 ] && number[ 11 ] && number[ 12 ] && number[ 13 ] < 0 ) {
//             return "third Part: not a number"
//         }


//         if ( ( number[ 4 ] ) && ( number[ 9 ] ) !== "-" ) {
//             return "Hyphen: not a Hyphen"
//         }
//     }
//     return true
// }

// // create the couter button

// console.log( checkFormat( formatNumber ) )


// function showInput () {
//     //get what the user is typing
//     let word = document.getElementById( "getText" );


//     // display hwat the user is typing

//     document.getElementById( "output" ).innerHTML = word.value


// }


let myNumber = 23;

export { myNumber }