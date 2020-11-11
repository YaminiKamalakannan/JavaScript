//creating an array
var num=[1,2,3];
console.log(num[0]);  //accessing array element using index
console.log(num.length); //returns 3-->length of array
for(let i in num){ //iterating thorugh array elements
    console.log(i);
}

//creating array using array costructor
var arr1=Array(2); //creates array of length 2
console.log(arr1); //retruns empty array
arr1[0]=9;
arr1[1]=8;
console.log(arr1); //returns array [9,8]
arr1[2]=7; //gets appended to arr1
console.log(arr1); //returns [9,8,7]

Array.isArray(arr1); //returns true--> checks if arr1 is an array

var arr2=[{name:"Shankar"},{age:"25"}];
console.log(arr2); //returns array
console.log(arr2[0].name); //returns Shankar
arr2[0].hobbies="Cooking"; //adding property 
console.log(arr2[0]); //returns object with 2 properties--name and hobbies

//pop() --> removes last element from array and returns it

const clr=["red","yellow","green","black"];
console.log(clr);
console.log(clr.pop()); //returns black

//Arrar.from()
console.log(Array.from("Hello"));// ["H", "e", "l", "l", "o"]
console.log(Array.from(12345)); // []
console.log(Array.from('12345'));// ["1", "2", "3", "4", "5"]

let set1=new Set([12,21,32]);// {12, 21, 32}
console.log(Array.from(set1));// [12, 21, 32]

let map1=new Map([[1,"one"],[2,"two"],[3,"three"]]);
console.log(map1);// {1 => "one", 2 => "two", 3 => "three"}
console.log(Array.from(map1)); // [[1, "one"], [2, "two"], [3, "three"]]

console.log(Array.from(map1.keys()));// [1, 2, 3]
console.log(Array.from(map1.values()));// ["one", "two", "three"]

function f(){
    console.log(Array.from(arguments));
}
undefined
f(1,1,"hello");// [1, 1, "hello"]

//Array.isArray()

Array.isArray([1,2,3]);//true
var x=[1,4,57,6];
Array.isArray(x);//true
x=[NaN];
Array.isArray(x);//true
x=[undefined];
Array.isArray(x);//true

//Array.of()
Array.of(1,2,"hi",true,NaN,undefined,"");// returns [1, 2, "hi", true, NaN, undefined, ""]
x={a:1,b:2};
Array.of(x); //[{a: 1, b: 2}]
Array.of([]); //[[]]
Array.of([],[],[],{});// [[],[],[],{}]

//Array.prototype.concat()
const arr1=[1,2,3];
let arr2=['a','b','c'];
console.log(arr1.concat(arr2));// [1, 2, 3, "a", "b", "c"]
console.log([23,45,656].concat(["hi","hello"]));// [23, 45, 656, "hi", "hello"]

console.log([23,45,656].concat({a:1,b:2})); //[23, 45, 656, {a:1,b:2}]
console.log([23,45,656].concat([])); //[23, 45, 656]

console.log([23,45,656].concat(["hi","hello"],arr1,arr2));// [23, 45, 656, "hi", "hello", 1, 2, 3, "a", "b", "c"]

//Array.prototype.copyWithin()
arr1.push(5,6);
console.log(arr1)// [1, 2, 3, 5, 6]
arr1.copyWithin(1,2,5);// [1, 3, 5, 6, 6]
arr1.copyWithin(1,1);// [1, 3, 5, 6, 6]
arr1.copyWithin(1,0);// [1, 1, 3, 5, 6]
arr1.copyWithin(1,-1);// [1, 6, 3, 5, 6]
arr1.copyWithin(1);// [1, 1, 6, 3, 5] -->start index not provided, so copied from index 0

//Array.prototype.entries()
var arr3=["a","b","c"];
var iterator=arr3.entries();
for(let i of iterator){
    console.log(i);
}
/** returns
 *  [0, "a"]
    [1, "b"]
    [2, "c"]
 */

var itr1=arr3.entries();

console.log(itr1.next().value);// [0, "a"]
console.log(itr1.next().value);// [1, "b"]
console.log(itr1.next().value);// [2, "c"]
console.log(itr1.next().value);// returns undefined

//Array.prototype.every()
function checkArr(element,index,array){
    return Number.isFinite(element);
}
var checkResult=arr1.every(checkArr);// -->will return a boolean value
console.log(checkResult);// true 

function checkArr(ele,ind,arr){
    return (ele<1);
}
var checkResult1=arr1.every(checkArr);
console.log(checkResult1);// false

//Array.prototype.fill()
console.log(arr1);// [1, 1, 6, 3, 5]
arr1.fill("hi",1,3);// [1, "hi", "hi", 3, 5]
console.log(arr1);// [1, "hi", "hi", 3, 5]
 
//Array.prototype.filter()
var intArr=arr1.filter(element=>Number.isInteger(element));
   
console.log(intArr);// [1, 3, 5]

//Array.prototype.find()
arr1.push(1,3,6);
console.log(arr1);// [1, "hi", "hi", 3, 5, 1, 3, 6]
var f=arr1.find(element=>element===1);
console.log(f);//returns 1

//Array.prototype.findIndex()
console.log(arr1);// [1, "hi", "hi", 3, 5, 1, 3, 6]
arr1.pop();//pops 6 from arr1
console.log(arr1);//[1, "hi", "hi", 3, 5, 1, 3]
var ind=arr1.findIndex(element=>element===5);
console.log(ind);// 4 --> index of 5
var ind=arr1.findIndex(element=>element===6);
console.log(ind);//returns -1 ==>if element not found

//Array.prototype.flat()
var toFlat=[1,2,[3,4]];
var flatted=toFlat.flat();
console.log(flatted);// [1, 2, 3, 4]
toFlat=[1,2,3,[8,9,0,["hi",["hello",["welcome","Home"],"Good day"],"greet"],7,],[9,7,9]];
flatted=toFlat.flat(2);// [1, 2, 3, 8, 9, 0, "hi",["hello",["welcome","Home"],"Good day"], "greet", 7, 9, 7, 9]
flatted=toFlat.flat(3);// [1, 2, 3, 8, 9, 0, "hi", "hello",["welcome","Home"], "Good day", "greet", 7, 9, 7, 9]
flatted=toFlat.flat();//default value is 1--> [1, 2, 3, 8, 9, 0,["hi",["hello",["welcome","Home"],"Good day"],"greet"], 7, 9, 7, 9]
flatted=toFlat.flat(6);//[1, 2, 3, 8, 9, 0, "hi", "hello", "welcome", "Home", "Good day", "greet", 7, 9, 7, 9]
toFlat=[1,2, ,5,6];
flatted=toFlat.flat();// [1, 2, 5, 6] --> removes empty slot


//Array.prototype.flatMap()

toFlat=[[9],[3],[5],[6]];
flatted=toFlat.flatMap(element=>element*2);
console.log(flatted);// [18, 6, 10, 12]

//Array.prototype.forEach()
flatted.forEach(element=>console.log(element)); // returns elements of flatted arr

//Array.prototype.includes()
flatted.includes(10);//true
flatted.includes(10,2);//true
flatted.includes(10,4);//false

//Array.prototype.indexOf()
flatted.indexOf(10);//2
flatted.indexOf(10,1);//2
flatted.indexOf(10,3);//-1
flatted.indexOf(10,10);//-1

//Array.prototype.join()
var flattedString=flatted.join('');
console.log(flattedString);// "1861012"
flattedString=flatted.join('$');//"18$6$10$12"
flattedString=[].join('-');//"" --> returns empty string

//Array.prototype.keys()
const itr2=flatted.keys();
for (const key of itr2) {
    console.log(key);
  }
/** returns
 * 0
 * 1
 * 2
 * 3 
 */

//Array.prototype.lastIndexOf()
var j=[1,2,3,4,5,1];
console.log(j.lastIndexOf(1));// 5
j=[1,2,3,1,4,5];
console.log(j.lastIndexOf(1,2));// 0 --> since it searches backwards
console.log(j.lastIndexOf(1,-4));// 0 
console.log(j.lastIndexOf(1,-2));// 3
console.log(j.lastIndexOf(1,5));// 3

//Array.prototype.map()
var mapped=j.map(elements=>elements+6);
console.log(mapped);// [7, 8, 9, 7, 10, 11]

//Array.prototype.reduce()
var reducer=(accumulator,currentval)=>accumulator+currentval;
j.reduce(reducer);//16
reducer=(accumulator,currentval)=>Math.max(accumulator,currentval);
j.reduce(reducer);//5

//Array.prototype.reverse()
console.log(j); //[1, 2, 3, 1, 4, 5]
j.reverse();//[5, 4, 1, 3, 2, 1]

//Array.prototype.shift()
var firstElement=j.shift();
console.log(j);// [4, 1, 3, 2, 1]
console.log(firstElement);// 5

//Array.prototype.slice()
var slicedArr=j.slice(1,3);
console.log(slicedArr);// [1, 3]
slicedArr=j.slice(1,8);// [1, 3, 2, 1]
slicedArr=j.slice(1,-3);//[1]
slicedArr=j.slice(2);// [3, 2, 1]

//Array.prototype.some()
j.some(element=>element===2);//true

//Array.prototype.sort()

j.sort();// [1, 1, 2, 3, 4]
[80,8,9,6,7,1,23,34].sort();//[1, 23, 34, 6, 7, 8, 80, 9]
[80,8,9,6,7,1,23,34].sort((a,b)=>a-b);//[1, 6, 7, 8, 9, 23, 34, 80]

//Array.prototype.splice()
var colours=["red","blue","green"];
var splicedARR=colours.splice(1,0,"YELLOW");
console.log(colours);// (4) ["red", "YELLOW", "blue", "green"]
splicedARR=colours.splice(3,1,"YELLOW");
console.log(colours);// ["red", "YELLOW", "blue", "YELLOW"]
console.log(splicedARR);// ["green"]

//Array.prototype.toLocaleString()
var prices = [10, 530, 800123, 32]; 
prices.toLocaleString('en-IN', { style: 'currency', currency: 'INR' });//"₹10.00,₹530.00,₹8,00,123.00,₹32.00"

//Array.prototype.toString()
var x=["hi",1,2,45,"hello",null,undefined];
x.toString();//"hi,1,2,45,hello,,"
[null].toString();//""
[undefined].toString();//""

//Array.prototype.unShift()
x.unshift(1,2,null,undefined);
console.log(x);// [1, 2, null, undefined, "hi", 1, 2, 45, "hello", null, undefined]

//Array.prototype.values()
var iterator1=x.values();
for(let i of iterator2){
    console.log(i); //returns every values from tha array x
}

//Array.prototype[@@iterator]()
var i=[1,2,3,4];
var itr=i[Symbol.iterator]();
console.log(itr.next());// {value: 1, done: false}
console.log(itr.next().value);// 2
var arr=[1,2,3,4];
var iterator=arr[Symbol.iterator]();
for(let i of iterator){
    console.log(i);
}
/** returns
 * 1
 * 2
 * 3
 * 4
 */
var itr=arr.entries();
console.log(itr.next());// {value:[0,1], done: false}


var arr1=[1,2,3];
var arr2=['s','d','k'];
var arrCon=arr1.concat(arr2);
console.log(arrCon)// [1, 2, 3, "s", "d", "k"]
console.log(arr1)// [1, 2, 3]
console.log(arr2)// ["s", "d", "k"]
arr1.concat(arr2);// [1, 2, 3, "s", "d", "k"]
console.log(arr1);// [1, 2, 3]-->doesn't affect original array

var arr3=arr1.concat();
console.log(arr3);// (3) [1, 2, 3]
arr3=arr3.concat("hi","hello"); //[1, 2, 3, "hi", "hello"]

var arr=[1,2,3,4,5,0];
var arr2=arr.copyWithin(1,5);
console.log(arr2);// [1, 0, 3, 4, 5, 0]
console.log(arr);// [1, 0, 3, 4, 5, 0]
arr=[1,2,3,4,5,0];
arr2=arr.copyWithin(1,4);
console.log(arr2);// [1, 5, 0, 4, 5, 0]
console.log(arr);// [1, 5, 0, 4, 5, 0]

var arr=[1,2,3,4,5,6,0]
console.log(arr);// [1, 2, 3, 4, 6, 0]
var result=arr.entries();
for( let [index,element] of result){
    console.log("Element at index "+index+" is "+element);
    }
/** returns
 *   Element at index 0 is 1
     Element at index 1 is 2
     Element at index 2 is 3
     Element at index 3 is 4
     Element at index 4 is 6
     Element at index 5 is 0
 */

var arr=[1,2,3,4,5];
arr.fill();
console.log(arr);// [undefined, undefined, undefined, undefined, undefined]
arr.fill(0,0);// [0, 0, 0, 0, 0]
arr.fill(1,-1);
(5) [0, 0, 0, 0, 1]
console.log(arr);// [0, 0, 0, 0, 1]
var arr1=arr.fill("hi",1,3);
console.log(arr1);// [0, "hi", "hi", 0, 1]
console.log(arr);// [0, "hi", "hi", 0, 1] -->changes the original array
arr.fill({a:1,b:2},0,2);//[{a:1,b:2}, {a:1,b:2}, "hi", 0, 1]


var arr=[1,2,3,8,5,20];
var filtered=arr.filter(element=>element%2==0);
console.log(filtered);// [2, 8, 20]
console.log(arr);// [1, 2, 3, 8, 5, 20]-->doesn't mutate the original array

console.log(arr);// [1, 2, 3, 8, 5, 20]
var reduced=arr.reduce((acc,curr)=>{console.log('acc:'+acc+' curr:'+curr);
return acc+curr;});
/**
 * acc:1 curr:2
 acc:3 curr:3
 acc:6 curr:8
 acc:14 curr:5
 acc:19 curr:20
 */

console.log(reduced);// 39
reduced=arr.reduce((acc,curr)=>{console.log('acc:'+acc+' curr:'+curr);
return acc-curr;});
 /**
  * acc:1 curr:2
 acc:-1 curr:3
 acc:-4 curr:8
 acc:-12 curr:5
 acc:-17 curr:20 
  */
console.log(reduced)//-37
reduced=arr.reduce((acc,curr)=>{console.log('acc:'+acc+' curr:'+curr);
return acc*curr;});
 /** 
  * acc:1 curr:2
 acc:2 curr:3
 acc:6 curr:8
 acc:48 curr:5
 acc:240 curr:20
  */
console.log(reduced);//4800
reduced=arr.reduce((acc,curr)=>{console.log('acc:'+acc+' curr:'+curr);
return acc&&curr;});
 /**acc:1 curr:2
 acc:2 curr:3
 acc:3 curr:8
 acc:8 curr:5
 acc:5 curr:20 */
 console.log(reduced);//20
var reducedRight=arr.reduceRight((acc,curr)=>{console.log('acc:'+acc+' curr:'+curr);
return acc+curr;});
 /**acc:20 curr:5
 acc:25 curr:8
 acc:33 curr:3
 acc:36 curr:2
 acc:38 curr:1 */
console.log(reducedRight);// 39
