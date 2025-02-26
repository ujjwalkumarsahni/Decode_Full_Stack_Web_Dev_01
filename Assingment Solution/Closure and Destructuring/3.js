function createCart() {
    let cart = [];

    return {
        addItem: function (item) {
            cart.push(item);
            console.log(`${item} added to cart.`);
        },
        getCartItems: function () {
            return cart.slice();
        }
    };
}

const myCart = createCart();

myCart.addItem("Laptop");
myCart.addItem("Headphones");

console.log("Cart Items:", myCart.getCartItems());

