var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: process.env.T_HOST_NAME, header: req.headers, env: process.env });
});

module.exports = router;