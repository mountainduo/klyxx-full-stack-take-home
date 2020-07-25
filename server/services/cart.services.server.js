const inventoryService = require('./inventory.services.server');

let cart = [];

getCart = () => cart;

// add an item to the cart
addItemById = (itemid, quantity = 1) => {
    // if cart already contains the item, increase quantity by 1.
    if (cart.some(item => item._id === itemid)) {
        let quantity = cart.filter(item => item._id === itemid)[0].quantity;
        this.editQuantityOfItem(itemid, quantity + 1)
    }
    else {
        let item = inventoryService.getItemById(itemid);
        item["quantity"] = quantity;
        cart.push(item);
    }
};

// remove an item from the cart
removeItemById = (itemid) => {
    cart = cart.filter((item) => item._id !== itemid);
};

// edit the quantity of an item in the cart
editQuantityOfItem = (itemid, newQuantity) => {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i]._id === itemid) {
            cart[i].quantity = newQuantity;
            break;
        }
    }
};

module.exports = {
    getCart,
    addItemById,
    removeItemById,
    editQuantityOfItem
};
