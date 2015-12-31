var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/20151231', function(req, res, next) {
  res.render('md/20151231', { title: 'Express' });
});

module.exports = router;
