function displayinfo(name,role){
    console.log(`Name : ${name}, Role : ${role}`)
}
displayinfo.call(null,"Ujjwal","Developer");

displayinfo.apply(null,["Dhiraj","Developer"]);

function greet() {
    console.log(`Hello, ${this.name}`);
}

const user = {name:"UK"};
const boundGreet = greet.bind(user);
boundGreet();