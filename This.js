var a=10;
console.log(window.a);// 10
console.log(this.a);// 10
console.log(a);// 10
console.log(this);//returns Window object
console.log(globalThis);// returns Window object

//
function f1(){
    return this;
    }
f1();//returns window obj --> in non strict mode
f1()===globalThis;//true

function f2(){
    'use strict';
    return this;
    }
f2(); //returns undefined--> in strict mode, when called directly
window.f2();//returns window object, when called as method of window object

//
var a="Outside";
var obj={a:"prop of obj"};
function f3(){
    return this.a;
}
f3(); //returns "Outside"
f3.call(obj); //returns "prop of obj"
f3.apply(obj); //returns "prop of obj"
//
var obj2={a:5,b:4};
function add(c,d){
    return this.a+this.b+c+d;
}
add(7,8);//NaN
add.call(obj2,4,2);//15
add.apply(obj2,[9,6]);//24

//
function f4(){
    return this;
}
f4(); //returns window object
f4.call("Hello");//String {"Hello"} --> string object
f4.call(123);//Number {123}-->Number object
f4.call('123');//String {"123"}
f4.call(true);//Boolean {true} --> Boolean object

//Bind
var obj1={a:1,b:2};
var bf=f4.bind(obj1);// creates fn bf, binds obj1 as this
bf();//{a: 1, b: 2}
var bf2=f4.bind(obj1,obj2);
bf2();// returns {a: 1, b: 2}
bf2=f4.bind(obj1.a);// returns Number {1}
bf2=f4.bind({name:"Suresh"});
bf2();//{name: "Suresh"}
var x=bf2.bind({data:"name"});
x();//{name: "Suresh"} --> binding only works once

//Arrow fn
var fn =() =>this;
fn(); // returns window obj

var obj={
    f1:()=>this
}
obj.f2=function(){
    var x=()=>this;
    return x();
}
console.log(obj);//{f1: ƒ, f2: ƒ}
obj.f2();//{f1: ƒ, f2: ƒ} --> this in x refers to obj

obj.f3=()=>this;
console.log(obj.f3());

var i=obj.f2();
console.log(i===obj);// true
var j=obj.f2;// --> refering f2 method without calling it
console.log(j===obj);// false

//
var obj1={
    foo:function(){
        var show = (()=>this);
        return show;
    }
};
var j=obj1.foo();
var k=obj1.foo; //-->refering foo without calling it

console.log(j()===obj1);// true
console.log(k()()===obj1);// false
console.log(k()()); //returns window object

//
var a=10;
var ob1={
    a:"Inside ob1",
    f1:function(){
        return this.a
    },
    f2:function(){
        var ar=()=>{
            return this.a;
        }
        return ar();
    }
}
ob1.f1();//"Inside ob1"
ob1.f2();//"Inside ob1"
function f3(){
return this.a;
}
f3();//10
ob1.f3=()=>this.a;
ob1.f3();//10

//
var obj={prop:"first"};
function showThis(){
return this.prop;
}
obj.a=showThis;
obj.a();//"first"
obj.b={c:showThis,prop:"Second"};
obj.b.c();//"Second"

//on obj prototype chain
var obj={
    f:function(){
        return this.a+this.b;
}}
var obj1=Object.create(obj);
obj1.a=12;
obj1.b=3;
obj1.f();//15
obj.a=1;
obj.b=2;
obj1.f();//15
obj.f();//3

var obj2={
    a:4,
    b:7,
    f:function(){
        return this.a+this.b;
}}
var p=Object.create(obj2);
p.f();//11
p.a;//4
p.b;//7
console.log(p);// returns empty object
p.a="hi";
p.b=7;
p.f();//"hi7"
console.log(p);// {a: "hi", b: 7}

//this with getter and setter
function add(){
    return this.a+this.b;
}
var o={
    a:2,
    b:8,
    get pdt(){
        return this.a*this.b;
    },
    get sum(){
        return add;
    }
}
o.sum();//10
o.sum;// returns fn add
Object.defineProperty(o,'sum2',{get:add,enumerable:true,configurable:true});
o.sum2;//10 -->returns sum

//if 
var o={
    a:2,
    b:8,
    get pdt(){
        return this.a*this.b;
    },
    get sum(){
        return add();
    }
}
o.sum;//returns -->NaN

//As a constructor
function data(){
    this.name="Gerard"
}
var d=new data();
console.log(d);//  {name: "Gerard"}

function data2(){
    this.name="Gerard"
    return {name:"Walter"};
}
var d2=new data3();
d2; //{name: "Walter"}

function data2(name){
    this.name=name;
    return {name:"Walter"};
}
var d3=new data3("Josh");
d3; //{name: "Walter"}

//this in classes
class show{
    get name(){
        return "Mandy"
    }
    day(){
        console.log("Good Morning "+this.name);
    }
    night(){
        console.log("Good Night "+this.name);
    }
}
var a=new show();
a.day();// Good Morning Mandy
a.night();// Good Night Mandy

class show2{
    constructor(){
        this.night=this.night.bind(this);
    }
    get name(){
        return "Mandy"
    }
    day(){
        console.log("Good Morning "+this.name);
    }
    night(){
        console.log("Good Night "+this.name);
    }
}
var b=new show2();
b.day();// Good Morning Mandy
b.night();// Good Night Mandy

class person2{
    get name(){
        return "Person 2"
    }
}
var p2=new person2();
p2.name;//"Person 2"
p2.day=b.day;
p2.day();// Good Morning Person 2
p2.night=b.night;
p2.night();// Good Night Mandy --> because this in night method is bound to the class

//
class show3{
    constructor(){
        this.night=this.night.bind(this);
    }
    get name(){
        return name;
    }
    set name(value){
        return name=value;
    }
    day(){
        console.log("Good Morning "+this.name);
    }
    night(){
        console.log("Good Night "+this.name);
    }
}
var s=new show3();
s.name="Lily";
s.night();// Good Night Lily
s.day();// Good Morning Lily
s.name="Rose";
s.night();// Good Night Rose

class person3{
    get name(){
        return "Person 3"
    }
}
var p3=new person3();
p3.name;//"Person 3"
p3.day=s.day;
p3.day();// Good Morning Person 3
p3.night=s.night;
p3.night();// Good Night Rose



