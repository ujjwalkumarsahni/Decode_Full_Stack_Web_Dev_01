const marks = 96;
let G;
if(marks>90){
    G = "A";
}
else if(marks>=70 && marks<=90){
    G = "B";
}
else if(marks>=50 && marks<=70){
    G = "C";
}
else{
    G = "Fail";
}
console.log("Your Grade is :",G); 

/* Output 
* Your Grade is : A
*/