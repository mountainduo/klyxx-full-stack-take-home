const inventoryService = require('../services/inventory.services.server');

module.exports = function (app) {

    // Get all the inventory
    app.get('/api/inventory', (req, res) =>
        res.json(inventoryService.getInventory()));

    // Get an item in the inventory by item id
    app.get('/api/inventory/:itemid', (req, res) =>
        res.json(inventoryService.getItemById(req.params['itemid'])));
};
