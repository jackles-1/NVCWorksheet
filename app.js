// NPM Packages
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	expressSanitizer = require("express-sanitizer"),
	request = require("request"),
// Models
	Feeling = require("./models/feeling"),
	seedDB = require("./seeds");

mongoose.connect("mongodb://localhost/nvc");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.use(expressSanitizer());

app.set("view engine", "ejs");

seedDB();


// ROUTES

app.get("/", function(req, res){
	Feeling.find({}, function(err, feelings){
		if(err){
			console.log("Error in root route.");
		}	
		else{
			res.render("index", {feelings: feelings});
		}
	});
});

// Listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});