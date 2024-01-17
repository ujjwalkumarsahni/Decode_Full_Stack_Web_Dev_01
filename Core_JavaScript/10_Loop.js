// for loop
for(let i = 1;i<=10;i++){
    console.log("Ujjwal Kumar");
}

//while loop
let  i = 1;
while(i<=10){
    console.log("Kumar");
    i++;
}

// do while loop
let j = 20;
do{
    console.log("Ujjwal Kumar");
    i++;
}while(i<=10);



// for-of loop
let str = "Ujjwal";
let size =0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);

// for-in loop
let student = {
    name1: "Ujjwal Kumar",
    roll: 154,
    subject: "JavaScript"
}
for(let key in student){
    console.log(key ,":" ,student[key] );
}
