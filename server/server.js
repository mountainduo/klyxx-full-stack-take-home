// Put your server side JS here ... or don't you can add your own file if you'd like

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow CORS from different origin, namely localhost:3000
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/checkout.controller.server')(app);
require('./controllers/inventory.controller.server')(app);
require('./controllers/cart.controller.server')(app);

app.listen(process.env.PORT || 8080);

