// Assignment operator
var x;
x=8;   //value of x is assigned as 8 using "=" operator

//compond assignment short hand operator
var y=1;
y+=x; // y=y+x  
console.log(y)  //returns 9

var i=true;
i+=y; //i=i+y returns 10 --> '+' operator converting boolean to number
i-=y; //returns 1

i/=0; //returns Infinity

i=2;
y**=i; //returns 81 --> ** exponential assignment 9^2

y**=false; // returns 1 --> takes false as 0, 81^0 is 1

y=10;
y**=true+1; //returns 100

var j=6;
j+="true"; // returns string "6true" -->concatenation 

//Basic math opereators
// + Addition

console.log(1+1); //returns 2
console.log(1+"1"); //returns 11
console.log("1"+1); //returns 11
console.log(true+1); //returns 2
console.log(true+""); //returns "true"
console.log(true+"hi"); //returns "truehi"
console.log(true+null); //returns 1
console.log(true+undefined); //returns NaN
console.log(true+"undefined"); //returns "trueundefined"
console.log(true+true); //returns 2
console.log(8+"\n"); //returns "8"
console.log(null+"null"); //returns "nullnull"
console.log(null+undefined); //returns NaN
console.log(true+"true") //returns "truetrue"

// - Subtraction
console.log(1-2); // returns -1
x= true-true; //x=0
x=true-"true"; //x=NaN
x=1-true; //x=0
x=true-null; //x=1
x=true-undefined; //x=NaN
x=true-"1"; //returns 0
x=9-"2"; //x=7
x=9-null; //x=9
x=9-undefined; //x=undefined
x=""-9; //x=-9
x="10"-9; //x=1

// * Multiplication
x=2*2; //x=4
x=2*""; //x=0
x="5"*0; //x=0
x="5"*null; //x=0
x="5"*undefined; //x=NaN
x=null*"5"; //x=0
x="2"*"5"; //x=10
x=5*"\n"; //x=0
x=5*"\n8"; //x=40
x="true"*"\n8"; //x=NaN
x="true"*6; //x=NaN
x=6*true+1; //x=7
x=6+true*true+1; //x=8
x=6+true-true+1-"3"; //x=4
x=6+true-true+1-"3"*"7"; //x=-14

// / Division
x=7/2; //3.5
x=8/true; //8
x=8/"true"; //NaN
x=9/null; //Infinity
x=9/false; //Infinity
x=7/undefined; //NaN
x=7/""; //Infinity
x=""/9; //0
x="18"/9; //2
x="true"/9; //NaN
x="\n27"/3; //9
x="false"/3; //NaN

// % Remainder
x=12%2; // 0
45%2; //1
33%4; //1
true%5; //1
44%0 //NaN
44%""//NaN
44%null//NaN
null%null;//NaN
null%5;//0
null%undefined;//NaN
undefined % null;//NaN
null%"";//NaN
11n%10n; //1n
"true"%8; //NaN
"a"%"b";//NaN

// ** Exponent
2**3;//8
2**true;//2
2**true+true;//3
2**0;//1
0**5;//0
""**2;//0
"9"**2;//81
"9"**"2";//81
"9"**"true";//NaN
"9"**"";//1
"9"**null;//1
"9"**undefined;//NaN
null**7;//0
undefined**null;//1
null**undefined;//NaN
""**null;//1
true**null;//1
true**undefined*null;//NaN
true**undefined**null; //1
true*undefined**null //1

//Comparasion operator

console.log(7=="7");   //returns true --> compares only the value
console.log(7==="7");   // strict equal return false-->compares the value and type
console.log(9>=8);  //returns true
console.log(true!=0);  //returns true
console.log("true"!=1); //returns false

console.log(true!==0); //strict not equal -->Here,returns true , compares value and type

//Logical operators
 /*logical AND --> returns true if both exp are true, else returns false
    When used with non boolean value, returns non boolean value-->returns exp1 if its false, else returns exp2
 */
console.log(0&&7); //returns 0
console.log(7&&0);  //returns 0
console.log("hello"&&"hi"); //returns "hi"
console.log("hi"&&9); //returns 9
console.log(false&&0); //returns false
console.log(0&&false); //returns 0
console.log(1&&false); //returns false
console.log(true&&2);   //returns 2 -->which is exp2 
console.log(2&&true);   //returns true-->which is exp2 
console.log(0&&true); //returns 0
console.log(true&&0);  //returns 0
var a=6,b=9;
console.log(a&&b); //returns 9
console.log((a<b)&&(a>b)); //returns false
console.log(null&&0); //returns null
console.log(0&&""); //returns 0
console.log(""&&true); //returns empty string
console.log(1&&9); //returns 9

/**
 * Logical OR -->returns 1st truly value
 * With non boolean value-->returns exp1 if its true, else returns exp1
 */
console.log((a<b)||(a>b)); //returns true
console.log(0||7); //returns 7
console.log(0||false);  //returns false
console.log(false||0); //returns 0
console.log(false||"HI") //returns "HI"
console.log(null||0); //returns 0
console.log(0||null); //returns null

/**
 * Logical NOT -->takes truth value to false, returns false
 * with non boolean values--> returns false if operand can be converted to true
 */
console.log(!0); //returns true
console.log(!1); //returns false
console.log(!((a<b)&&(a>b)));    //returns true
console.log(!("Hi"&&0)); //returns true

// Nullish coalescing operator '??'
var num=null ?? 'Null value';
console.log(num);  //returns exp2, since exp1 is null
num=9;
console.log(num); //returns 9
num=undefined ?? "Undefined value";
console.log(num);
num=null;
console.log(num); //returns null
 
num = null||undefined ?? "Null or Undefined value";
console.log(num);  //shows syntax error
num =(null||undefined) ?? "Null or Undefined value";
console.log(num);

num =(null||9) ?? "Null or Undefined value";
console.log(num);  //returns 9 

num =(null&&9) ?? "Null or Undefined value";
console.log(num);  //returns the string

num =(8&&null) ?? "Null or Undefined value";
console.log(num);  //returns the string

var p;
num=p?? "Undefined value";
console.log(num);  //returns the string
  
