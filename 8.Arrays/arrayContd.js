// MERGING ARRAYS
// Using the concat() method

let cheapCars = [ "Audi", "Mazda", "Nissan" ];
let expensiveCars = [ "Lamborghini", "Ferrari", "Maserati" ];

let addUpCars = cheapCars.concat( expensiveCars )
console.log( addUpCars )



let commonCars = [ "Honda", "Toyota", "Mercedes" ];
let allCars = cheapCars.concat( expensiveCars ).concat( commonCars );
//console.log( allCars );



// How do you know if an element is present in an array?
// using indexOf()

let checkforFerrari = allCars.indexOf( 'Honda' )
console.log( checkforFerrari )
console.log( allCars )


let checkForVolvo = allCars.indexOf( "volvo" )
console.log( checkForVolvo )


//l;et us create a function that adds new cars to the list privdede the car is not in the list







// Aside from Index we can also use Includes
// using includes()


let checkFerrari = allCars.includes( "Ferrari" )
console.log( checkFerrari )


let checkHonda = allCars.includes( "Honda" )
console.log( checkHonda )



// If the value is not there it will bring false
let checkforBMW = allCars.includes( 'BMW' )
console.log( checkforBMW )



//However if we want to look for obect in an array how do we do it



//clw
//create an object of an array
let arrayOfCarsObjects = [
    { car: "Nissan" },
    { car: "Toyota" },
    { car: "Audi" },
    { car: "Maserati" },
    { car: "Lamborghini" },
];


// Finding if an object exist in an array
// Using find();

let checkforToyota = arrayOfCarsObjects.find( function ( key ) {
    return key.car == "Toyota"
} )


console.log( checkforToyota )


// let isNissanPresent = arrayOfCarsObjects.find( function ( carObject ) {
//     return carObject.car === "Nissan";
// } );

// //console.log( isNissanPresent ); //

// let maserati = arrayOfCarsObjects.find( function ( element ) {
//     // {car: 'Maserati'}
//     return element.car === "Maserati"; //true
// } );
// //console.log( maserati );


