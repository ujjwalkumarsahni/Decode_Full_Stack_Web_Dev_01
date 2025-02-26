function login(username, password) {
    try {
        if (!username) {
            throw new Error("Username is required.");
        }
        if (!password) {
            throw new Error("Password is required.");
        }

        const validUser = { username: "user123", password: "securePass" };

        if (username !== validUser.username || password !== validUser.password) {
            throw new Error("Invalid username or password.");
        }

        console.log("Login successful!");
    } catch (error) {
        console.error("Login Error:", error.message);
    }
}

login("", "securePass");
login("user123", ""); 
login("user123", "wrongPass"); 
login("user123", "securePass"); 


let cart = [];

function addToCart(name, price, quantity) {
    try {
        if (!name) {
            throw new Error("Product name is required.");
        }
        if (typeof price !== "number" || price <= 0) {
            throw new Error("Invalid product price.");
        }
        if (!Number.isInteger(quantity) || quantity <= 0) {
            throw new Error("Invalid quantity.");
        }

        // Add the product to the cart
        cart.push({ name, price, quantity });
        console.log(`Added ${quantity} x ${name} to cart.`);
    } catch (error) {
        console.error("Cart Error:", error.message);
    }
}

// Usage examples
addToCart("", 10, 2); // Product name is required.
addToCart("Laptop", -1000, 1); // Invalid product price.
addToCart("Laptop", 1000, 0); // Invalid quantity.
addToCart("Laptop", 1000, 1); // Added 1 x Laptop to cart.
