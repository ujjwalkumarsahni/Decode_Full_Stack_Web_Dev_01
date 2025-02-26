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
