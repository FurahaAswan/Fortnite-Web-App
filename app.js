var express 	= require("express"),
	app 		= express(),
	request 	= require("request");
	bodyParser 	= require('body-parser');

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));

var apiKey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};

app.get("/", function(req,res){
	var url = "https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get";
	var options = {
		headers: apiKey,
		url: url,
		form: {"language": "en"}
	}
	request.post(options, function(error, response, body){
		if(!error){
			res.render("index", {data: JSON.parse(body)});
		}
		else{
			res.send("error");
		}
	})
});

app.post("/stats", function(req,res){
	console.log(req.body.username);
	var url = "https://fortnite-public-api.theapinetwork.com/prod09/users/id";
	var user = {"username": req.body.username};
	var options = {
		headers: apiKey,
		url: url,
		form: user
	}
	// request.post(options, function(error, response, body){
	// 	console.log(JSON.parse(body));
	// 	if (typeof body !== 'undefined') {
 // 		 	data = JSON.parse(body);
 // 		 	data.preference = req.body.platform;
 		 	res.render("stats");
// 		} else{
// 			res.send("undefined");
// 		}
// 	});
});

app.listen(8000, function(){
	console.log("the app is running");
});