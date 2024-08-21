const person1 = {name:'Ujjwal',age:19};
const person2 = {name:'Shashi',age:21};

function introduce(){
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old`);;
}

introduce.call(person2);