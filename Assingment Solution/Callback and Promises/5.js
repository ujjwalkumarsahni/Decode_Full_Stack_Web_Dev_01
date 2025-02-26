function multiplyWithCallback(numbers, callback) {
    const result = numbers.map(num => num * 2);
    callback(result);
}

// Usage example
multiplyWithCallback([1, 2, 3, 4, 5], (modifiedArray) => {
    console.log("Modified Array:", modifiedArray);
});
