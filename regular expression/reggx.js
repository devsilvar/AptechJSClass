// Definition of Regular Expressions

// Regular expressions (regex) are sequences of characters that define search patterns. They are used to match, search, replace, and validate strings based on specific patterns.

// Importance and Uses of Regular Expressions

//     Validation: Ensure input data conforms to a specified format (e.g., email addresses, phone numbers).

//     Search and Replace: Find and modify substrings within a larger string.

//     Data Extraction: Extract specific parts of text from strings (e.g., URLs from documents).

//     String Manipulation: Perform complex string operations efficiently.

// Using a regex literal: /pattern/flags
// literal Notion
const regex = /hello/;

// Using the RegExp constructor: new RegExp("pattern", "flags")
// regular expression constructor
const regexx = new RegExp('hello');

// Flags

// Flags are optional parameters that can be added to the regex pattern to modify its behavior. The most common flags are:

//     g: Global search, returns all matches instead of stopping after the first match.

//     i: Case-insensitive search, makes the search case-insensitive.
//     m: Multiline search, allows the search to span multiple lines.
//     u: Unicode search, allows the search to match Unicode characters.

// Pattern Matching

// Regex patterns can be used to match specific characters, character classes, or patterns in a string. Some common pattern matching techniques include:

//     Matching a specific character: /a/
//     Matching a character class: /[abc]/
//     Matching a range of characters: /[a-z]/
//     Matching a pattern: /^hello world$/

// Escaping Special Characters

// Special characters need to be escaped with a backslash (\).
// Special Characters

// Regex special characters are used to match specific patterns in a string. Some common special characters include:

//     \.: Matches any character.
//     \d: Matches any digit.
//     \w: Matches any word character (alphanumeric plus underscore).
//     \s: Matches any whitespace character.
//     ^: Matches the start of a string.
//     $: Matches the end of a string.
//     |: Matches either the pattern before or after the |.
//     (): Groups a pattern and captures a match.

// Using Regex in JavaScript

// Regex can be used in JavaScript to search, validate, and extract data from strings. Some common methods for using regex in JavaScript include:

//     test(): Returns a boolean indicating whether the regex pattern matches the string.
//     exec(): Returns an array of matches, or null if no match is found.
//     match(): Returns an array of matches, or null if no match is found.
//     replace(): Replaces matches with a new string.
//     split(): Splits a string into an array of substrings based on a regex pattern.

// REGULAR EXPRESSION JAVSCRIPT

// flags
let sentence = 'I have a dream, and my dream is on eday Nigeria will be better';

console.log(sentence.match(/is/gi));

let pattern = /dream/g;
let result = sentence.match(pattern);
console.log(result);

sentence = 'I have a dream, and my dream is on eday Nigeria will be better';
pattern = /dream/g;
result = pattern.test(sentence);
console.log(result);

text = 'BAT';
regex = /[abc]/gi;
result = text.match(regex);
console.log(result);

let fullName = 'palmer Cole';
regex = /palmer/g;
let newplayer = fullName.replace(regex, 'Joe');
console.log(newplayer);

email;
// dele@yahoo.com

let emailPattern = /^[a-zA-Z|\d]+@[a-zA-Z|\d]+\.[a-zA-z]{2,3}$/g;
let email = 'daniel@gmail.com';

result = emailPattern.test(email);
console.log(result)


// create a regular expression for password with this constraints

// - must have at least a upper case
// - must have a lower case
// - must have 8 or more charcters
// - must have a Number


// create an input tag to validate the password when a button is clicked



let nn = 23

let ages = [1,2,3,4,5]

result = ages.filter((item, index , arr)=> item % 2 == 0)

console.log(result)



function greet(){
    let a = 9
    let b = 7
    let result = a + b
    return result
}

document.write( greet())
console.log(greet())


function checkEven(my_num){
let result;
if(my_num % 2 == 0){

    result =  "even numbers"
}else{
    result = 'odd number'
}
console.log(result)
}

checkEven(11)


// GO home and Create function that add an amount of number 
// e.g

// add(1,2)
// add(1,3,5)
// add(3,4,5,67,7)


let arr = [1,10, 20]

function geet(array){
   
}

greet()
