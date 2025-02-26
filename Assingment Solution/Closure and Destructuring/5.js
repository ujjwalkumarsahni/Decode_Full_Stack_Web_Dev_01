function createCart() {
    let cart = [];

    return {
        addItem: function (productId, name, quantity, price) {
            let existingItem = cart.find(item => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += quantity;
                console.log(`${name} quantity updated to ${existingItem.quantity}.`);
            } else {
                cart.push({ productId, name, quantity, price });
                console.log(`${name} added to cart.`);
            }
        },
        removeItem: function (productId) {
            let index = cart.findIndex(item => item.productId === productId);
            
            if (index !== -1) {
                console.log(`${cart[index].name} removed from cart.`);
                cart.splice(index, 1);
            } else {
                console.log(`Item with productId ${productId} not found in cart.`);
            }
        },
        getCartItems: function () {
            return cart.slice();
        }
    };
}

const myCart = createCart();

myCart.addItem(1, "Laptop", 1, 1200);
myCart.addItem(2, "Headphones", 1, 200);
myCart.addItem(1, "Laptop", 2, 1200); // Should increase Laptop quantity

console.log("Cart Items:", myCart.getCartItems());

myCart.removeItem(1); // Removes Laptop
console.log("Cart Items after removal:", myCart.getCartItems());
