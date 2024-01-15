/** JavaScript has 8 Datatypes
1. Number
2. String
3. Boolean
4. Undefined
5. Null
6. Symbol
7. Bigint
8. Object **/


// For Example ==> Number
let a =10;
let b = 20.6;
console.log(a,b);
console.log(typeof(a));//Number

// For Example ==> String
let color = "red";
let Name = "Ujjwal";
console.log(color, Name);

// For Example ==> Booleans
let x = true;
let y = false;
console.log(x);
let p = 10;
let q =10;
console.log(p==q);//true
{
    let p = 10;
    let q =12;
    console.log(p==q);//false
}

// For Example ==> Undefined
let some;
console.log(some);//Undefined
// let some2 = Undefined;


// For Example ==> Symbol
let demo = Symbol(10);
console.log(demo);
console.log(typeof demo); //Symbol

// For Example ==> Symbol
let demo2 = BigInt(1020);
console.log(demo2);
console.log(typeof(demo2));//BigInt


//For Example ==> Object:
const person =
 {
    firstName:"Ujjwal",
    lastName:"Kumar",
    age:20, 
    eyeColor:"red"
};
console.table(person)
console.log(person)


// some example 
let r = 10;
let str1 = "Team";
console.log(r+str1); //10Team

console.log(10+12+'Johan');//22Johan
console.log('Johan'+10+12);//Johan1012
console.log('Johan'+(10+12));//Johan22

