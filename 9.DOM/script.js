// Ways of Selecting an Elements in HTML

// Selecting By ID
let secondPTag = document.getElementById( 'second-p-tag' );
console.log( secondPTag )


//selecting all Tag Names
let allPTags = document.getElementsByTagName( 'p' )
console.log( allPTags )


//Selecting by Class name
let allPTagwithClass = document.getElementsByClassName( 'test' )
console.log( allPTagwithClass )


//selecting a specific Tag with a specific class
let headingWithClassTest = document.querySelectorAll( "h3.test" )
console.log( headingWithClassTest )


// Query Selector All can Replcae Everything Else We've spoken about at the Top

// How to Target class
document.querySelector( ".test" )

//How to target Ids
document.querySelector( '#second-p-tag' )

//Target A particular tag
document.querySelector( 'h2' )


//Diffrent HTML elements has different Attributes however we have global Attributes.. So what are Attributes in HTML

//test students


//We have Global Attributes and we have attributes that are tailored for particular Tags
// For Exmaple

//Show Exmaples
// Input Tag
// TextArea Tag
// Form Tag
// button Tag
// etc



// How to Get all the clasess Added to particular HTML Element
const el = document.querySelector( "#lastParagraph" );

//Let us get all teh classes assciated with this selected Html Elemenet
let classesInArray = el.classList
console.log( classesInArray )

//To get all classNames in a atext
let classInText = el.className
console.log( classInText )


//To get the HTML content in the Tag
el.innerHTML



// Let Get Into Adding Attributes Such As EVENT LISTENERS


// get the Button 
let button = document.querySelector( "button" )

//Attach the event listener
button.addEventListener( "click", () => {
    alert( "Why Di you Click Me" )
} )
// STYLING ELEMENTS IN HTML USING JAVASCRIPT








