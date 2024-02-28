// CONDITIONAL STATEMENT
let names = "hello"
console.log( names + " how are you" )


console.log( 2 + 3 )

let studentsInClass = 3

if ( studentsInClass > 3 ) {
    console.log( "Other students came late" )
} else {
    console.log( "we have only three students on the class" )
}


let Age = "bsuic"

// if ( Age > 17 ) {
//     console.log( "You are eligible to vote" )
// } else {
//     console.log( 'you cannot vote right now you need ' + ( 18 - Age ) + " years before you can vote" )
// }



// check the age for someone that can participate in the olympics
if ( Age >= 1 && Age <= 18 ) {
    console.log( "YOu are Too young to particpate in teh olypics" )
} else if ( Age >= 18 && Age <= 30 ) {
    console.log( 'You can particpate in teh Olympics' )
} else if ( Age > 30 ) {
    console.log( "YOu are too Old to play in th eolmypics" )
} else {
    console.log( "Enter a Valid Age" )
}

let computedAge = 23

switch ( true ) {
    case computedAge >= 20 && computedAge <= 29:
        console.log( 'you are in your twenties' );
        break;
    case computedAge >= 30 && computedAge <= 39:
        console.log( "you are in your thirties" );
        break;
}



let age = Number( prompt( "Enter your Age" ) )


switch ( age ) {
    case 20:
        console.log( "you entered " + age )
        break;
    case 30:
        console.log( 'you entred ' + age )
        break;
    case 40:
        console.log( 'you entred ' + age )
        break;
    case 50:
        console.log( 'you entred' + age )
        break;
    case 60:
        console.log( 'you entred' + age )
        break;
    case 70:
        console.log( 'you entred' + age )
        break;
    case 80:
        console.log( 'you entred' + age )
        break;
    case 90:
        console.log( 'you entred' + age )
        break;
    default:
        console.log( "enter something" )
        break;
}


// IF...ELSE IF... ELSE

// we want to output the exact grade the student had based on their score

// if score >= 70, A1
// if score is between 65 & 69 B2
// if score is between 60 & 64 B3
// if score is between 55 & 59 C4
// if score is between 50 & 54 C5
// if score is between 45 & 49 C6
// if score is between 40 & 44 D7
// if score is between 31 & 39 E8
// if score is below 30 F9
