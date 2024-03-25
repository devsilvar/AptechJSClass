document.querySelector( ".studentName" ).innerHTML = `FEMI`

const button = document.querySelector( 'button' )


// button.addEventListener( "click", function () {
//     let name = prompt( "Write your New Name" )
//     console.log( name )
//     document.querySelector( ".studentName" ).textContent = name
// } )


const heading = document.querySelector( 'h1' )

heading.classList.add( 'headSty' )


document.querySelector( '.studentName' ).style.display = "none"


let selectAllPTags = document.querySelectorAll( "p" )


console.log( selectAllPTags )
// selectAllPTags.style.color = "red"




// for ( let i = 0; i <= selectAllPTags.length; i++ ) {
//     selectAllPTags[ i ].style.backgroundColor = "white";
//     selectAllPTags[ i ].style.color = "black"
// }



// let i = 0;
// do {
//     i++;
//     console.log( selectAllPTags[ i ] )
// } while ( i <= selectAllPTags.length )



//MANIPULATING INPUT TAGS




//gooten the button location in the dom
let submitButton = document.querySelector( 'button#btn' )


//clicking the button to get the user value
submitButton.addEventListener( "click", ( e ) => {

    //stp form default behaviour
    e.preventDefault()

    // get teh user Input6
    //getting the use input in the input tag
    let userInput = document.getElementById( 'name' ).value

    document.getElementById( 'list' ).innerHTML += `<li>${userInput}</li>`


} )
