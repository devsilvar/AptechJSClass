
// functional decalration
function greet ( name ) {
    console.log( "GOod Afternoon " + name )
}




// functional Exression
// const greets = function () {
//     console.log( "Haneefah" )
// }

//greet( "Zion" )


function multiply ( a, b ) {
    let number1 = a;
    let number2 = b;
    return number1 * number2
}

console.log( multiply( 41, 3 ) )


const add = function () {

}

function flow () {
    function double () {
        console.log( 2 )
    }
    return this
}



const fly = () => {
    function double () {
        console.log( 4 )
    }
    return this
}


let jjambite = {
    name: "kunle",
    jambscore: [ 20, 20, 20, 20 ],
    totalScore: function () {
        return this.jambscore[ 0 ] + this.jambscore[ 1 ] + this.jambscore[ 2 ] + this.jambscore[ 3 ]
    }
}
 console.log( jambstudent.totalScore() )


let jambstudent2 = {
    name: "Janet",
    jambscore: [ 5, 20, 10, 20 ],
    totalScore: () => {
        return this.jambscore[ 0 ] + this.jambscore[ 1 ] + this.jambscore[ 2 ] + this.jambscore[ 3 ]
    }
}
console.log( jambstudent2.totalScore() )


