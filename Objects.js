var object1=new Object();  //object creation
console.log(object1);   //returns an empty string
object1.text="Hi";    // property->text, value->"Hi" --->property is added to object1
console.log(object1);  //returns object1 with property text
object1.text2="Have a nice day! ";  //another property is added to object1
console.log(object1); //return object1 with 2 properties

var object2={
        firstName:"Mosh",
        lastName: "Scott"
    };  //objects can also be initialised by '{}'
console.log(object2);
object2.remarks=null;
object2.age=25;
console.log(object2);
console.log(object2.firstName); //returns value of property firstName
console.log(object2["lastName"]); //returns value of lastName prrperty
object2.place;
console.log(object2.place); //returns undefined
console.log(object2); //returns value of all properties except place
console.log(object2[place]); //shows error -->place is not defined
//object2.""="jhdvfd"; //cannot add property-> shows error
object2[""]="jhdvfd"; //"" empty string can be added as property using []

for(let i in object2){
    console.log(object2.i);  //returns undefined
}

for(let i in object2){
    console.log(object2[i]);  //returns value of properties
}

//So '[]' can be used in the case where we don't know the name of property, and dynamically determined during run time

function emp(name,id){
    this.name=name;
    this.id=id;
}
var emp1= new emp("John",015214); //creates object with properties name and id
var emp2= new emp("Kirk",254851);
console.log(emp1); //returns object emp1
console.log(emp2); //returns object emp2
var emp3=new emp("Kevin",123458); 
console.log(emp3); //returns object emp3

//Creating object using Object.create()
var n={
    isTrue: false,
    text:"Welcome"
}
var m= Object.create(n); //object y is created using object x as prototype
console.log(m.isTrue); //returns false--> properties of n is inherited
m.isTrue=true; //won't affect the object n
console.log(m); //returns only property isTrue
console.log(m.text); //But returns the text value of text

//Object with function as properties

var object3={
    add: function(a,b){
        return(a+b);
    },
    multiply: function(a,b){
        return(a*b);
    }
};

console.log(object3.add(2,3)); //returns 5
console.log(object3.multiply(6,5)); //returns 30
object3.add=function(a,b,c){  //can re-define the function
    console.log(a+b+c);
}

delete object3.multiply; //to delete property

const person1={
    name:"Jack",
    age:25
};
const person2={
    name:"Bob",
    age:22
};
function printDetails(){
    console.log(`My name is ${this.name}, I am ${this.age} years old`); //this--> refers to current object
}
person1.printDetails=printDetails;
person2.printDetails=printDetails;

console.log(person1.printDetails()); //returns the details of person1
console.log(person2.printDetails()); //return details of person2









