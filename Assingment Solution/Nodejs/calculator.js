const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the CLI Calculator!");
console.log("Operations: add, subtract, multiply, divide");

rl.question("Enter first number: ", (num1) => {
    rl.question("Enter second number: ", (num2) => {
        rl.question("Enter operation (add, subtract, multiply, divide): ", (operation) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operation.toLowerCase()) {
                case "add":
                    result = a + b;
                    break;
                case "subtract":
                    result = a - b;
                    break;
                case "multiply":
                    result = a * b;
                    break;
                case "divide":
                    if (b === 0) {
                        console.log("Error: Cannot divide by zero!");
                        rl.close();
                        return;
                    }
                    result = a / b;
                    break;
                default:
                    console.log("Invalid operation! Please enter add, subtract, multiply, or divide.");
                    rl.close();
                    return;
            }

            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});
