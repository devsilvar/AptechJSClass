//where we will collect teh user Input
let TodoList = [];

localStorage.setItem( "user", "Fatia" )
//collect user input
let Task = document.getElementById( "task" );
let Time = document.getElementById( "time" );
let Personell = document.getElementById( "personell" );


function categorizeInput () {

  let currenTodo = {
    task: Task.value,
    time: Time.value,
    personell: Personell.value,
  };


  ///  TodoList.push(currenTodo);
  if ( Task.value == "" && Time.value == "" && Personell.value == "" ) {
    alert( "enet something" );
  } else {
    TodoList = [ currenTodo, ...TodoList ];
    console.log( TodoList );
    AddToDom();
  }
}

//add Todos to the dom
function AddToDom () {
  let display = "";

  for ( let i = 0; i < TodoList.length; i++ ) {
    display = display + `<tr>
<td>${TodoList[ i ].task}</td>
<td>${TodoList[ i ].personell}</td>
<td>${TodoList[ i ].time}</td>
<td> <button onclick='deleteTodo(${i})'>Delete</button> </td>
<td>  <button onclick='Edit(${i})' class="edit${i} show">Edit</button>  <button onclick='update(${i})' class="update${i} hidden">Update</button> </td>
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
  console.log( "Delete operation" );

  TodoList.splice( i, 1 );
  AddToDom();
}


function Edit ( i ) {
  Task.value = TodoList[ i ].task;
  Time.value = TodoList[ i ].time;
  Personell.value = TodoList[ i ].personell

  document.querySelector( `.edit${i}` ).classList.add( "hidden" )
  document.querySelector( `.update${i}` ).classList.remove( "hidden" )
  console.log( TodoList[ i ] )
}



function update ( i ) {
  TodoList[ i ].task = Task.value;
  TodoList[ i ].time = Time.value;
  TodoList[ i ].personell = Personell.value;
  AddToDom();
}




// const items = [
//   { name: "bag", price: 200 },
//   { name: "fan", price: 300 },
//   { name: "shirt", price: 500 },
//   { name: "shoe", price: 100 },
// ]


// for ( let i = 0; i < items.length; i++ ) {
//   document.getElementById( "products" ).innerHTML += `<span>${items[ i ].name}</span> <span> ${items[ i ].price}</span> <button onclick="show(${i})" >showMe</button>`
// }


// function show ( i ) {
//   alert( items[ i ].name )
// }