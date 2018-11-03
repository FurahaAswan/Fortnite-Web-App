var express = require("express");
var router  = express.Router();
var keys = require("../config/keys");
var request = require("request");

var apiKey = {'Authorization': "2e04211c18b48a93110d5ff1f0b06f90"};



global.leaderboards = {wins: [], kills: [], score: []};

function compiler(input){
    var options = {
        headers: apiKey,
        url: "https://fortnite-public-api.theapinetwork.com/prod09/leaderboards/get",
        form: {"window": "top_10_"+input}
    }
    request.post(options, function(error, response, body){
        var stats = JSON.parse(body);
        for(i =0; i<3; i++){
            var values = {
                username: stats["entries"][i]["username"],
                kills: stats["entries"][i]["kills"],
                rank: stats["entries"][i]["rank"],
                platform: stats["entries"][i]["platform"],
                wins: stats["entries"][i]["wins"],
                kd: stats["entries"][i]["kd"],
                score: stats["entries"][i]["score"]
            }
            if(input == "wins"){
                leaderboards.wins.push({name: input+[i], data: values});
            } else if(input == "kills"){
                leaderboards.kills.push({name: input+[i], data: values});
            } if(input == "score"){
                leaderboards.score.push({name: input+[i], data: values});
            }
        }
    });
}
compiler("score");
compiler("wins");
compiler("kills");
setInterval(function(){
    leaderboards.kills = [];
    leaderboards.wins = [];
    leaderboards.score = [];
    compiler("score");
    compiler("wins");
    compiler("kills");
    console.log(Date.now());
}, 1800000);

router.get("/stats", function(req,res){
    res.send(leaderboards);
})

router.get("/", function(req,res){
	res.render("./main/index", {user: req.user});
});

router.get("/news", function(req,res){
  res.render("./main/news");
});

router.get("/community", function(req,res){
  res.render("./main/community");
});

router.post("/stats", function(req,res){
    console.log(req.body.username);
	var url = "https://fortnite-public-api.theapinetwork.com/prod09/users/id";
	var user = {"username": req.body.username};
	var options = {
		headers: apiKey,
		url: url,
		form: user
	}
	request.post(options, function(error, response, body){
		var data = JSON.parse(body);
		if (typeof data.error == 'undefined') {
 		 	data.preference = req.body.platform;
 		 	var options2 = {
                headers: apiKey,
                url: "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats",
                form: {"platform": "ps4", "user_id": data.uid, "window": "alltime"}
            }
            request.post(options2, function(e, r, b){
                var fail = false;
                res.render("./main/stats", {data: JSON.parse(b), error: fail})
            })
		} else if(typeof data.error !== 'undefined'){
            var fail = true;
			res.render("./main/stats", {error: fail});
		}
	});
});

module.exports = router;
