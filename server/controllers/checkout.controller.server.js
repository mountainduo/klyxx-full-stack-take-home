const checkoutService = require('../services/checkout.services.server');

module.exports = function(app) {
    // Get checkout information
    app.get('/api/checkout', (req, res) => res.json(checkoutService.getCheckoutInfo()));
    // Submit the checkout
    app.post('/api/checkout', (req, res) => res.json(checkoutService.submitCheckout(req.body)));
};
