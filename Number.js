var x= Number(); //creating number using primitive wrapper object
console.log(x);  //returns 0

x=Number(true); //x=1
x=Number(""); //x=0
x=Number(null); //x=0
x=Number(undefined); //x=NaN;
x=Number("Hi"); //x=NaN
x=Number("true"); //x=NaN
x=Number("123"); //x=123

//Number Methods
// 1)Number.isFinite()
console.log(Number.isFinite(1 / 0)); //returns false
console.log(Number.isFinite(0)); //returns true
console.log(Number.isFinite("")); //returns false
console.log(Number.isFinite(true)); //returns false
console.log(Number.isFinite(10n)); //returns false
console.log(Number.isFinite(null)); //returns false

x=Number("");  //converts "" to 0
console.log(typeof x); //number
console.log(Number.isFinite(x)); //returns true

x=Number(10n); //typeof x is number
console.log(x) //returns 10
console.log(Number.isFinite(x)); //returns true

x=Number(-5/0); //x= -Infinity
console.log(Number.isFinite(x)); //returns false

x=Number(null); //x=0
console.log(Number.isFinite(x)); //returns true

x=Number(undefined); //x=NaN
console.log(Number.isFinite(x)); //returns false

x=Number("10e100"); //x=1e101; typeof x- number
console.log(Number.isFinite(x)); //returns true

console.log(Number.isFinite(Number("10e100"))); //returns true

// 2)Number.isInteger()

x=0;
console.log(Number.isInteger(x)); //returns true
x=true;
console.log(Number.isInteger(x)); //false
console.log(Number.isInteger(null)); //returns false
console.log(Number.isInteger("")); //returns false
console.log(Number.isInteger("1")); //returns false
console.log(Number.isInteger(10n)); //returns false
console.log(Number.isInteger(10e100)); //true

//3) Number.isNaN()
console.log(Number.isNaN(10e100));//false
console.log(Number.isNaN(NaN));// true
console.log(Number.isNaN("hi"));//false
console.log(Number.isNaN("1"));//false
console.log(Number.isNaN(true));//false
console.log(Number.isNaN(undefined));// false
console.log(Number.isNaN(Number.NaN)); //true
console.log(Number.isNaN(0/0)); //true
console.log(Number.isNaN(9/"hi")); //true

//4) Number.isSafeInteger() 
console.log(Number.isSafeInteger("1")); // false
console.log(Number.isSafeInteger(3.5)); //false
console.log(Number.isSafeInteger(7));//true
console.log(Number.isSafeInteger(9/"hi")); //false
console.log(Number.isSafeInteger(8.0)); //true

//5) Number.parseFloat()
Number.parseFloat("897undkjy898"); //returns 897
Number.parseFloat("welcome"); //returns NaN
Number.parseFloat("welcome123464"); //returns NaN
Number.parseFloat(true);//NaN
Number.parseFloat(null);//NaN
Number.parseFloat(undefined);//NaN
Number.parseFloat("");//NaN
Number.parseFloat("9.8");//9.8

//6) Number.parseInt()

Number.parseInt("1098.87"); //returns 1098
console.log(Number.parseInt("4d0",16));// 1232
console.log(Number.parseInt("a",16));// 10
console.log(Number.parseInt("a",8));// NaN
console.log(Number.parseInt("1001",8));// 513
console.log(Number.parseInt("11",2));//3
console.log(Number.parseInt("11"));// 11
console.log(Number.parseInt("11",10));// 11
console.log(Number.parseInt("11",8));// 9
console.log(Number.parseInt("11",16)); //17

//7) Number.prototype.toExponential()
x=Number(23265846);
x.toExponential(2);//"2.33e+7"
x.toExponential(5);//"2.32658e+7"
x=Number(2);
x.toExponential(5);//"2.00000e+0"
x=Number(null);//0
x.toExponential(4);//"0.0000e+0"
x=Number("true");//NaN
x.toExponential(4);//"NaN"
x=Number(true);//1
x.toExponential(4);//"1.0000e+0"
x=Number('');
x.toExponential(0);//"0e+0"
x.toExponential(2);//"0.00e+0"
x=Number(10n);;//10
x=Number(654651651651);//654651651651
x.toExponential(0);//"7e+11"
x=Number("12345");
x.toExponential(2);//"1.23e+4"
x.toExponential(10);//"1.2345000000e+4"
x.toExponential(null);//"1e+4"
x.toExponential(undefined);//"1.2345e+4"
x.toExponential(undefined);//"1.2345e+4"

//8) Number.prototype.toFixed()
x=Number("12863.9827");
x.toFixed(2);//"12863.98"
x.toFixed(null);//"12864"
x.toFixed(true);//"12864.0"
x.toFixed(false);//"12864"
x=Number("12863.1827");//12863.1827
x.toFixed(false);//"12863"
x.toFixed(true);//"12863.2"
x.toFixed(undefined);//"12863"

//9)Number.prototype.toLocaleString

//10)Number.prototype.toPrecision
Number("Hi").toPrecision(4);//"NaN"
Number("0").toPrecision(4);//"0.000"
Number("654.6664").toPrecision(4);//"654.7"
Number("65464e+35").toPrecision(4);//"6.546e+39"
Number("65464e+35").toPrecision(-1); // throws RangeError -->the range must be 1 to 100
Number("0.000050008").toPrecision(4);//"0.00005001"
Number("0.000060080009").toPrecision(3);//"0.0000601"
Number("0.0000600890009").toPrecision(4);//"0.00006009"
Number("0.00006000000").toPrecision(4);//"0.00006000"
Number("0.00006000000").toPrecision(4);//"0.00006000"

//11) Number.prototype.toString
Number(1010).toString();//"1010"
Number(1010).toString(2);//"1111110010"
Number(10).toString(2);//"1010"
Number(7).toString(2);//"111"
Number(7).toString(5);//"12"
Number(7).toString(8);//"7"
Number(13).toString(2);//"1101"
Number(13).toString(3);//"111"
Number(13).toString(3);//"111"
Number(13).toString(8);//"15"
Number(13).toString(16);//"d"
Number('').toString(10);//0
Number(null).toString(16);//"0"
Number(undefined).toString(16);//"NaN"
Number(undefined).toString();//"NaN"
Number(true).toString();//"1"
Number(2e+5).toString(2);//"110000110101000000"

//12) Number.prototype.toValue
x=new Number("156651");
typeof x; //returns "object"
var y=x.valueOf(); //y=156651
typeof y;// returns "number"







