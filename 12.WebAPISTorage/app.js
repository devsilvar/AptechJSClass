//storing something in local storage

let LateComer = {
    name: "Keneth",
    age: 17,
    Gender: "Male",
    JambScore: [ 51, 45, 30, 21 ]
}

//striing values in the local storage
localStorage.setItem( "LateComer", LateComer.name )
localStorage.setItem( "FirstStudent", "Fatia" )


// //cahneg the name of latecome
// localStorage.setItem( "LateComer", "David" )



// //dedelte a value from the localStorage
// localStorage.removeItem( "LateComer" )


let JambStudent = {
    name: "Keneth",
    age: 17,
    Gender: "Male",
    JambScore: [ 51, 45, 30, 21 ]
}


localStorage.setItem( 'JambStudent', JSON.stringify( JambStudent ) )


let result = JSON.parse( localStorage.getItem( "JambStudent" ) )

console.log( result )


