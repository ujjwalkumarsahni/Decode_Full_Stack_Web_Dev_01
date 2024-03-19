const person = {
    name: "Ujjwal",
    roll: 154,
}
// console.log(typeof person);
// console.log(person);

const user = {
    1: "Ujjwal",
    2: "Kumar",
    3: "Ukumar"
}
// console.log(user);
// console.log();

const student = {
    fullname: "Ujjwal Kumar",
    rollNo: 159,
    great: function(){
        console.log("Welcome to javascript");
    }

}
// console.log(student);


// 2nd way of creating the Object
const obj = Object()
console.log(obj);


// 3rd way of creating the Object
function emp(id,name,salry){
    this.id =id,
    this.name = name,
    this.salry = salry
}
const my_obj = new emp(1,'Ujjwal',100000);
console.log(my_obj);