var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nvc");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");



app.get("/", function(req, res){
	res.send("Hello World");
});



app.listen(3000, function(){
    console.log("The server has started.");
});