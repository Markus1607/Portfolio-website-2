var mongoose = require("mongoose");

var   blogSchema =  new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  },
  title: String,
  details: String
});


module.exports =  mongoose.model("Blogs", blogSchema);
