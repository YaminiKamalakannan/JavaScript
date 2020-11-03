var empName;         //Declaring a variable
empName = "Josh";    // Assigning a value to a variable

var empSalary = 15000 ;  // variable can be declared and assigned at the same time

const empId = 198542;    // const keyword doesn't allow us to reassign the value
var workHour = 8;
function empPost(post){
    let job_Posting = post;  // let--> it only has block scope
    let workHour = 7;   // Re-declaring the variable using let will not affect var declared outside the block
    console.log(job_Posting,workHour);
}

empPost("Intern");


/*The variable should be unique
  They are case sensitive
  Letters, Numbers, Underscore and $ symbol can be used to declare variable */
var $value = 74.3;  
var a = 1;
var A;    /* both variable has different value since variable names are case sensitive
            and when a  variable is left without assignment, it takes the value as 'Undifined'  */
A = a + 2; // we can do arithmetic operation using variables

var name = "Paul", age = 20, country = "India"; // Can declare multiple variables in a single line

