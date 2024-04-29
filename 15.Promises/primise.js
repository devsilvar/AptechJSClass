// setTimeout( () => {
//     console.log( 1 )
// }, 200 )
// console.log( 2 )
// setTimeout( () => {
//     console.log( 3 )
// }, 10 );
// console.log( 4 )
// console.log( 5 )

// let FoodDelivered = false
// let RiderDeliverFodd = new Promise( ( resolve, reject ) => {

//     if ( FoodDelivered == true ) {
//         resolve( "Cook the Food" )
//     } else {
//         reject( "Food Not Delivered" )
//     }
// } )


//task now is coming to Aptech

let StudentStatus = true
let mainPromise = new Promise( ( resovle, reject ) => {
    if ( StudentStatus = true ) {
        setTimeout( () => {
            resovle( "Julia is in Lagos" )
        }, 200 );
    } else {
        reject( "Julia isnt in Lagos" )
    }
} )

let FirstTask = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Task1: Wake Up" )
    }, 7000 );
} )

let SecondTask = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
        resolve( "Task2: Bath" )
    }, 10000 );
} )


let thirdTask = new Promise( ( resolve, rejet ) => {
    setTimeout( () => {
        resolve( "Task3: Dress Up" )
    }, 3000 );
} )


let LastTask = new Promise( ( resolve, rejet ) => {
    setTimeout( () => {
        resolve( "Task4:Come Down to APteh" )
    }, 6000 );
} )


// mainPromise.then( console.log( FirstTask ) ).then( console.log( SecondTask ) ).then( console.log( thirdTask ) ).then( console.log( LastTask ) ).catch( ( err ) => {
//     console.log( "Failed" )
// } )


Promise.all( [ FirstTask, SecondTask, thirdTask, LastTask ] ).then( ( data ) => {
    console.log( data )
} )


// fetch( 'https://dummyjson.com/products' ).then( function ( data ) { return data.json() } ).then( function ( data ) { console.log( data ) } ).catch( err => console.log( "you dont have data" ) )


// Async  Await

// const getJs = async () => {

// }




async function GetJson () {
    const data = await fetch( 'https://dummyjson.com/products' )
    const convertedJson = await data.json()
    console.log( convertedJson.products )
}


GetJson()


