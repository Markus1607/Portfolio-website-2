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
      res.send("this page does not exist buddy");
    }


    //first artice
    if (data.title === "New features in es6"){
      res.render("blogs/es6-features", {blog: data})
    }

    //second article
    if (data.title === "JavaScript Object Prototypes"){
      res.render("blogs/javaScript-prototypes", {blog: data})
    }

    res.render('show', {blog: data});
  })
})

router.get('/resources', function(req, res, next) {
  res.render('resources');
});



router.get("*", function(req, res){
  res.send("This page does not exit buddy");
})

module.exports = router;
