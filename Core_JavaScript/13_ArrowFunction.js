// Simple function 
function add(a,b){
    return a+b;

}
// console.log(add(10,300));

// Arrow function 
const hello = () =>{
    console.log("Hello World")
}
// hello();


// function with arguments
let sum = (a,b) =>{
    return a+b;
}
// console.log(sum(100,200));


// function with multiple arguments and return
const sum1 = (a,b,c,d) =>{
    return a+b+c+d;
}
// console.log(sum1(10,20,30,40));



//Function with no returns
greet = (name ) =>{
    console.log("Hello "+name)
}
greet('Ujjwal Kumar')



// Single line : Arrow + Ternary operator
typ = (a) =>(a%2==0 )? "Even" : "Odd"  
console.log(typ(9))