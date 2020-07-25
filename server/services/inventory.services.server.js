let inventory = require('./inventory');

// get all items in inventory
getInventory = () => inventory;

// get an inventory item by id
getItemById = (itemid) => inventory.find(item => item._id === itemid);

module.exports = {
    getInventory,
    getItemById
};
