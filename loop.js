let arrv = []

function getRes () {
    fetch( 'https://www.themealdb.com/api/json/v1/1/random.php' )
        .then( ( res ) => res.json() )
        .then( ( data ) => {
            console.log( data.meals )

        } ).then( ( data ) => {
            for ( let i = 0; i < array.length; i++ ) {
                arrv.push( data.meals )
            }
            console.log( arrv )
        } );

}


getRes()
