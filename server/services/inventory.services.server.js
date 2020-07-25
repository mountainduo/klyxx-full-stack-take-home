let inventory = require('./inventory');

getInventory = () => inventory;

getItemById = (itemid) => inventory.find(item => item._id === itemid);

module.exports = {
    getInventory,
    getItemById
};
