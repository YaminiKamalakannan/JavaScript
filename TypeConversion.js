// Each segment of code is tested using Developer console

//Boolean Conversions

var isTrue = "True";
alert(typeof isTrue);  //typeof--> returns the data type of the variable -- Now it shows data type as String
isTrue = Boolean(isTrue);  //Boolean Conversion
alert(typeof isTrue);     // now it shows data type as boolean

alert(typeof Boolean(1));  //Number to Boolean conversion

//String Conversion

var num = 123;
num = String(num); //converting number to string
alert(typeof num); // it returns String
alert(String(56)+" hours of working"); //can directly convert to string

var x = 10;
x=x.toString(); //can also use toString() for string conversion
alert(typeof x);

alert(String(Date())); //converting dates to string


// Numerical conversions

var str = "25";
alert(typeof Number(str)); // Converts string to number -->Returns number as the data type
var $ = +str;   // Unary operators could also be used
alert(typeof $);

var a = " ";
alert(Number(a));  //returns 0

var b = "0 9";
alert(Number(a)); // returns NaN



var value = true;
alert(typeof Number(value));  //Converting Boolean to numbers -->returns data type as number

alert(2+null); //Automatic type conversion --> considers null as 0 and returns 2


// typeof null
var f=0;  // data type is Number
f=null;   // re assigning as null
console.log(typeof f); // prints data type as object

//typeof returns 'Object' for arrays, object,and null
var arr=[0,9,8];
console.log(typeof arr);

var ob={ firstName:"Shankar",
lastName:"Mahadevan"}
console.log(ob);
console.log(typeof ob); //returns data type as object

//typeof function
function fn(){
    alert("HI");
}
fn();
console.log(typeof fn); //returns datatype as function

// typeof undefined
f=undefined;  //changing data type as undefined
console.log(typeof f); // returns data type as object

//typeof symbol
var sm=Symbol(9);
console.log(typeof sm); //returns symbol
console.log(sm); //returns Symbol(9)

//typeof BigInt
var d=10n;
console.log(typeof d); //returns BigInt
d=BigInt("10");
console.log(d); //returns 10n
console.log(typeof d); //returns bigint

