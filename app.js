//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const title_input = [ ];
const post_input = [ ];
const title_input_lower = [ ];
const post = [ ];
const post_full = [ ];
var read_more = "";
// Load the full build.
const _ = require('lodash');
// Load the core build.


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home",{HOMESTARTINGCONTENT:homeStartingContent,TITLECONTENT:title_input ,POSTCONTENT:post_input ,POSTCONTENT1:post_full ,Read:read_more});
})

app.get("/about",function(req,res){
  res.render("about",{ABOUTSTARTINGCONTENT:aboutContent});
})

app.get("/contact",function(req,res){
  res.render("contact",{CONTACTSTARTINGCONTENT:contactContent});
})

app.get("/Compose",function(req,res){
  res.render("compose");
})

app.get("/posts/:name",function(req,res){
  var name_input_upper = req.params.name;
  var name_input = _.lowerCase(req.params.name) ;

  for(var i=0;i<title_input.length;i++)
  {
    title_input_lower[i] =_.lowerCase([title_input[i]]);
  if(name_input === title_input_lower[i])
  {
  res.render("post",{post_title_input:title_input[i],post_content_input:post_full[i]});
}
}
})

app.post("/Compose",function(req,res){
  var title = req.body.input_title;
  title_input.push(title);

  var post = req.body.input_post;
  var truncate_post = post.substring(0,101);
  post_input.push(truncate_post + "...");
  post_full.push(post);
  read_more = "Read more";
})

// app.post("/posts/:name",function(req,res){
//   var name_input = req.params.name;
//
// })












app.listen(3000, function() {
  console.log("Server started on port 3000");
});
