// NPM Packages
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	expressSanitizer = require("express-sanitizer"),
	request = require("request"),
	Dictionary = require("oxford-dictionary-api"),
// Models
	Feeling = require("./models/feeling"),
	seedDB = require("./seeds");
	
var qs = require("querystring"),
	oauth = {
		app_id: "27cbefc7",
		app_key: "28e729879e8883e9f98656fc88430520"
	};

mongoose.connect("mongodb://localhost/nvc");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + "/public"));

app.use(expressSanitizer());

app.set("view engine", "ejs");

var app_id = "27cbefc7";
var app_key = "28e729879e8883e9f98656fc88430520";
var dict = new Dictionary(app_id, app_key);

seedDB();


// ROUTES

app.get("/", function(req, res){
	Feeling.find({}, function(err, feelings){
		if(err){
			console.log("Error in root route.");
		}	
		else{
			if(req.xhr){
				var word = req.body.word;
				console.log("word: " + word);
				dict.find(word, function(err, data){
			    	console.log("Inside dict.find");
			    	if(err){
			    		console.log("err: " + err);
			    	}	
			    	else{
						res.json();
					}
			    });
			}
			else{
				res.render("index", {feelings: feelings});	
			}
		}
	});
});

app.get("/test", function(req, res){
	res.render("testForm");
});

app.get("/results", function(req, res){
    var word = req.query.word;
    var url = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + word + "/definitions";
    
    dict.find(word, function(err, data){
    	console.log(word);
    	if(err){
    		console.log("err: " + err);
    	}	
    	else{
			res.render("testResults", {data: data});
		}
    });
    
    
    
    
   // request.post({url:url, oauth:oauth}, function (e, r, body) {
   // // ready to make signed requests on behalf of the user 
   // var perm_data = qs.parse(body)
   //   , oauth =
   //     {		
   //     	app_id: "27cbefc7",
			// app_key: "28e729879e8883e9f98656fc88430520"
   //     }
   //   , url = 'https://api.twitter.com/1.1/users/show.json'
   //   , qs =
   //     { screen_name: perm_data.screen_name
   //     , user_id: perm_data.user_id
   //     }
   // });
    
   // request.get({url:url, oauth:oauth, qs:qs, json:true}, function(e, r, response){
   // 	console.log(response);	
   // });
    
    // request(url, function(error, response, body){
    // 	if(!error && response.statusCode == 200){
	  	// 	console.log("HERE");
	   // 	var data = JSON.parse(body);
	   // 	res.render("testResults");		
    // 	}
    //});

});

// Listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});