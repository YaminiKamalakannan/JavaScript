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









