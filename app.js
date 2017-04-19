// NPM Packages
var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	expressSanitizer = require("express-sanitizer"),
	request = require("request"),
	curl = require("curl"),
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
			if(req.xhr){
				console.log("In xhr");
				request("https://od-api.oxforddictionaries.com:443/api/v1/entries/en/squirrel/definitions", function(error, response, body){
					if(error){
					      console.log(error);
					  }
					  else{
					      console.log("in else outside of if");
					      if(response.statusCode == 200){
					         var parsedData = JSON.parse(body);
					         console.log(req.body.data);
					         console.log(parsedData["results"]["lexicalEntries"]["senses"]["definitions"]);
					         console.log("here");
					      }
					  }
					});
			}
			else{
				console.log("In else");
				res.render("index", {feelings: feelings});
			}
		}
	});
});

app.get("/test", function(req, res){
	res.render("testForm");
});

app.get("/return", function(req, res){
    var word = req.query.word;
    var url = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/" + word + "/definitions";

	// curl.getJSON();

    // request(url, function(error, response, body){
    //   if(!error && response.statusCode == 200){
  		// console.log("HERE");
    // 	var data = JSON.parse(body);
    // 	res.render("testResults");
    //   } 
    // });
});

// curl.getJSON(url, options, function(err, response, data){});

// curl -X GET --header "Accept: application/json" --header "app_id: 27cbefc7" --header "app_key: 28e729879e8883e9f98656fc88430520" 
// "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/ace"

// Listener
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The server has started.");
});