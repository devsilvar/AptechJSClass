



// Objects in JavaScript are collections of key-value pairs where the keys are strings (or Symbols) and the values can be of any type. Objects are used to store and manage data in a structured way.

// Characteristics of Objects

// Objects are mutable, meaning their properties can be added, modified, or deleted.

// Objects can contain other objects, arrays, functions, and any other data type.

//  Creating Objectc in Javascript

let person = {
    name: "John",
    age: 30,
    isStudent: false
};
console.log( person.name )


// Aside from this style there is another way we can follow to create an Object which is to use Object Assigns

let human = new Object()
human.name = "John"
human.age = 30;
human.isStudent = false

console.log( human )

// As we know every Object in Javscrit has a method so does objects but before we delve into that, you need to understand that there are two ways to access the values of an object in javscript

// the first one is dot notation
// the second one is object notattion


let car = {
    make: "Toyota",
    model: "Camry"
};

// DOT NOTATION
console.log( car.make )

//   BRACKET NOTATION
console.log( car[ "model" ] )

// DO you know you can udate or modify the values insode an object
console.log( car.model )

car.model = "Corolla";
console.log( car.model );


// Do you knwo you can also delete a property
delete car.make;

console.log( car )

// Aside form that, do you knwo you can check if a property or a key exisist in an object

console.log( "make" in car )


// another way we can check is if the object has that property

console.log( car.hasOwnProperty( "make" ) )


// Aside from all this you can assign a function to a methid since we stated earlier that a object can contain any data type



let calculator = {
    add: function ( a, b ) {
        return a + b;
    }
};
console.log( calculator.add( 5, 3 ) );


//   Another thing we spoke about earlier is the this keyword. We can make use of it inside a functional declartion to access the thing that it contains

//   Here is an exmale with object

let TopG = {
    name: "Tate",
    greet: function () {
        console.log( "Hello, " + this.name );
    }
};
TopG.greet();



//   Now i know we have seen me iterating over an array do you knwo we can do the same over an Object

// Well to do that with objects we are going to use a Loop called For in 


// With for in we can loop though just the keys
person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for ( let key in person ) {
    console.log( key + ": " + person[ key ] );
}

// DO you knwo there is an alternative way to get all the keys in an object without using for Loop

// We just use a simle one code liner

let result = Object.keys( person )


// With that same scope we can also get the values with one liner
let results = Object.values( person )

// To add to all that we can get the values and the keys together using

let res = Object.entries( person )

// If you want to use for loop to get the keys an Values togther, most loops works magic, But a much more efficint loo to use is the For Each Loop


Object.keys( person ).forEach( key => {
    console.log( key + ": " + person[ key ] );
} );


// Property Attributes

// Writable

//     Determines if the value of a property can be changed.

// Enumerable

//     Determines if the property can be enumerated in a for...in loop.

// Configurable

//     Determines if the property can be deleted or changed.

// this follow a more robust and advanced way of creating a more secure function


// To create that we will make use of the
Object.defineProperty()

let personSec = {};
Object.defineProperty( personSec, "name", {
    value: "John",
    writable: false,
    enumerable: true,
    configurable: false
} );
console.log( personSec.name );

personSec.name = "gyuguy"

console.log( personSec )


// another example

Object.defineProperties( person, {
    age: {
        value: 30,
        writable: true,
        enumerable: true
    },
    isStudent: {
        value: false,
        writable: false,
        enumerable: true
    }
} );
console.log( person.age ); // 30
console.log( person.isStudent ); // false


// // getters and setters
// getter and setters what are they in javascript
person = {
    firstName: "John",
    lastName: "Doe",
    get fullName () {
        return this.firstName + " " + this.lastName;
    },
    set fullName ( name ) {
        let parts = name.split( " " );
        this.firstName = parts[ 0 ];
        this.lastName = parts[ 1 ];
    }
};

console.log( person.fullName ); // John Doe
person.fullName = "Jane Smith";
console.log( person.firstName ); // Jane
console.log( person.lastName ); // Smith


// Joinning Two Objects Together
let target = { a: 1 };
let source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }


