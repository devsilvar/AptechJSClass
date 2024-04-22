let TodoList;
let index;
if ( localStorage.TodoList ) {
    TodoList = JSON.parse( localStorage.getItem( "TodoList" ) )
} else {
    TodoList = []
    localStorage.setItem( "TodoList", JSON.stringify( TodoList ) )
}

//where we will collect teh user Input


//collect user input
let Task = document.getElementById( "task" );
let Time = document.getElementById( "time" );
let Personell = document.getElementById( "personell" );


//hide the form onload
function hideFormAndOverlay () {
    document.querySelector( 'fieldset' ).style.display = "none";
    document.querySelector( '.overlay' ).style.display = "none";
}
hideFormAndOverlay()




function kikstartBtn () {
    document.querySelector( 'fieldset' ).style.display = "block"
    document.querySelector( '.overlay' ).style.display = "block";
}

function loadState () {
    document.querySelector( "#updateBtn" ).classList.add( 'hidden' )
    document.querySelector( "#submitTask" ).classList.add( 'block' )
    document.querySelector( "#modalBtn" ).addEventListener( 'click', kikstartBtn )
}
loadState()

function closeFormAndOverlay () {
    document.querySelector( "#updateBtn" ).classList.add( "hidden" )
    document.querySelector( "#submitTask" ).classList.remove( 'hidden' )


    document.querySelector( 'fieldset' ).style.display = "none"
    document.querySelector( '.overlay' ).style.display = "none";

    let Statuss = [ ...document.querySelectorAll( '.status' ) ]
    Statuss.map( ( item ) => {
        item.innerHTML = "Add"
    } )

}

document.querySelector( '#close' ).addEventListener( "click", closeFormAndOverlay )
document.querySelector( '.overlay' ).addEventListener( "click", closeFormAndOverlay )

function createToast ( message ) {
    document.querySelector( "#toastContainer" ).innerHTML = `<div id="toast"><p>${message}</p> </div>`;

    if ( message == "Sucessfully Added" ) {
        document.querySelector( "#toast" ).style.backgroundColor = "#28a745";
    } else if ( message == "Sucessfully Updated" ) {
        document.querySelector( "#toast" ).style.backgroundColor = "orange";
    } else if ( message == "Sucessfully Deleted" ) {
        document.querySelector( "#toast" ).style.backgroundColor = "red";
    }
}
function showToast ( toastElement ) {
    toastElement.classList.add( "show" );
    setTimeout( () => {
        toastElement.classList.remove( "show" );
    }, 1000 ); // Hide after 3 seconds
}

// const toastBtn = document.querySelector( "#showToast" );
// toastBtn.addEventListener( "click", () => showToast( toast ) );


function ProcessAndSendInput () {
    let currenTodo = {
        task: Task.value,
        time: Time.value,
        personell: Personell.value,
    };


    ///  TodoList.push(currenTodo);
    if ( Task.value == "" && Time.value == "" && Personell.value == "" ) {
        alert( "enet something" );
    } else {

        TodoList = [ currenTodo, ...TodoList ]
        localStorage.setItem( "TodoList", JSON.stringify( TodoList ) )

        AddToDom();
        createToast( "Sucessfully Added" )
        showToast( toast )
    }
}


function changeStatus () {
    document.querySelectorAll( '.status' ).map( ( item ) => {
        item.innerHTML = "Edit"
    } )
}

//add Todos to the dom
function AddToDom () {


    // document.querySelector( `#submitTask` ).classList.remove( "hidden" )

    TodoList = JSON.parse( localStorage.getItem( 'TodoList' ) )

    let display = "";
    for ( let i = 0; i < TodoList.length; i++ ) {
        display = display + `<tr>
<td>${TodoList[ i ].task}</td>
<td>${TodoList[ i ].personell}</td>
<td>${TodoList[ i ].time}</td>
<td> <button onclick='deleteTodo(${i})' class="delete">Delete</button> </td>
<td>  <button onclick='Edit(${i})' class="edit${i} edit show">Edit</button>  <button onclick='update(${i})' class="update${i} update hidden">Update</button> </td>
</tr>`;
    }

    document.getElementById( "table-body" ).innerHTML = display;

    resetForm();
}
AddToDom();

function resetForm () {
    Task.value = "";
    Personell.value = "";
    Time.value = "";
}


function deleteTodo ( i ) {
    TodoList.splice( i, 1 );
    localStorage.setItem( "TodoList", JSON.stringify( TodoList ) );
    AddToDom();
    createToast( "Sucessfully Deleted" )
    showToast( toast )
}

function Edit ( i ) {

    let Statuss = [ ...document.querySelectorAll( '.status' ) ]
    Statuss.map( ( item ) => {
        item.innerHTML = "Edit"
    } )


    kikstartBtn()
    index = i
    console.log( index )
    TodoList = JSON.parse( localStorage.getItem( 'TodoList' ) )

    Task.value = TodoList[ i ].task;
    Time.value = TodoList[ i ].time;
    Personell.value = TodoList[ i ].personell



    document.querySelector( "#updateBtn" ).classList.remove( "hidden" )
    document.querySelector( "#submitTask" ).classList.add( 'hidden' )
    console.log( TodoList[ i ] )
}


function update () {
    console.log( index )
    TodoList = JSON.parse( localStorage.getItem( 'TodoList' ) )

    if ( Task.value !== "" && Time.value !== "" && Personell.value !== "" ) {
        TodoList[ index ].task = Task.value;
        TodoList[ index ].time = Time.value;
        TodoList[ index ].personell = Personell.value;
        localStorage.setItem( "TodoList", JSON.stringify( TodoList ) );
        AddToDom();
        createToast( "Sucessfully Updated" )
        showToast( toast )



    } else {
        alert( "You Need to Pass in the missing values" )
    }
}

