//get all teh values from the users input
let dataList = []


let Hobby = document.getElementById( 'hobby' )
let Name = document.getElementById( 'name' )
let Age = document.getElementById( 'age' )


///collect user Inpute and add to the Array
function CollectInputs () {
    //group the information
    let Person = {
        name: Name.value,
        age: Age.value,
        hobby: Hobby.value
    }
    dataList.push( Person )
    AddtoDoM()
    resetForm()
    console.log( dataList )
}



function AddtoDoM () {
    let accDisplay = " ";

    for ( let i = 0; i < dataList.length; i++ ) {
        accDisplay += `<tr><td>${dataList[ i ].name}</td>
<td>${dataList[ i ].age}</td>
<td>${dataList[ i ].hobby}</td>
<td> <button onclick="Delete(${i})">Delete</button> </td>
<td><button>Edit</button></td>
</tr>`

    }
    document.getElementById( "display" ).innerHTML = accDisplay
}
AddtoDoM()


function Delete ( i ) {
    dataList.splice( i, 1 )
    AddtoDoM()
}



//resetting the form
function resetForm () {

    //we locate each of the input Tags - then we make them empty

    Hobby.value = ""
    Name.value = ""
    Age.value = ""



}


// let arr = [ 1, 2, 3, 4, 5, 6 ]

// for ( let i = 0; i < arr.length; i++ ) {
//     document.getElementById( "display" ).innerHTML += `<button><b>${arr[ i ]}</b></button>`

// }