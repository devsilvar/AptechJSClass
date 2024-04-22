//select all elements
const form = document.querySelector( '#item-form' )
const list = document.querySelector( '#list' )
const input = document.querySelector( '#itemInput' )

//collect the Todo data
let TodoTaks;
if ( localStorage.TodoTaks ) {
    TodoTaks = JSON.parse( localStorage.getItem( "TodoTaks" ) );
} else {
    TodoTaks = [];
    localStorage.setItem( "TodoTaks", JSON.stringify( TodoTaks ) );
}



//now when i submit the form add a new element
form.addEventListener( 'submit', e => {
    e.preventDefault()


    //create a new item
    const Todolist = document.createElement( 'li' );

    if ( input.value == "" ) {
        alert( "Enter a Value" )
    } else {
        Todolist.innerText = input.value;
        //add the item to the list
        list.appendChild( Todolist )
    }
    //reset/clear the input form
    input.value = ''

    //setup event to delet item when clicked
    Todolist.addEventListener( 'click', () => {
        Todolist.remove()
    } )
} )