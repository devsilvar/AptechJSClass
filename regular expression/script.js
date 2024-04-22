function realTime () {
    let displayTxt = document.getElementById( 'email' )

    document.getElementById( "val" ).innerHTML = displayTxt.value

    let regxPattern = /you/g

    let res = regxPattern.test( displayTxt.value )

    if ( res == true ) {
        document.getElementById( 'regx' ).innerHTML = 'passed'
        document.getElementById( 'regx' ).style.color = 'green'
    } else {
        document.getElementById( 'regx' ).innerHTML = 'failed'
        document.getElementById( 'regx' ).style.color = 'red'
    }
}



