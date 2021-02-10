var express = require("express")
var burgers = require('../models/burger.js')
var router = express.Router()


module.exports = function () {
    router.get("/api/all", function(req, res) {
        burgers.findAll({}).then(function (results) {
    res.json(results);
});
});

// add a burger:
router.post("/api/new", function(req, res) {
    burgers.create(['name', false], [req.body.name, req.body.false], function(result) {
        res.json({ id: result.insertId });
    });
});

}

