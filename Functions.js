var num=10;
undefined
function square(number){
    return number*number;
}
square(num);//100 --> Calling function
console.log(num);// 10 -->when number is passed, the change is not visible globally

function arr(str){
    return Array.from(str);
}
arr("hello");// ["h", "e", "l", "l", "o"]
var text="Welcome";
arr(text);// ["W", "e", "l", "c", "o", "m", "e"]
console.log(text);// Welcome
text=new String("StrOBJECT");//String {"StrOBJECT"}-->creates string object
typeof text;//"object"
arr(text);// ["S", "t", "r", "O", "B", "J", "E", "C", "T"]
console.log(text);// String {"StrOBJECT"}-->text is not modified

//When we pass object to a fn and change its value, the change is visible globally
function change(obj){
    obj.name="Kate";
}
var data={name:"Jake",age:25};
change(data);
console.log(data);//--> {name: "Kate", age: 25}

//can give name for fn exp, in case if we need to refer it inside fn
var f=function fact(n){return n<2?1:n*fact(n-1)};
f(3);//6
f(6);//720

//fn exp can be useful while using map fn
var inc=function(num){return num+1};
var arr=[1,2,3];
var arr1=arr.map(inc);// [2, 3, 4]

//can define based on conditions
var num=1;
if(num==1){
    var fn=function(){
        console.log("One");
    }}
else
var fn=function(){console.log("Two")};

fn();// One
typeof fn//"function"

//Function() constructor
var sum=new Function('a,b','return a+b'); //throws EvalError

//function hoisting
console.log(sum(4,5));
function sum(a,b){
    return a+b;
}
// returns 9

console.log(add1(1,2));
var add1=function(a,b){
    return a+b;
}// throws error

var add1=function(a,b){
    return a+b;
}
console.log(add1(1,2)); //returns 3

//fn can call itself
function fact(num){
    if(num===1 || num===0){
        return 1;
    }
    else{
        return num*fact(num-1); // fn can call itself
    }
}
fact(5);//120
fact(4);//24

//function scope
function sample(a,b){
    var text1="printed: "
    console.log(text1,a,b);
}
sample("Good","Morning");// printed:  Good Morning
//console.log(text1); //throws error

var name="Joe";
var eng=90;
var maths=80;
function student(){
    function findTotal(){
        var total= eng+maths;
        console.log(name+" has scored "+total+"/200")
    }
    return findTotal();
}
student();//returns--> Joe has scored 170/200

//arguments.calee
var sum=function(num){
    if(num==0||num<0){
        return 0;
    }
    else{
        return num+arguments.callee(num-1);
    }
}
var n=5
console.log("sum upto "+n+" numbers:"+sum(n));


//doubt
function foo(i) {
    if (i < 0)
      return;
    console.log('begin: ' + i);
    foo(i - 1);
    console.log('end: ' + i);
  }
foo(3);
// begin: 3
// begin: 2
// begin: 1
// begin: 0
// end: 0
// end: 1
// end: 2
// end: 3

function show(str1,str2){
    console.log(str1);
    function innerFn(){
        console.log(str2);
    }
    innerFn();
}
show("outer function","inner function");
// outer function
// inner function

function outer(o){
    console.log(o);
    function inner(i){
        console.log(o+i);
    }
   return inner;
}
var otr=outer("Out");// Out
console.log(otr("IN"));// OutIN
var otr1=outer("hi")("hello");
console.log(otr1);// returns undefined

function outer(o){
    console.log(o);
    function inner(i){
        var result=o+i;
        return result;
    }
   return inner;
}
var otr=outer("MoM")("DAD");// MoM -->log used in outer
console.log(otr);// MoMDAD
var otr1=outer("MoM","Sis")("DAD");// MoM
console.log(otr1);// MoMDAD
var show1=outer("Show 1");
console.log(show1("show 2"));// Show 1show 


function result(name){
    function total(eng,maths){
        var total=eng+maths;
        console.log(name+" has scored "+total+" marks");
    }
    return total;
}
var student1= result("Raj")(99,98); //Raj has scored 197 marks
var student2=result("John",90,80);
console.log(student2);//returns
/* ƒ total(eng,maths){
        var total=eng+maths;
        console.log(name+" has scored "+total+" marks");
    }
*/
console.log(student2(70,90));// John has scored 160 marks

function resultDisplay(name){
    function total(eng,maths){
        var result=eng+maths;
        return result;
    }
    var totalMarks=total();
    function display(){
        console.log(name+" has scored "+totalMarks+" marks");
    }
    return display;
}
var stud1=resultDisplay("Mohan")(90,80); // Mohan has scored NaN marks
/*
function resultDisplay(name){
    function total(eng,maths){
        console.log("eng:"+eng+" maths:"+maths);
        var result=eng+maths;
        console.log(result);
        return result;
    }
    var totalMarks=total();
    console.log(totalMarks);
    function display(){
        console.log(name+" has scored "+totalMarks+" marks");
    }
    return display;
}
var stud1=resultDisplay("Mohan")(90,80);
// eng:undefined maths:undefined
// NaN
// NaN
// Mohan has scored NaN marks
*/

function resultDisplay(){
    function total(eng,maths){
        console.log("eng:"+eng+" maths:"+maths);
        var result=eng+maths;
        console.log(result);
        function display(result){
            console.log(name+" has scored "+result+" marks")
        }
        display();
    }
   
    return total;
}
var stud1=resultDisplay("Mohan")(90,80);
//eng:90 maths:80
// 170
// Joe has scored undefined marks

//
function outer(){
    var res=10;
    function inner(res){
        return res*res;
    }
    return inner;
}
var ot1=outer()(8);
console.log(ot1); //64

function sum(){  //Using arguments obj
    var result=0;
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i]
    }
    return result;
}
sum(2,1,9,3,46);

//default parameters
function multiply(a,b){
    return a*b;
}
undefined
multiply(2,4);//8
multiply(2);//NaN
function multiply(a,b=1){
    return a*b;
}
multiply(9);//9
multiply(9,8);//72

function multiply(a=1,b){
    return a*b;
}
multiply(9);//NaN
multiply(2,9);//18
multiply(undefined,8);// 8

function show(name,message="Hi "+name){
    return message;
}
show('kevin'); //Hi kevin

//rest parameters
function add(...number){
    var result=number.reduce((acc,curr)=>acc+curr);
    return result;
}
add(2,3,5,6);//16
add(2,3,null,6);//11
add(2,3,'',6);//"56"

function num(...number){
    return number;
}
num(1,278,978);// [1, 278, 978]

/** Shows error
 * function num(...number,a){
    return number+a;
}
 */

function data(name,id,...marks){
    var total=marks.reduce((acc,curr)=>acc+curr);
    console.log("Name: "+name+"\nID: "+id+"\nTotal Marks: "+total);
    }

data("Mike",12378,90,78,80);
// Name: Mike
// ID: 12378
// Total Marks: 248


//Arrow functions
let add=(a,b)=>a+b;
add(4,5); //9

let add=(a=1,b=5)=>a+b; //--> Accepts default parameter
add();//6
add(6);//11
add(2,3);//5

let show=(...arg)=>arg;  //-->rest parameter
show('hi','hello',1,2,4);// ["hi", "hello", 1, 2, 4]
let show1=(...arg)=>arg+="";
show1('hi','hello',1,2,4);//"hi,hello,1,2,4"

let returnObj=(obj)=> obj;
returnObj({a:1,b:2});

let assign=({a:a,b:b}={a:1,b:2})=>a+b;
assign();//3

let assign1=([a,b]=[2,3])=>a*b;
assign1();//6

/**
 * let show2=()=>{
    var result=0
    for(let i=0;i<arguments.length;i++){
        result+=arguments[i];
    }
    return result;
}
show2(2,2,3);// throws error-->
 */

function sample(name){
    this.name=name;
    function print(){ console.log(this.name);}
    return print;
}
var s1=new sample("Kitty");
s1();// prints nothing

function sample1(name){
    this.name=name;
    let print=()=>console.log(this.name);
    return print;
}
var s1=new sample1("Kitty");
s1(); //Kitty

var colour="Red";
function printColour(){ //this in normal fn
    this.colour="Pink";
    setTimeout(function(){
        console.log(this.colour);
    },1000);
}
var c=new printColour();// Red

colour="White";
function printColour(){ //this in arrow fn
    this.colour="Pink";
    setTimeout(()=>console.log(this.colour),1000);
}
var c1=new printColour();// Pink

//arrow fn as methods
var obj1={
    a:()=>console.log("Prop A"),
    b:function(){console.log("Prop B");}
}
obj1.a();// Prop A
obj1.b();// Prop B

obj1={
    num:10,
    a:()=>console.log("By a "+this.num),
    b:function(){console.log("By b "+this.num);}
}
obj1.num;
obj1.a();// By a undefined
obj1.b();// By b 10

//using call in normal function
var obj={number:78};
function add(num){
    return num+this.number;
}

add(7);//NaN
add.call(obj,7);//85 -->assigning this value to fn using call

let data={name:"Kate",id:12234};
var print=function(){
    console.log(this.name+" "+this.id);
    }
    
print.call(data);// Kate 12234

print=function(...args){
    var marks=args.reduce((acc,curr)=>acc+curr);
    console.log("Name: "+this.name+"\nID: "+this.id+"\nTotal Marks: "+marks);
}
print.apply(data,[50,70]);
// Name: Kate
//ID: 12234
//Total Marks: 120

var boundFn=print.bind(data);
boundFn(80,90,70);
//Name: Kate
//ID: 12234
//Total Marks: 240

var data2={name:"Donna",id:12235};
print.call(data2,90,87,67);
//Name: Donna
//ID: 12235
//Total Marks: 244

var data1={details:{name:"Kavitha",id:1234},dept:"IT"};
function show(){
    return this.name;
    }

show();//""
show.call(data1);//undefined
show.call(data1.details);//"Kavitha"

var hobby="Dancing";
var data3={hobby:"Swimming"};
var show2=()=>{
    return this.hobby;
}
show2();//"Dancing"
show2.call(data3);//"Dancing"
show2.apply(data3);//"Dancing"
var b=show2.bind(data3);
b();//"Dancing"
//thus call,apply, bind are not suitable for arrow functions

function sample(){
return this.hobby;
}
sample();//"Dancing"
sample.call(data3);//"Swimming"
sample.apply(data3);//"Swimming"
var b2=sample.bind(data3);
b2();//"Swimming"

//isFinite()
isFinite(Infinity);//false
isFinite(-Infinity);//false
isFinite(' ');//true
isFinite("kgf");//false
isFinite(null);//true
isFinite(undefined);//false
isFinite(false);//true
isFinite(true);//true
isFinite(0);//true
isFinite('0');//true
isFinite('123');//true
isFinite(10e32);//true

//isNaN()
isNaN(123);//false
isNaN("123");//false
isNaN(" ");//false
isNaN(Infinity);//false
isNaN(true);//false
isNaN(undefined);//true
isNaN(null);//false
isNaN("hfhjgj");//true
isNaN(NaN);//true
isNaN(10e123);//false
isNaN(false);//false
isNaN(0/0);//true

//parseFloat()
parseFloat(1.34);//1.34
parseFloat('1.34');//1.34
parseFloat('hello');//NaN
parseFloat('false');//NaN
parseFloat('true');//NaN
parseFloat(true);//NaN
parseFloat(" ");//NaN
parseFloat("234e123");//2.34e+125
parseFloat("0/0");//0
parseFloat(0/0);//NaN
parseFloat('3453.34dgfgd');//3453.34
parseFloat(12345345354n);//12345345354

//parseInt()
parseInt(5.344);//5
parseInt(1011,2);//11
parseInt(1011,16);//4113
parseInt(0x12,16);//24
parseInt(012,8);//8
parseInt('1223e234',10);//1223
parseInt('122337n',10);//122337
parseInt('1223jhsf4352',10);//1223
parseInt('1223 23423',10);//1223
parseInt('NaN',10);//NaN
parseInt('undefined',10);//NaN
parseInt('null',10);//NaN
parseInt(true,10);//NaN
parseInt('09');//9
parseInt('08');//8
parseInt('08',8);//0
parseInt('0898');//898

//
const link='https://mozilla.org/?x=шеллы';
var encoded=encodeURI(link);
encoded;//"https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
var decoded=decodeURI(encoded);
decoded;//"https://mozilla.org/?x=шеллы"

//
console.log('one');
setTimeout(()=>console.log('two'),100);
console.log('three');
// one
// three
// two

var isCooked=true;
function sample(){
    var p = new Promise((resolve,reject)=>{
        if(isCooked){
            resolve("Cooked");
        }
        reject("Not cooked");
    });
    return p;
}
sample().then((message)=>console.log("Promise resolved : "+message))
.catch((message)=>console.log("promise rejected : "+message)); //Promise resolved : Cooked

//IIFE
(function (){
    var a=10;
    return a*2;
})();//20 -->returns immediately
console.log(a); //thorws error--> cannot acces a
var res=(function(){console.log("Pass");})();// Pass
res;//undefined
var a=(function(){return "pass";})();
a;//"pass"

(()=>"hi")();//"hi"
((value)=>value+2)(6);//8
(function(){return this})();// returns window object

var userName="Paul";
var f=((name)=>"user : "+name)(userName);
console.log(f);// user : Paul

var p=((colour)=>"My fav colour is "+colour)();
p;//"My fav colour is undefined"
var p=((colour)=>"My fav colour is "+colour)('Black');
p;//"My fav colour is Black"
var p=((colour)=>"My fav colour is "+colour)(favColour);// throws error--> favColour not defined
var favColour="Purple";
var p=((colour)=>"My fav colour is "+colour)(favColour);
p;//"My fav colour is Purple"

var obj={
    a:'one',
    b:'two',
    f:(function(){
        return this.a+" "+this.b;
    })()
}
obj.a;//"one"
obj.b;//"two"
obj.f;//"undefined undefined"

var obj={
    a:'one',
    b:'two',
    f:function(){
        return this.a+" "+this.b;
    }
}
obj.f();//"one two"

(function(){return "hi"})();//"hi"
(function(){return "hi"}());//"hi"
//function(){return "hi"}();// throws error

(function show(){return "hi"})()//"hi"
show();//"hi"
var s=(function show(){return "hi"})();
console.log(s);// hi
show();//"hi"
