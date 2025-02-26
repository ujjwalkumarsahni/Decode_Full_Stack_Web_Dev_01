let originalNumbers = [2, 5, 8, 10, 3];
let evenNumbers = [];

originalNumbers.forEach((value) => {
    if (value % 2 === 0) {
        evenNumbers.push(value);
    }
});

console.log(evenNumbers);
