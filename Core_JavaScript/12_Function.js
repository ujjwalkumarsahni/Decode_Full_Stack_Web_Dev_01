// simple function 
function hello(){
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
    console.log("Hello world!");
}
// function calling
// hello();
// hello();
// hello();


// add two number 
function add(a,b){
    console.log(a+b);  
}
// add(2,4);


// subtract two number 
function sub(a,b){
     return a - b; 
}
// let subtaction = sub(20,4);
// console.log(subtaction);



// facturial of a Number
function fact(num){
    if(num===0 || num===1){
        return 1;
    }
    f = 1;
    for(let i = 1;i<=num;i++){
        f = f * i;
    }
    return f;
}
let facturial = fact(5)
// console.log(facturial);



// store function in variable
const fun = function A(){
    console.log("My name is Ujjwal Kumar");
}
// fun();
// A() // A is not defined because function is store in variable. it means call only variable name ==> fun();



const sum_fun = function sum1(a,b){
    return a+b;
}
// console.log(sum_fun(10,5));


// This functon oprate any function
function oprate(a,b,fa){
    console.log(fa(a,b));
}
function sum2(a,b){
     return a+b;
}
// oprate(200,4,sum2)



// return function 
function return_fun(){
    return function(){
         console.log("hello");
    }
}
// return_fun()();


function func1(){
    console.log("Hello from outer")
    return  function (){
        console.log("Hello from inner")
        return function (){
            console.log("Hello from innermost")
        }
    }
}
// func1();
// func1()();
// func1()()();



// This is a sum function which can add any number of arguments
function sum5(){
    console.log(arguments)
    console.log("arguments length",arguments.length);
    let sum =0 
    for(i=0;i<arguments.length;i++){
     sum = sum + arguments[i]
    }
    return sum
 }
 
//  console.log(`sum :${sum5(5,6)}`);
//  console.log(`sum :${sum5(5,45,6,8,5)}`);
 


// store value in function
function func(){
    func=43
    console.log(func)
}
// func()
