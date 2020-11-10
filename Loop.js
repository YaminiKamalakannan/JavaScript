// While loop
let n = 0;
let x = 0;
while (n < 3) {   
  n++;           //code will be executed until the condition becomes false
  x += n;
}
console.log(x);  // Returns 6


//Do while--> statement in do block is executed first and condition in while is evaluated
var i=0
do{
    i++;
    console.log("iteration "+i);
}
while(i<4)  

// for loop
var num=0
for(let i=1;i<=5;i++){
    num=num+i;
}
console.log(num);


var k=0;  //initialization
for(;k<4;){    //condition
    console.log(k);
    k++;   //increment
}

var j=0;  //initialization
for(;j<4;j++){    //condition and increment
    console.log(j); 
}

var obj={
    name:"Raj",
    place:"Chennai",
    id:12354
};
// for in
for(let i in obj){    // iterates through properties of obj
    console.log(obj[i]);
}

//for of
var arr=[23,45,56];
for(var value of arr){
    console.log(value);
} // returns arr elements

for(let i in arr){
    console.log(i);
}// returns arr index

