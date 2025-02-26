function processPayment(amount, cardNumber, expirationDate) {
    try {
        if (typeof amount !== "number" || amount <= 0) {
            throw new Error("Invalid payment amount.");
        }

        if (!/^\d{16}$/.test(cardNumber)) {
            throw new Error("Invalid card number.");
        }

        const currentDate = new Date();
        const [month, year] = expirationDate.split("/").map(Number);
        const expiryDate = new Date(`20${year}`, month - 1);

        if (!expirationDate || expiryDate < currentDate) {
            throw new Error("Invalid expiration date.");
        }

        console.log("Payment processed successfully!");
    } catch (error) {
        console.error("Payment Error:", error.message);
    }
}

processPayment(-100, "1234567812345678", "12/25"); 
processPayment(500, "12345678", "12/25");         
processPayment(500, "1234567812345678", "01/22"); 
processPayment(500, "1234567812345678", "12/30"); 
