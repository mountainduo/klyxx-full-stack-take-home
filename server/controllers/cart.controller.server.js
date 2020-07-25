const cartService = require('../services/cart.services.server');

module.exports = function(app) {
    // get contents of cart
    app.get('/api/cart', (req, res) => res.json(cartService.getCart()));
    // add item to cart
    app.post('/api/cart/:itemid', (req, res) => res.json(cartService.addItemById(req.params['itemid'])));
    // remove item from cart
    app.delete('/api/cart/:itemid', (req, res) => res.json(cartService.removeItemById(req.params['itemid'])));
    // update (quantity of) item in cart
    app.put('/api/cart/:itemid', (req, res) => res.send(cartService.editQuantityOfItem(req.params['itemid'], req.body.quantity)))
}
