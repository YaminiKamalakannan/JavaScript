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

//Object.assign()
var target={a:"hi",b:"hello",c:"good"};
var source={d:"d",b:"replaced",e:"e"};
var replaced=Object.assign(target,source);
console.log(replaced);//returns {a: "hi", b: "replaced", c: "good", d: "d", e: "e"}

//Object.defineProperties()
var def1=new Object();
Object.defineProperties(def1,{
    prop1:{value:"1",writable:true},
    prop2:{value:"2",writable:false}
    });  //returns {prop1: "1", prop2: "2"}
def1.prop1="updated";
console.log(def1);//returns  {prop1: "updated", prop2: "2"}
def1.prop2="updated";
console.log(def1);// {prop1: "updated", prop2: "2"} -->prop2 is not updated

//Object.entries()
var ent={1:"One",2:"Two",3:"Three"};
Object.entries(ent);// returns [["1", "One"],["2", "Two"],["3", "Three"]]

//Object.freeze()
g={1:"jiii",2:"hiiii"};
g[1]="kjasdnj";
console.log(g);//returns {1: "jiii", 2: "hiiii"}

//Object.getOwnPropertyNames()
Object.getOwnPropertyNames(ent);//returns ["1", "2", "3"]

//Object.getOwnPropertySymbols()
var a=Symbol('a');
var b=Symbol('b');
var sm={};
sm[a]="hi";
sm[b]="hello";
console.log(sm);//returns {Symbol(a): "hi", Symbol(b): "hello"}
Object.getOwnPropertySymbols(sm);// [Symbol(a), Symbol(b)]

//Object.getPrototypeOf()
var phone={cost:"",colour:""};
var samsung=Object.create(phone);
samsung.cost=20000;
samsung.colour="black";
console.log(samsung);//returns {cost: 20000, colour: "black"}
Object.getPrototypeOf(samsung);// returns {cost: "", colour: ""} -->Prototype of samsung obj

//Object.is()
Object.is(0,0);//true
Object.is(0,-0);//false
Object.is(null,null);//true
Object.is(null,undefined);//false
Object.is(undefined,undefined);//true
Object.is(1,1);//true
Object.is(10n,10n);//true
Object.is("","");//true
Object.is("","hi");//false
Object.is({},{});//false
Object.is([],[]);//false
var a={a:"1"};
var b={a:"1"};
Object.is(a,b);//false
Object.is(a,a);//true
Object.is("a","A");//false
Object.is(NaN,NaN);//true
Object.is(false,false);//true
Object.is("hi","hi");//true

//Object.isExtensible() & Object.preventExtension()
Object.isExtensible(a);//true
Object.preventExtensions(a);//{a: "1"}
a.prop2="2";
console.log(a);//returns {a: "1"} -->prop2 is not added
Object.isExtensible(a);//false

//Object.isFrozen()
let d={};
Object.freeze(d);
Object.isFrozen(d);// returns true

var p=Object.preventExtensions({});
Object.isFrozen(p);//true
Object.isExtensible(p);//false

//Object.seal()
let p=new Object();
p.prop1="1";
p.prop2="2";
Object.seal(p); //{prop1: "1", prop2: "2"}
p.prop3="3";
console.log(p);// {prop1: "1", prop2: "2"} -->prop3 is not added
//Object.isSealed()
Object.isSealed(p);// returns true--> since onj p is sealed

//Object.keys()
Object.keys(p);//returns ["prop1", "prop2"]

//Object.prototype.hasOwnProperty()
let p=new Object();
p.name="Alex";
p.age=22;
console.log(p);// {name: "Alex", age: 22}
p.hasOwnProperty("age");//true
p.hasOwnProperty("agesdf");//false
p[1]="one";
console.log(p);// {1: "one", name: "Alex", age: 22}
p.hasOwnProperty(1);//true
p.hasOwnProperty(0);//false
p.hasOwnProperty(null);//false
p.hasOwnProperty(undefined);//false

//Object.prototype.isPrototyprOf()

var emp=new Object();
emp.post="employee";
emp.salary="";
console.log(emp);//returns {post: "employee", salary: ""}
var tester= Object.create(emp);
tester.post="Software Tester"
tester.salary=25000;
console.log(tester);// {post: "Software Tester", salary: 25000}
emp.isPrototypeOf(tester);// returns true-->since emp is prototype of tester obj

//Object.defineProperty() & Object.defineProperties
var dev=Object.create(emp);
dev.post="Software Developer";
var d=Object.getOwnPropertyDescriptor(dev,"post");
console.log(d)// {value: "Software Developer", writable: true, enumerable: true, configurable: true}
Object.defineProperty(dev,'basicPay',{
    value:18000,
    writable:true,
    enumerable:false,
    configurable:true
});
console.log(dev);// {post: "Software Developer", basicPay: 18000}

Object.defineProperties(dev,{
    "project":{
        value:"Dev project",
        writable:false,
        enumerable:false,
        configurable:true
    },
    "experience":{
        value:"3 years",
        writable:false,
        enumerable:true,
        configurable:true
    }});
console.log(dev);// {post: "Software Developer", experience: "3 years", basicPay: 18000, project: "Dev project"}

//Object.getOwnPropertyDescriptor()
var d=Object.getOwnPropertyDescriptor(dev,"basicPay");
console.log(d);// {value: 18000, writable: true, enumerable: false, configurable: true}
d=Object.getOwnPropertyDescriptor(dev,"skillSet");
console.log(d); // returns undefined--> since skillSet is not a prop of dev obj

//Object.getOwnPropertyDescriptors()
d=Object.getOwnPropertyDescriptors(dev);
console.log(d); // returns an obj-->with descriptors of all properties of specified obj


dev.propertyIsEnumerable("post");//returns true
dev.propertyIsEnumerable("basicPay");// returns false
dev.propertyIsEnumerable("experience");//returns true
dev.propertyIsEnumerable("project");//returns false
for(let i in dev){console.log(dev[i]);} /**Software Developer
                                           3 years */ //--> returns only enumerable properties

//toString()
var x=[1,2,3];
typeof x;//"object"
var y=x.toString();
console.log(y);// "1,2,3"
typeof y;//"string"

//valueOf()
var s=new String("dshfiudhf");
typeof s;//"object"
var val=s.valueOf();
typeof val;//"string"









