let uniqueNumber = new Set([3,7,5,7,2,3,8]);

let numberSquareMap = new Map();

uniqueNumber.forEach(number =>{
    numberSquareMap.set(number, number*number);
});

console.log("Unique Number:");
console.log(Array.from(uniqueNumber).join(', '));

console.log("\nNumber - Square Map:");
numberSquareMap.forEach((square,number) =>{
    console.log(`${number} : ${square}`);
})