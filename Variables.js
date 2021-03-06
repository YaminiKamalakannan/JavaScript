var empName;         //Declaring a variable
empName = "Josh";    // Assigning a value to a variable

var empSalary = 15000 ;  // variable can be declared and assigned at the same time

const empId = 198542;    // const keyword doesn't allow us to reassign the value
var workHour = 8;
function empPost(post){
    let job_Posting = post;  // let--> it only has block scope
    let workHour = 7;   // Re-declaring the variable using let will not affect var declared outside the block
    console.log(job_Posting,workHour);
}

empPost("Intern");


/*The variable should be unique
  They are case sensitive
  Letters, Numbers, Underscore and $ symbol can be used to declare variable */
var $value = 74.3;  
var a = 1;
var A;    /* both variable has different value since variable names are case sensitive
            and when a  variable is left without assignment, it takes the value as 'Undifined'  */
A = a + 2; // we can do arithmetic operation using variables

var name = "Paul", age = 20, country = "India"; // Can declare multiple variables in a single line

// Declaring number using Number Wrapper object
var k=Number(98);
console.log(k); //returns 98
console.log(typeof k); //returns number

k=Number(true);
console.log(k); //returns 1
k=Number(true+1);
console.log(k); //returns 2

k=Number("Hi"+1);
console.log(k); //returns NaN

k=Number(true+"Hi");
console.log(k); //returns NaN

k=Number(true+"true");
console.log(k);

k=Number(true+null);
console.log(k);  //returns 1

k=Number(null+null);
console.log(k); //returns 0

k=Number(null+undefined);
console.log(k); //returns NaN

k=Number(""+1);
console.log(k); //returns 1

a=Number(10n);
console.log(a) //returns 10
console.log(typeof a);  //returns number

// declaring string using String wrapper object
var h=String("hi");
console.log(h) //returns "hi"
console.log(typeof h); //returns string

var k= new String("string obj");
console.log(k) // returns object {"string obj"}
console.log(typeof k);  //returns object

var d=String("hi");
console.log(h==d); //returns true

var j=new String("string obj");
console.log(k==j); //returns false eventhough k and j have same value

// declaring boolean using Boolean wrapper object

var b=Boolean(true);  //creates a primitive boolean
console.log(typeof b); //returns boolean

var g=Boolean("false");
console.log(g) //returns true

g=Boolean("");
console.log(g); //returns false--> empty string is considered as false

var ob= new Boolean(false); //creats object boolean
console.log(typeof ob); //returns object

if(b&&ob){
  console.log("if statement executed");  //if block is executed since, false value ob Boolean object ob is treated as true
}

// Boolean wrapper object
var b=new Boolean();// creates boolean obj
console.log(b);// returns Boolean obj- Boolean {false}
var p=Boolean(); //creates Boolean primitive
console.log(p);// returns false
console.log(typeof p); // returns boolean

b=new Boolean("");//Boolean {false}
b=new Boolean(null);//Boolean {false}
b=new Boolean(undefined);//Boolean {false}
b=new Boolean(0);//Boolean {false}
b=new Boolean(-0);//Boolean {false}
b=new Boolean(-1254);//Boolean {true}
b=new Boolean([]);//Boolean {true}
b=new Boolean({});//Boolean {true}
b=new Boolean("false");//Boolean {true}

b=new Boolean(false);//Boolean {false}
if(b){
console.log("Boolean Object b is true");
}// returns Boolean Object b is true--> false value ob boolean obj is taken as true in conditional statements

//Boolean.prototype.toString()
b=new Boolean("hi");// returns Boolean {true}
b.toString();//"true"
b.toString(98);//"true"
b=new Boolean(false);//Boolean {false}
b.toString();//"false"
b=new Boolean("false");//Boolean {true}
b.toString();//"true"

//Boolean.prototype.valueOf()
b.valueOf();// returns true-->returns the primitive value of Boolean obj
b=Boolean("0");//true
b.valueOf();//true
b.toString();//"true"
