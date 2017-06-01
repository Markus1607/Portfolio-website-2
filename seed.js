var mongoose = require("mongoose"),
    Blogs = require("./models/Blog");




var data = [
  {
    title: "This is the first blog",
    details: "this is the first blog i will ever make in my life, this is so awesome i don't think i am gonna stop making it"
  },
  {
    title: "This is the first blog",
    details: "this is the first blog i will ever make in my life, this is so awesome i don't think i am gonna stop making it"
  },
  {
    title: "This is the first blog",
    details: "this is the first blog i will ever make in my life, this is so awesome i don't think i am gonna stop making it"
  },
  {
    title: "This is the first blog",
    details: "this is the first blog i will ever make in my life, this is so awesome i don't think i am gonna stop making it"
  }
];


function seedDB(){
  Blogs.remove({}, function(err){
    if(err){
      console.log(err)
    }
    console.log("All blogs removed");
      data.forEach(function(seed){
        Blogs.create(seed, function(err, data){
          if(err){
            console.log(err)
          }else{
            console.log("Added all Blogs");
            data.save();
          }
        })
     });

    })

}


module.exports = seedDB;
