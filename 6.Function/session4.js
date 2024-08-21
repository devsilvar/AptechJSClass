// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.

let sentence = "how are you doing"



// convert the sentece to an Array
let result = sentence.split( " " )
// console.log( result )

// console.log(result[3])
// console.log( sentence.charAt( 0 ) )







function capitalizeString ( str ) {
    let resultingArr = []
    str = str.split( " " )

    for ( let i = 0; i <= result.length; i++ ) {
        let finalResult = result[ i ].charAt( 0 ).toUpperCase() + result[ i ].slice( 1, )

        finalResult = finalResult.join( "" )
        return resultingArr;
    }

}
console.log( capitalizeString( sentence ) )



// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.