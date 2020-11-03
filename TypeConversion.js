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