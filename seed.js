var mongoose = require("mongoose"),
    Blogs = require("./models/Blog");




var data = [
  {
    title: "New features in es6",
    details: "Timply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged"
  },
  {
    title: "JavaScript Object Prototypes",
    details: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to"
  },
  {
    title: "Regular Expressions",
    details: "this is the first blog i will ever make in my life, this is so awesome i don't think i am gonna stop making its simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, also the leap into electronic typesetting, remaining essentially unchanged"
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
