let person = { name: "shade", age: 12 }

person.gender = "female"



person[ "height" ] = "10cm";

let location = "state"

person[ location ] = "Lagos"
// console.log( person )


let student = {}

student.name = "Ester";
console.log( student )


let children = new Object()



children.name = "Ayo";
// console.log( children )

// function Stucture ( name, age, gender ) {
//     return {
//         name: name,
//         age: age,
//         gender: gender
//     }
// }


// let person1 = Stucture( "Ade", 12, "male" )

// console.log( person1 )

// let person2 = structuredClone( "Bisi", 19, "female" )


let car = {
    name: "Toyota",
    model: 2014,
    color: "red",
    price: '$3000',
    engine: 'w16'
}

console.log( "color" in car )
console.log( car.hasOwnProperty( "color" ) )



car.price = "$5000";

console.log( car )

delete car.price

console.log( car )

const jambStudent = {
    name: "Shade",
    age: 21,
    Score: { MATHS: 44, ENG: 66, CHEM: 66, PHY: 50 },
    passedJamb: true,
}

jambStudent.Score.MATHS = 50

console.log( jambStudent )


// function name(){
// this
// }

// const name = () => {

// }

// const sittuation = function(){

// }


const GENzJambite = {
    name: "Shade",
    age: 21,
    Score: { MATHS: 54, ENG: 54, CHEM: 66, PHY: 50 },
    situation: function () {
        let total = this.Score.MATHS + this.Score.ENG + this.Score.CHEM + this.Score.PHY;
        if ( this.Score.ENG > 50 && this.Score.MATHS > 50 && total > 199 ) {
            return "you are welcome to our school"
        } else {
            return "You Failed"
        }
    },
    passedJamb: true,
}

console.log( GENzJambite.situation() )


// class Car {
//     constructor( brand, color ) {
//         this.brand = brand;
//         this.color = color;
//         this.startEngine = function () {
//             console.log( 'The engine starts...' );
//         };
//     }
// }


function add ( a, b ) {
    return a + b
}

console.log( add( 1, 2 ) )


console.log( add( 4, 9 ) )



console.log( "Hello Madam Ester" )

console.log( "Mr daniel" )

function greet ( name ) {
    console.log( "hello  " + name )
}


greet( "Zion" )


// JOining Two Object Together
//  - using assign and spread Operator


// Getting the keys and values insode an Array

//looping though the keys and athe values togther

//looping though them sepeartely


// // getters and setters
// getter and setters what are they in javascript
// person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName () {
//         return this.firstName + " " + this.lastName;
//     },
//     set fullName ( name ) {
//         let parts = name.split( " " );
//         this.firstName = parts[ 0 ];
//         this.lastName = parts[ 1 ];
//     }
// };

// console.log( person.fullName ); // John Doe
// person.fullName = "Jane Smith";
// console.log( person.firstName ); // Jane
// console.log( person.lastName ); // Smith



// A getter is a function that is used to access properties on an object. It is similar to a method, but it is not called on an instance of an object. Instead, it is called on the object itself. Getters are often used to access values from an object that are not directly accessible, such as nested properties.

// Here is an example of a getter defined on an object called person. The getter is called name, and it returns the value of the name property on the object:

const person = {
    first_name: 'Jane',
    last_name: "Derik",
    get fullName () {
        return this.first_name + ' ' + this.last_name;
    },
};
console.log( person.fullName ); // Jane

// A setter is a method that allows you to set the value of a property in an object. It is a special type of method that is used to set the value of a property in an object. The setter method takes one argument, which is the value that you want to set the property to.

// Here is an example of a setter defined on an object called user with a property called name:

const user = {
    name: '',
    jambScore: { ENG: 77, MATHS: 60, PHY: 70, CHEM: 90 },
    set JambInsider ( value ) {
        this.jambScore.MATHS = value;
    },
};

user.JambInsider = 99;
console.log( user ); // John

// Getters and setters are useful because they provide a way to encapsulate data and behavior within an object, and they allow you to control how the object's properties are accessed and modified. By using getters and setters, you can enforce certain rules or constraints on the data stored in an object, and you can ensure that the data remains consistent and up to date.