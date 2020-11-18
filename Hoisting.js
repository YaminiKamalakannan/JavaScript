show();
var show=function(){
console.log('show');
};
show();
function show(){console.log("SHOW function");}
show();
//  SHOW function
//  show
//  show

show();
var show=function(){
console.log('show');
};
show();
function show(){console.log("SHOW function");}
show();
function show(){console.log("SHOW FUNCTION 2");}
show();
//  SHOW FUNCTION 2
//  show
//  show
//  show

var x=9;
function change(){
    x=10; //changing value of global var, but if var x=10 instead, local var-->doesn't affect global var
}
change();
console.log(x); //returns 10

var x=9;
function change(){
    x=10;
}
var change=function(){x=11;};
change();
console.log(x);// 11


var x=9;
change();
function change(){
    x=10;
    console.log("x in fn "+x); 
}
var change=function(){x=11;console.log("x in fn exp "+x)};
change();
//  x in fn 10
//  x in fn exp 11

var x=9;
change();
function change(){
    x=10;
    console.log("x in fn "+x); 
}
change();
function change(){
    x=12;
    console.log("x in fn2 "+x); 
}
var change=function(){x=11;console.log("x in fn exp "+x)};
change();
//  x in fn2 12
//  x in fn2 12
//  x in fn exp 11

sample();
console.log(c);
console.log(b);
function sample(){
c=10;
var b=11;
}
//returns 10 and throws ReferrenceError--> since b is local var of sample

var i;
console.log(i);// undefined

const j;
console.log(j);// SyntaxError: Missing initializer 

let x;
console.log(x);// undefined

console.log(c);
let c; // throws reference error

console.log(p); //throws reference error
const p=10;

var o;
function o(){console.log('hi');};
typeof o;//"function" -->fn declaration hoisted over var declearation

var i=10;
function i(){return 100;};
typeof i;//"number" -->var assignment hoisted over fn declaration

var x=10;
function x(){
x=20;
return x;
}
x(); //throws error--> x is not a function

var x=10;
var x=function(){
x=20;
return x;
}
console.log(x); //returns fn
x(); //returns 20

var x=10;
var x=()=>20;
x;//()=>20 return th fn x

x=9;
var x;
console.log(x);// 9

p=20;
let p;
console.log(p); // throws error

//
var x=10;
if(true){
var x=12;}
console.log(x);// 12

var y=10;
if(true){
let y=12;}
console.log(y);// 10 -->since let, has scope only within if block

if(true){
    let z=99;
    }
console.log(z); // throws error

//
function x(){
    num=10;
    }
x();
console.log(num);// 10

console.log(num2); //throws error
y();
function y(){ num2=20;} 



