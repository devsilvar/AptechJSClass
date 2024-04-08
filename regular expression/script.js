
let sentences = "boy The boy is at home"

let pattern = /^boy/.test( sentences )


// console.log( pattern )


let pattern2 = new RegExp( "boy", "g" )

let ans = sentences.match( pattern2 )
console.log( ans )

// let sentence = "hello are you at Home"

// let tests = sentence.match( pattern2 )
// console.log( tests )


let format = "###-###-###"
let exmapleNumber = "895-5B7-898"


function checkPattern ( examNo ) {
    //convert to an array
    examNo = examNo.split( "" )
    console.log( examNo )
    let newArr = examNo.map( ( item, index, arr ) => {
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
                if ( typeof ( newArr[ i ] ) != "number" ) return false;
                break;
            case 3:
            case 7:
                if ( newArr[ i ] != "-" ) return false;
                break;

        }

    }
    return true
}


console.log( checkPattern( exmapleNumber ) )



function checkpattern2 ( exmapleNumber ) {

    let answer = /^\d{3}-\d{3}-\d{3}$/.test( exmapleNumber )
    console.log( answer )
}

checkpattern2( exmapleNumber )