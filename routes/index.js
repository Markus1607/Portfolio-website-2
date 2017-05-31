var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// //Get projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', {title : "Express"});
});

// //Get blog page
router.get('/blog', function(req, res, next) {
  res.render('blog');
});



module.exports = router;
