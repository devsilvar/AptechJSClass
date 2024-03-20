

let fruitss = [ 'apple', 'orange', 'pineapple', 'groundnut', 'mango', 'abgablumo', 'guava' ]


console.log( typeof ( fruitss ) )

console.log( fruitss[ 6 ] )
console.log( fruitss[ 0 ] )

console.log( fruitss.length )


fruitss[ 0 ] = "yam"

console.log( fruitss )
fruitss[ 6 ] = "rice"
console.log( fruitss )



// Array .push

fruitss.push( "Grape" )
console.log( fruitss )


// YOu can add anythingh to an array
let student = [
    "julia",
    70,
    true,
    { name: "harrison" },
    [ 20, 20, 2, 20 ]
];


// Array methods
//push
//whne you wnat to add a new item to teh array you use push

let jambscore = [ 45, 50, 40, 32 ]

jambscore.push( 20 )


//when you wnat to add to the front you use unshift
jambscore.unshift( 12 )



//pop
// pop is used for dedleting the last item in an array

jambscore.pop()
jambscore.pop()
jambscore.pop()


//shift
jambscore.shift()
jambscore.shift()
console.log( jambscore )



//splice
let newJambScore = [ 78, 76, 41 ]


// newJambScore.splice( 'where are you starting from', "how many things do you wnat to delete", "what do you wnat to add" )


//delete from a specific point in an array

// newJambScore.splice( 2, 1 )
// console.log( newJambScore )


// add to any particular posistion in an array
newJambScore.splice( 3, 0, 40 )
console.log( newJambScore )



//slice
let newScores = newJambScore.slice( 2 )

console.log( newScores )





