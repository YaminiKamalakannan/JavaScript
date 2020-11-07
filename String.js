// creating string using String()
var s="";
console.log(typeof s);// string

s=String("");//""
console.log(typeof s);//string

s=new String("");//String {""}
console.log(typeof s);// object

s=new String(6455);//String {"6455"}
s=new String(true);//String {"true"}
s=new String(10e456);//String {"Infinity"}
s=new String(10e45);//String {"1e+46"}
s=new String(0b11);//String {"3"}

// str.length--> returns length of string

s=new String("jvajbshc");//String {"jvajbshc"}
s.length//8
String(null).length;//4
String(undefined).length;//9
String(null).length;//4
String(undefined).length;//9
s=String(null);//"null"
s=String(undefined);//"undefined"
s=String([]);//""
s=String({});//"[object Object]"
console.log(s);// [object Object]
s.length;//15
s=String(0);//"0"

// String methods
//1)String.fromCharCode()
String.fromCharCode(65,98,135);//"Ab"
String.fromCharCode(null);//" "
String.fromCharCode(undefined);//" "
String.fromCharCode('sahbcj'); //" "

//2)String.fromCodePoint()
String.fromCodePoint(65,66,65);//"ABA"
String.fromCodePoint(65,66,65,66,55,56);//"ABAB78"
var x="";
String.fromCodePoint(x); //"𹍕"
String.fromCodePoint(null);//" "
//String.fromCodePoint(undefined);  //throws error

//3) String.prototype.charAt()
s="Welcome";//"Welcome"
s.charAt();//"W"
s.charAt(0);//"W"
s.charAt(null);//"W"
s.charAt(undefined);//"W"
s.charAt(true);//"e"
s.charAt(6);//"e"
s.charAt(76);//""

s="Welc\tom\ne";
s.charAt(4);//"  "
s.charAt(5);//"o"
s.charAt(7);//"\n"

//4)String.prototype.charCodeAt()
s="Morning";
s.charCodeAt(1);//111 --> ASCII of 'o'

//5)String.prototype.codePointAt()
s.codePointAt(1);//111

//6)String.prototype.concat()
var str1=new String("Good ");//
var str2=new String("Morning!");//
var con=str1.concat(str2);
console.log(con);// Good Morning!
typeof con//"string"

//7)String.prototype.endsWith()
s=String("Hello");
s.endsWith("0")//false
s.endsWith("o")//true
s.endsWith("k")//false
s.endsWith(null)//false
s.endsWith(undefined);//false

//8)String.prototype.includes()
str1=new String("Good Morning");
str2="Good";//"Good"
str1.includes(str2);//true
str2="Gufjhvj";
str1.includes(str2);//false
str2=null;
str1.includes(str2);//false

//9)String.prototype.indexOf()
s="dkjfdalkdd";
s.indexOf("d");// returns 0
s.indexOf("p");//-1
s.indexOf(null);//-1
s.indexOf(undefined);//-1
s.indexOf("a",5);// returns 5

//10)String.prototype.lastIndexOf()
s="Have a good day!";
s.lastIndexOf("good");//7
s.lastIndexOf("a");//13

//11)String.prototype.padEnd()
s="Welcome";
s.padEnd(10,".");// returns "Welcome..."

//12)String.prototype.padStart()
s=s.padStart(13,".");// returns "...Welcome..."

//13)String.prototype.repeat()
s="Repeat.."
s.repeat(5);// returns "Repeat..Repeat..Repeat..Repeat..Repeat.."
s.repeat("0");// returns""
s.repeat("kssdsdh");//""
s.repeat(true+1);//"Repeat..Repeat.."
s.repeat(null);//""
s.repeat(undefined);//""

//14)String.prototype.slice()
s=new String("Welcome");
s.slice(3);//"come"
s.slice(3,6);//"com"

//15)String .prototype.split()
s=new String("Welcome to India");
sp=s.split(" ",3);//returns  ["Welcome", "to", "India"]
s=new String("Welcome to India");
sp=s.split("e");// ["W", "lcom", " to India"]

//16)String.prototype.startsWith()
s.startsWith("Welcome");//true
s.startsWith("to",8);//true

//17)String.prototype.substring()
s.substring(7);// returns" to India"
s.substring(7,10);// returns " to"
s.substring(7,7);// returns ""
s.substring(10,7);//returns " to"

//18)String.prototype.toLowerCase()
s.toLowerCase();// returns "welcome to india"

//19)String.prototype.toString()
typeof s;//"object"
var stringPrimitive=s.toString();
typeof stringPrimitive;//"string"

//20)String.prototype.toUpperCase()
s.toUpperCase();// returns "WELCOME TO INDIA"

//21)String.prototype.trim()
s="  Welcomeee   ";// returns "  Welcomeee   "
s.trim();// returns "Welcomeee"

//22)String.prototype.trimEnd()
s.trimEnd();// returns "  Welcomeee"
s.trimRight();// returns "  Welcomeee"

//23)String.prototype.trimStart()
s.trimStart();//"Welcomeee   "
s.trimLeft();//"Welcomeee   "

//24)String.prototype.valueOf()
s=new String("Afternoon!");
var val=s.valueOf();
console.log(val);//returns  Afternoon!
typeof val;// returns "string"

//25)String.prototype[@@iterator]()
console.log(s);// returns String {"Afternoon!"}
var itr=s[Symbol.iterator]();
itr.next().value;// returns "A"
itr.next().value;//returns "f"

//26)String.raw()
String.raw`${s}`;// returns "Afternoon!"
String.raw`\n\tkjkandja\t`;//returns "\n\tkjkandja\t" 