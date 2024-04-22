
let format = "###-###-###"
let exmapleNumber = "895-507-897"


function checkPattern ( exampleNum ) {
  //convert it to an array
  exampleNum = exampleNum.split( '' )

  
  //map through the array
  let newArr = exampleNum.map( ( item, index, arr ) => {
    if ( item >= 0 ) {
      return Number( item )
    } else {
      return item
    }
  } )

  for ( let i = 0; i < newArr.length; i++ ) {
    switch ( i ) {
      case 0:
      case 1:
      case 2:
      case 4:
      case 5:
      case 6:
      case 8:
      case 9:
      case 10:
        if ( typeof ( newArr[ i ] ) !== "number" ) return false;
        break;
      case 3:
      case 7:
        if ( newArr[ i ] !== "-" ) return false;
        break;
    }
  }
  return true;
}
let answer1 = checkPattern( exmapleNumber )
console.log( answer1 )


//This style is pretty long isn't it

// Now if we are going to be using RegExp, here is how we will go about it
// we can use the first method or the second method

let pattern = /boy/.test( "the name of the boy is destiny" )
let pattern2 = new RegExp( "boy", "g" )


console.log( pattern )

function checkpattern2 ( checkNum ) {
  let pattern = /^\d{3}-\d{3}-\d{3}$/;
  return pattern.test( checkNum )
}



let answer2 = checkpattern2( exmapleNumber )
console.log( answer2 )
// when you have $ at the end of a ReportingObserver, it matches the string from the end
// e.g '/art$/ wil match cart not artyu'
// putting /b at the end of a regex means it will match any varitaion of that astring


// REGEX EXAMPLES
// check if the word a,b, c is in a sentence 
[ abc ]  => /abc/


// check for non vowels word
[^ aeiou ]


//matches every character between a to z (case sensitive)
[ a - z ]


//matches allalphabest both uppercase and lower case
[ a - zA - Z ]

  .+
  // wont match what is one the next line


  /\s/g
  // mathces new line and spaces alone


  / d /
  // targets all digits

  [ 0 - 9 ]
  // targets 0 - 9

  [ [: blank: ] ]
// targets spaces

// WAYS OF CREATING A REGEX EXPRESION
// without flags

let regexpresion = /abcde/flag;
let regexpression2 = new RegExp("patter", [, flags]);

// Diffences and when to USE

// Use the one without flag whne you know the regular expression you are testing against
// use the one with flag whne you don;t know the input you are testing against whie writing the code

// WHAT ARE FLAGS

// -- g is used for global search which means the search will not return after the first match.
// -- i is used for case-insensitive search meaning that a match can occur regardless of the casing.
// -- m is used for multiline search.
// -- u is used for Unicode search.

let wordToTest = "you are the one you are waiting for";

//lets look for the word "you"
let regularExpressionLiteral = /you/gi;
// means checl for the word you continiously
let answer = wordToTest.match( regularExpressionLiteral );

console.log( answer );


// classwork
// if you were to use loop here is how you might have to do it
function checkforYOU ( userInput ) {
  let getValue = [];
  for ( let i = 0; i < userInput.length; i++ ) {
    const element = userInput[ i ];

    if (
      userInput[ i ] == "y" &&
      userInput[ i + 1 ] == "o" &&
      userInput[ i + 2 ] == "u"
    ) {
      getValue.push( "you" );
    }
  }
  console.log( getValue );
}

checkforYOU( wordToTest );

// NOTE: IF THE ANSWER IS NOT THERE IT WILL RETURN A NULL

// USING REXEX CONSTRUCTOR
//preferable for dynamic inputs

let regEX = new RegExp( "you", "g" );
let ans1 = wordToTest.match( regEX );
console.log( ans1 );

// SPECIAL CHARACTERS
// ^^^^^^

const regexPattern1 = /^cat/;

console.log( regexPattern1.test( "cat and mouse" ) ); // Output: true
console.log( regexPattern1.test( "The cat and mouse" ) ); // Output: false because the line does not start with cat

// Without the ^ in the pattern, the output will return true
// because we did not assert a boundary.

const regexPattern2 = /cat/;
console.log( regexPattern2.test( "The cat and mouse" ) ); // Output: true

// &&&&&&&
const regexPattern = /cat$/;
console.log( regexPattern.test( "The mouse and the cat" ) ); // Output: true
console.log( regexPattern.test( "The cat and mouse" ) ); // Output: false

// when we use the flag \b we match every word that end in the specified word


// EXAMPLE
let regEx2 = /\bhello/g  "match every word that starts with helllo"
let regEx3 = /war\b/g  "match every word that starts with war in a sentence"




// \d – matches any decimal digit and is shorthand for [0-9].
// \w – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
// \s – matches any white space character.
// \D – matches any non-digit and is the same as [^0-9.]
// \W – matches any non-word (that is non-alphanumeric) character and is shorthand for  [^A-Za-z0-9_].
// \S – matches a non-white space character.
// . – matches any character



// CHARACTER CLASS
// when we say character class, maybe we want to match number, small letters , capiatal letters, special characters,

// There are clasese of character, now, how do we match them
for capital letters[ A - Z ]

for small letters[ a - z ]

for number[ 0 - 9 ]


// Matches any character not listed inside the brackets

// const regexPattern = /[^bc]at/;

// console.log(regexPattern.test('bat')); // Output: false

// console.log(regexPattern.test('cat')); // Output: false

// console.log(regexPattern.test('mat')); // Output: true





// // REGEX FOR EMAIL
// const regexPatternForEmail = /^[(\w\d\W)+]+@[\w+]+\.[\w+]+$\i/




