var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Afri Job Market' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.send('This is the baout page')
})

/* GET jobs page. */
router.get('/jobs', function(req, res, next) {
  res.send("Hello no jobs avilable")
})

module.exports = router;
