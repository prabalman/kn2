const express = require('express')
let app = express.Router()
app.get('/', function (req, res) {
    res.send('New User Registration Page');
});
module.exports = app