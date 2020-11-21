var input= [
    {personA: 'A', garbage: 'asldkfj'},
    {personB: 'B', garbage: 'asldkfj'},
    {personC: 'C', garbage: 'asldkfj'},
    {personD: 'D', garbage: 'asldkfj'},
    {personE: 'E', garbage: 'asldkfj'},
    {personF: 'F', garbage: 'asldkfj'},
    {personG: 'G', garbage: 'asldkfj'}
  ];

input.forEach((element)=>{delete element.garbage;return element});
var first=input.shift();
var output={};
undefined
for(let i=0;i<input.length;i++){
output=Object.assign(first,input[i]);
}
console.log(output); //return expected output
// {
//     personA: 'A',
//     personB: 'B',
//     personC: 'C',
//     personD: 'D', 
//     personE: 'E',
//     personF: 'F',
//     personG: 'G'
//   }