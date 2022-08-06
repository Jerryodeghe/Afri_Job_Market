var express = require('express');
var router = express.Router();

/* GET Application form page. */
router.get('/', function(req, res, next) {
  res.send("Apply for jobs here!")
})

module.exports = router;