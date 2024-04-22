
//here is how to create an Object
let person = {
    name: "adeabayo",
    age: 12,
    gender: "male",
    isInClass: false
}




//Now lets us create this schema and provide it with these key. name,age ,gender and isInClass

class Person {
    constructor( name, age, gender, isInClass ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isInClass = isInClass;
    }
}
//Now we have initiated a class
// the contrustor is thr receoptor of value that we send to create the objects
// this is more like a schema or a blueprint


//now let us create the person object that we have above initiatlly

let user1 = new Person( "adebayo", 12, "male", false )

// when we say NEW PERSOn we are telling javascript to cretet a new object with the same schema that the class Person has


// this is a repressentation of what is hapenning
class Person {
    constructor( "adebayo", 12, "male", false ) {
        this.name = "adebayo";
        this.age = 12;
        this.gender = "male";
        this.isInClass = false;
    }
}


//Why do we have to create a javascirpt class cant we just create an Object
//Well you can infact you should create an Object like this

let person = {
    name: "adeabayo",
    age: 12,
    gender: "male",
    isInClass: false
}


//But if you have a schema you are supposed to follow or a structure that you have to follow to create an Object instead of creating 

let person1 = {
    name: "bayo",
    age: 22,
    gender: "male",
    isInClass: false
}

let person2 = {
    name: "ade",
    age: 92,
    gender: "male",
    isInClass: false
}

let person3 = {
    name: "ayo",
    age: 12,
    gender: "male",
    isInClass: false
}
//and so on createing a class will  reduce the code you will have t write
//all you have to do is 

let user2 = new Person( "bayo", 12, "male", false )
let user3 = new Person( "ade", 12, "male", false )
let user4 = new Person( "ayo", 12, "male", false )


// DO you know we can also create this with a function

// IN classes you can also declare function to perfrom certain methods in the schema
// if you look at it is just a format that a class uses to throw out an information when you request for it

//here is an exmaple

class Person {
    constructor( name, age, gender, isInClass ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.isInClass = isInClass;
    }
    printDOB () {
        return "YOur Date of Birth is " + new Date().getFullYear() - this.age
    }
}


// now if you want to get the Date of borth all you need to do is initiate a new person by doing this

let user22 = new Person( "ade", 23, "male", true )

console.log( user22.printDOB() )

//some of you might see the keyword this as confusion but it is not.. what it does is that it points to the parent container that houses it .. if it isnt in a container it will point to the cglobal object

//eg

let human = {
    name: "dele",
    age: 44,
    fat: true,
    whole: function () {
        return this
    }
}
console.log( human.whole() )

function humans () {
    const name = "badejo"
    const age = "adebisi"
    return this.name;
}



//inheritance in Javscript
//In a scenario where we want to create diffrent object that share the same class
// for exmaple we have a class on ANimal and we want to create a class for Gog, cat, elephant, Bords ete.

//You'll notice that they all have similar properties eg the have the same name


class Products {
    constructor( name, price ) {
        this.name = name;
        this.price = price;
    }
    productTax () {
        return this.price * 0.75
    }
}


class Shoes extends Products {
    constructor( name, price, size, color, gender ) {
        super( name, price )
        this.size = size;
        this.color = color;
        this.gender = gender;

    }
}

g
const shoe1 = new Shoes( 47, "green", "male", 450 )

let shoeTax = shoe1.productTax()
console.log( shoeTax )