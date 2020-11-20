//Stack implementation 
class Stack{
    constructor(){
        this.data=[];
        this.count=0;
    }
    length(){
        return this.count;
    }
    push(element){
        if(element===undefined){
            return "Invalid data"
        }
        this.data[this.count]=element;
        this.count=this.count+1;
    }
    pop(){
        if(this.count==0){
            return "UnderFlow";
        }
        this.count--
        var poped=this.data[this.count];
        delete this.data[this.count];
        return poped;
    }
    peek(){
        if(this.count==0){
            return "Empty Stack";
        }
        return this.data[this.count-1];
    }
    printStack(){
        if(this.count==0){
            return "Empty Stack!"
        }
        var i=this.count-1;
        while(i>=0){
            console.log(this.data[i]);
            i--;
        }
    }
    isEmpty(){
        if(this.count<=0){
            return true;
        }
        return false;
    }
    reverseStack(){
        if(this.count==0){
            return "Empty Stack!"
        }
        var r=Array.from(this.data);
        for(let i of r){
            console.log(i);
        }
        // while(r.length>0){
        //     console.log(r.shift());
        // }
        // return r;
    }
    findIndex(element){
        var top=this.count-1;
        var flag=false;
        for(let i=1;i<=top;i++){
            if(this.data[i]===element){
                flag=true;
                return `${element} is present at position ${i}`;
            }
        }
        if(!flag){
            return "Element not found";
        }
    }
    search(position){
        var top=this.count-1;
        var flag=false;
        for(let i=1;i<=top;i++){
            if(position===i){
                flag=true;
                return this.data[i];
            }
        }
        if(!flag){
            return "Element not found";
        }
    }
}
var a=new Stack();
a.pop();//"UnderFlow"
a.peek();//"Empty Stack"
a.push();//"Invalid data"
a.push("1");
a.push('2');
a.printStack();
//  2
//  1
a.length();//2
a.isEmpty();//false
a.pop();//"2"
a.pop();//"1"
a.pop();//"UnderFlow"
a.isEmpty();//true
a.push("hi");
a.push("hello");
a.peek();//"hello"
a.printStack();
//  hello
//  hi
var b= new Stack();
b.push(1);
b.push(2);
b.push(3);
b.printStack();
//  3
//  2
//  1
undefined
b.reverseStack();
//  1
//  2
//  3
b.search(1);//2
b.search(90);//"Element not found"

//Call stack in js
function one(){
    console.log("inside one");
    two();
    console.log("end of one");
}
function two(){
    console.log("invoked two");
    inside2();
    console.log("end of two")
}
function inside2(){
    console.log("function inside two")
}
one();//returns
// inside one
// invoked two
// function inside two
// end of two
// end of one

function print(num){
   if(num>0){
    console.log("top "+num);
    print(num-1);
    console.log("bottom "+num)
   }
}
print(3);
// top 3
// top 2
// top 1
// bottom 1
// bottom 2
// bottom 3
