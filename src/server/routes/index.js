const express = require('express');
const pkg = require('./../../../package.json');

var router = express.Router();

router.get('/', function(req, res) {
  res.send('Hello from dashboard API. Version:' + pkg.version);
});

module.exports = router;
