let API_URL = "https://jsonplaceholder.typicode.com/posts"




// fetch( API_URL ).then( res => res.json() ).then( function ( data ) {
//     console.log( data )
//     data.map( ( item ) => (
//         document.getElementById( 'flex' ).innerHTML += `<div>
//         <p>Title ${item.title}</p>
//     <p>BOdy: ${item.body}</p>
//     </div>`
//     ) )
// } ).catch( err => console.log( err ) )





async function getData () {
    let initialJSON = await fetch( API_URL )
    let convJsonData = await initialJSON.json()
    console.log( convJsonData )

    convJsonData.map( ( item ) => {
        document.getElementById( "flex" ).innerHTML += `
        <div> 
        <button>Title</button> ${item.title}  <br>  
        <button> Body</button> ${item.body}  
        </div>`
    } )
}

getData()