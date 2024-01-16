/** Types of Operators

1) Arithmetic Operators
2) Unary Operators
3) Assignment Operators
4) Comparison Operators
5) Logical Operators
6) Bitwise Operators  **/

// Arithmetic Operators
let a = 10;
let b = 20;
console.log("a + b = ",(a+b));
console.log("a - b = ",(a-b));
console.log("a * b = ",(a*b));
console.log("a / b = ",(a/b));
console.log("a % b = ",(a%b));

// Unary Operators
let p = 5;

console.log(++p);//P = 6
console.log(p++);// p = 6
console.log(--p);// p = 6
console.log(p--);// p = 6
console.log(p);// p = 5

// Assignment Operators
let q = 10;
q += 5 //q = q + 5
q -= 5 //q = q - 5 
q **= 5 //q = q ** 5  
q *= 5 //q = q * 5 
q /= 5 //q = q / 5
console.log(q);

/* Comparison Operators
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to */

let r = 20
let s = 20;
console.log(r==s);//true

let k = "4"
console.log(r===k);//false
console.log(r!=s);//false
console.log(r!==k);//true

// Logical Operators
let x=4;
let y=4;
console.log(x>=y && x==y);
let m=4;
let n=5;
console.log(m>=n || m==n);
 
// Bitwise Operators
console.log(5 & 3);
console.log(5 | 3);
console.log(~5);
