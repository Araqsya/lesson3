var express = require("express");
var app = express();
app.get("/google", function(req, res){
    res.redirect("https://www.google.com/");
 });
 app.get("/search", function(req, res){
    res.redirect("https://www.google.com/search?q=search%20value");
 });
app.get("/", function(req, res){
   res.send("<h1>404<h1>");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

