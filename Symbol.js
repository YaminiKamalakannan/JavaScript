const id=Symbol("id");
var obj={
    name:"Josh",
    [id]:12345
};

console.log(obj.name); // returns "josh"
console.log(obj.id);  //returns undefined
console.log(obj[id]);  //returns value of id

for (let key in obj){
    console.log(key);   // Skips to return symbol id
}

console.log(Object.keys(obj));  //returns only name --> the symbol id remains hidden

console.log(obj);  //returns both name and id




