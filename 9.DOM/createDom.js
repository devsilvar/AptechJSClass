// We can Cresate an Element In Javascript

// This method crestes the HTMLDataListElementAdd TextContext to it and Sends it to the Dom


//Let us Create An H1 Element 


// const heading = document.createElement( "h1", { class: "first" }, "hello" )
// console.log( heading )


// Now that we have crested the heading where do we want to put it


//We have to put it inside somehwere which we can call a parent

// For ecmaple if we creste a P Tag we can decide to put it in a Div tag, that makes the Div Tag a parent

// If we create a Div tag we can decide to put it in a main tag or a section tag making the main or section tag a parent


// FOr the heading we are going to be puting it in th body tag since that is the only parent strucure we have inthis page

// //Lets Tagret the Body 
// let body = document.querySelector( 'body' )

// //Now let us add the heading we crested inside the Body

// body.appendChild( heading )

//Now lets check the Elemenet In the DOM

//Since nothing s there lets us add something to it

// heading.innerText = "Hello Aptech Students"


// EXMAPLE 2
const subjects = document.querySelectorAll( ".menu" )
console.log( subjects )
function switchClass ( event ) {

    // for ( let i = 0; i < subjects.length; i++ ) {
    //     subjects[ i ].classList.remove( 'active' )
    // }

    event.classList.remove( 'menu' )
}


function YOB ( year ) {
    let thisYear = 2024
    let youAge = thisYear - year
    return youAge
}


console.log( YOB( 1999 ) )
// console.log("hello")


