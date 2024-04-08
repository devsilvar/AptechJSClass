let income = document.querySelector( "#income" )
let rent = document.querySelector( "#rent" )
let grocery = document.querySelector( "#grocery" )
let utility = document.querySelector( "#utility" )
let transport = document.querySelector( "#transport" )
let leisure = document.querySelector( "#leisure" )


// let incomeP = Number( prompt( "Enter Your Income" ) )
// let rentP = Number( prompt( "Enter Your rent" ) )
// let groceryP = Number( prompt( "Enter Your Grocery" ) )
// let utilityP = Number( prompt( "Enter Your Utility" ) )
// let transportP = Number( prompt( "Enter Your transport" ) )
// let leisureP = Number( prompt( "Enter Your lesuire" ) )





// let totalExpenses = rentP + groceryP + utilityP + transportP + leisureP;
// let remainBalce = incomeP - totalExpenses

// console.log( "Total Income:" + incomeP )
// console.log( "total Expenses: " + totalExpenses )
// console.log( "remianig Balace: " + remainBalce )


function GenrateBudget () {
    document.querySelector( "#Tincome" ).innerHTML = income.value

    let totalExpence = rent.value + utility.value + transport.value + grocery.value
    document.querySelector( "#TExpennse" ).innerHTML = totalExpence



}

// Create a functionla prototype that creates an array and 
// genaret a function that convert any word to capitla letter
// using this array createt function that accepst an input from a user check if the input is already insdoe the array before adding it inside the array


function genrateNames ( name1, name2, name3, name4 ) {
    return [
        name1, name2, name3, name4
    ]
}

let genNames = genrateNames( "julia", "davisd", "femi", "amir" )

console.log( genNames )


function CovertToUpperCase ( name ) {
    return name.toUpperCase()
}


  CovertToUpperCase( "fatia" )




