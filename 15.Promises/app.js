// Promises

// console.log( 1 )
// console.log( 2 )

// setTimeout( () => {
//     console.log( 3 )
// }, 1000 );
// console.log( 4 )


// 3 came out last because it took it 1 secods to finish executing

// ..Now you will notice that If thre changed the mode of execution of these consoles

// Did 2 and 1 wait for Three ???


//Now let us check out This one
// console.log( 1 )
// setTimeout( () => {
//     console.log( 2 )
// }, 500 );
// setTimeout( () => {
//     console.log( 3 )
// }, 1000 );
// console.log( 4 )


// Now what if each of the console has a specific time they used to complete there execution
// setTimeout( () => {
//     console.log( 3 )
// }, 500 );
// setTimeout( () => {
//     console.log( 2 )
// }, 1500 );
// setTimeout( () => {
//     console.log( 4 )
// }, 200 );
// setTimeout( () => {
//     console.log( 5 )
// }, 1000 );
// setTimeout( () => {
//     console.log( 1 )
// }, 800 );
// How will it display Themselves


// Now if all these was a Promise, It will wait for the first one to execute before running the second one even if the first on etakes 5 seconds and the second one takes 2 seconds

// Now let me execute what i am talking about



const promise1 = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Task 1: My Taks Takes 5 Second to Finish" )
    }, 5000 );
} )


const promise2 = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Task2: My task takes 2 seconds to Finish" )
    }, 2000 );
} )


const promise3 = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Task3: My task takes 1 second to Finish" )
    }, 1000 );
} )


const promise4 = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Task4: My task takes 1.5 seconds to Finish" )
    }, 1500 );
} )



// Promise.all( [ promise1, promise2, promise3, promise4 ] ).then( ( data ) => {
//     console.log( data )
// } )


//you will notice thatno matter how log one taks takes they will still wait for themselves


//Now lets go Abit deeper

function movePlayer ( time, direction ) {
    setTimeout( () => {
        console.log( "Moving" + direction )
    }, time );
}



//Non Implementation code
movePlayer( 200, "down" )
    .then( movePlayer( 500, "up" ) )
    .then( movePlayer( 1000, "left" ) )
    .then( movePlayer( 600, 'right' ) )


// Non Implenetation Code
// async function movePlayer () {
//     await movePlayer( 100, 'up' )
//     await movePlayer( 200, 'left' )
//     await movePlayer( 400, 'left' )
//     await movePlayer( 300, 'Right' )
//     await movePlayer( 200, 'bottom' )
//     await movePlayer( 100, 'left' )
// }



// async function displayUsers () {
//     let url = 'https://dummyjson.com/products'
//     try {
//         let response = await fetch( url );
//         let data = await response.json();
//         console.log( data )
//     } catch ( err ) {
//         console.log( err.message )
//         console.log( "there is an Error Somehwere Maybe network" )
//     }
// }

// displayUsers()










// const firstPromise = new Promise( ( resolve, reject ) => {
//     if ( true ) {
//         resolve( "Content was Loaded Sucessfully" )
//     } else {
//         reject( "content was not Loaded Sucessfully" )
//     }
// } )

// console.log( firstPromise )


// promise Gives US three Possible Values
// Pending
// Fulfiled
// Rejected



