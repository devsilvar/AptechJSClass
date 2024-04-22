function generateMultiplicationTable ( num ) {
    let results = "br";
    for ( let i = 0; i <= 12; i++ ) {
        results = `${num} x ${i} = ${num * i}`
        console.log( results )
    }

}


function generateSQRT ( num ) {
    return Math.sqrt( num )
}


function generateDOB ( age ) {
    return new Date().getFullYear() - age
}


function generateGreeting ( name ) {
    return "hi " + name

}

// To use any of these functions esle where we have to export them.. It saves us a lot of space isntead of writing it in another javscript file where we want to use it

// How can we export in Javscript

//- Default export 
// which limit export to one function per file which you can use default export on 
// you can alo use a named export



export function generateSquare ( num ) {
    return num * num
}


function add ( num1, num2 ) {
    return num1 + num2
}

const boxerName = "Mike Tyson"
// error export boxerName;


//corret export {boxedname}

export { boxerName, generateDOB, generateGreeting, generateMultiplicationTable, generateSQRT };


//you can have a normal export and a default export in a file at the same time .. but the name on ehas to be in a curly braces {}

// when you export using defult you import without curly braces
// whne you export using names export you import with curly braces




