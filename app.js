var express 	= require("express"),
	app 		= express(),
	request 	= require("request");

app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));

var apiData = {"cached":false,"uid":"344cbe52ab2940c6b3b599a461821460","username":"FurFur_BEAST","platform":"pc","timestamp":1538256421,"window":"alltime","stats":{"kills_solo":9,"placetop1_solo":0,"placetop10_solo":0,"placetop25_solo":1,"matchesplayed_solo":22,"kd_solo":0.41,"winrate_solo":0,"score_solo":1462,"minutesplayed_solo":20,"lastmodified_solo":1537558411,"kills_duo":5,"placetop1_duo":0,"placetop5_duo":1,"placetop12_duo":2,"matchesplayed_duo":7,"kd_duo":0.71,"winrate_duo":0,"score_duo":1038,"minutesplayed_duo":0,"lastmodified_duo":1527729681,"kills_squad":34,"placetop1_squad":4,"placetop3_squad":5,"placetop6_squad":6,"matchesplayed_squad":20,"kd_squad":2.13,"winrate_squad":20,"score_squad":4873,"minutesplayed_squad":0,"lastmodified_squad":1527732094},"totals":{"kills":48,"wins":4,"matchesplayed":49,"minutesplayed":20,"hoursplayed":0,"score":7373,"winrate":8.16,"kd":1.07,"lastupdate":1527732094}}

app.get("/", function(req,res){
	res.render("index");
});

app.get("/stats", function(req,res){
	res.render("stats");
});

app.listen(8000, function(){
	console.log("the app is running");
});