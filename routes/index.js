var express = require('express');
var router = express.Router();
var Blogs = require("../models/Blog");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// //Get projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', {title : "Express"});
});

// //Get index page
router.get('/blog', function(req, res, next) {
  Blogs.find({}, function(err, allBlogs){
    if(err){
      console.log(err);
    }
    else {
      res.render('blog', {blogs: allBlogs});
    }
  })

});


//blog details page
router.get("/blogs/:id", function(req, res, next){
  var id = req.params.id;

  Blogs.findById(id, function(err, data){
    if(err){
      res.render("error");
    }
    else {
      res.render('show', {blog: data});
    }
  })
})

router.get('/contact', function(req, res, next) {
  res.render('contact');
});



module.exports = router;
