// ARRAYS

// something we may need to store a list of something and there is a data type we can use to store an orderd collection of file which are called array


let fruitss = ['apple', 'orange', 'pineapple', 'groundnut', 'mango', 'abgablumo', 'guava']





let months = [ "January", "Febuary", "March", "April" ]

console.log( months )
// you should see an ordered list of data



// Now lets check the type of this data type
console.log(object)

console.log( typeof ( fruitss) )

// The rson we are getting an obect is becuase, it is nont a prmitive dtata type it is a comples datat type and all complax datat types are objects- which can also be refrred to as referecne value


// Array sarts counting from 0

months[ 0 ]
months[ 2 ]
months[ 3 ]


// To edit the Array
months[ 2 ] = "Not march"


//To add an new value to the Arrya
months.push( "November" )
console.log( months )


// let get the total count or number of elemenets in teh array
let arrLength = months.length
console.log( arrLength )


// also we can have any datat tyoes inside an array

const items = [
    "apple",
    23,
    { name: "dele", age: 34 },
    function () { return this[ 2 ] }
]

console.log( items )
// you will see that we have alot of data type sin this array

//let us use the method in the array
console.log( items[ 3 ]() )





//Now lets us Loop though this array, let say we want todo something with the values in the array


// now who can spear this array - like i taught you yesterday with Objects...
// clw
for ( let i = 0; i < items.length; i++ ) {
    console.log( i )
}

// DIFERET BUILT IN ARRAY METHODS FOR LOOPING

// ARRAY METHODS

// 1 Array.push
// This methods allows us to add a new elelemnet into the array


const names = [ "bola", "janet", "fatia", "David" ]

// if we want to add a new elelement to the array we will use Array .push
names.push( "Gideon" )



//- Array.pop

// The pop method simply alows us to delete an elelmenet from an array specifically the last elelement in an array

names.pop()
console.log( names )



//Array Shift
// what it does is that it deletes the first elemenet in an array shift all the orders backwards

names.shift()
console.log( names )

//Array unshift
// / so what unshift does is that it adds a new value to the begining of an array

names.unshift( "First Guy" )
console.log( names )



//Now we have twi vaues that most javascript devleopers usually like to confuse between each other

// Array Splice

// Array Slice



//Array SPlice allows you to add value to specific locationin an array ... unlike push whihc directly adds to the back or unshift whihc adds to the front, with splice you canadd to the middel of the array with ease...

names.splice( 2, 0, "john", "Jenny" )

// over here we added two new elemenet to the middel fo the array


// we can also use it to just delete elemenst in an array
names.splice( 2, 2 )


// we can delete some items in the middle while also adding to them too using splice
names.splice( 2, 2, "john", "Jenny" )


// Array slice
// It is useful whne you have a new Array and you wnat to copy some part of another array into it

const ignoreJanuary = months.slice( 1 )
console.log( ignoreJanuary )



//Array For Each



