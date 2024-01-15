fullname = "Ujjwal Kumar"
console.log(fullname);
x = null;
y = undefined;
// console.log(y);
isN = false;
console.log(isN);

// value change
// age = 50;
// console.log(age);
// age = 60;
// console.log(age);

// case sensitive
name = 'Kumar';
Name = "Ujjwal";
console.log(name);
console.log(Name);

/* space not allowed
full name = "ujjwalKumar";
console.log(full name); **/

// use this
full_name = "Ujjwal Kumar Sahni";
$full_name = "Tech";
console.log(full_name);
console.log($full_name);

/* Reservd word can not be variable name
for Example 
console = 100;
console.log(console); **/

/***  const, var, let  
 * var ==> variable can be re-declared  & updated. A globle scope variable  
 * let ==> variable can be re-declared  & but can be updated A block scope variable  
 * const ==> variable cannot be re-declared  & updated. A block scope variable ****/

// For Example
var a = 10;
var b = 20;
console.log(a+b);
b = 100;
console.log(a+b);

// For Example
let c = 100;
let d = 2020;
console.log(c+d);
d = 100;
console.log(a+d);

// For Example
const age = 20;
console.log(age);
// age = 26;
// console.log(age);//TypeError: Assignment to constant variable.

// some example
let n;
let q = null;
console.log(q);
let m = undefined;
console.log(m);


// both are diffrent
{
    let a = 1000;
    console.log(a);
}
{
    let a = 5;
    console.log(a);
}