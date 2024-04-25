
let promiseStatus = "Get Back from School"

const promiseMain = new Promise( ( resolve, reject ) => {

    if ( promiseStatus == "Get Back from School" ) {
        resolve( "Fulfiles" )
    } else {
        reject( "Not back from school" )
    }
} )

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



//This works perfectly as all the values had to wait for each otherbefore they run
promiseMain.then( () => console.log( promise1 ) ).then( () => console.log( promise2 ) ).then( () => console.log( promise3 ) ).then( () => console.log( promise4 ) )
