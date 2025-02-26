function sumAsync(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 1000);
}

// Usage example
sumAsync(5, 10, (result) => {
    console.log(`Sum: ${result}`);
});
