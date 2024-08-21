// // Create a javscript program to check if a sentence contain any numbers

// let inputSent = "Hello How are you"

// console.log( inputSent )
// //converted it into array
// let result = inputSent.split( "" )


// // inject a letter into the empty spaces
// for(let i = 0; i <= result.length ; i++){
// if(result[i] == " "){
//     result[i] = "a"
// }
// }


// // check if number is insode the array

// console.log( result)

// let newArray = result.filter(function(item){
// return Number(item) >= 0
// })

// console.log(newArray)
// if(newArray.length > 0){
//     console.log("You have anumber in teh sentence")
// }else{
//     console.log('You dont have a number in there')
// }


// // let pattern = /^\d{3}-\d{3}-\d{3}$/;
// //   return pattern.test( checkNum )


// let res = /\d/.test("Hennef9ah")
// console.log(res)

// // for ( let index = 0; index <= result.length; index++ ) {

// // }

// // Create a javscript program to check if a sentence contain any numbers

let sentece = "how are you doing"

function capitalizeWOrd ( str ) {
    //convert to an array
    let conversion = str.split( " " )
    let newArr = []
    for ( let i = 0; i < conversion.length; i++ ) {
        //get the first letter of each loop
        let finalResult = conversion[ i ].charAt( 0 ).toUpperCase() + conversion[ i ].substr( 1, )

        newArr.push( finalResult )
    }
    let finalSentence = newArr.join( " " )
    return finalSentence;
}
console.log( capitalizeWOrd( sentece ) )




// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nursesrun  mallam


let userInput = "hello"

function palidrome ( word ) {

    //converted it to an array
    let reversedWord = word.split( "" )

    //reverse the array
    reversedWord = reversedWord.reverse()

    //converting the reversed word into a string
    reversedWord = reversedWord.join( "" )


    if ( word == reversedWord ) {
        console.log( "you have a palindrome" )
    } else {
        console.log( "You don not have a palidrome" )
    }

}

palidrome( userInput )

// function add ( a, b ) {
//     console.log( a + b )
// }

// add( 1, 2 )

