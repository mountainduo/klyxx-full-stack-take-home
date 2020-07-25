
module.exports = function(app) {

    app.post('/api/checkout', (req, res) => res.json(req.body));
}
