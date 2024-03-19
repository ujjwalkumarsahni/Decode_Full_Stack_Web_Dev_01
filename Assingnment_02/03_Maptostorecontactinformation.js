const contactMap = new Map();

contactMap.set('Ujjwal',{
    age:19,
    email:'ujjwalkumar0514@gmail.com',
    location:"xyz"
})
contactMap.set('prem',{
    age:21,
    email:'prem09210@gmail.com',
    location:"delhi"
})
contactMap.set('Dhiraj',{
    age:20,
    email:'dhiraj14@gmail.com',
    location:"bihar"
});

function getContact(name){
    return contactMap.get(name);
}

console.log(getContact('Ujjwal'));