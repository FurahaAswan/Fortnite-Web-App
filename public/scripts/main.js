console.log("ahk");
// compiler("kills");
// 	compiler("wins");
// 	compiler("score");
var APIKey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};
// 	function compiler(input){
// 	$.ajax({
// 	  			type: "POST",
// 	  			url: "https://fortnite-public-api.theapinetwork.com/prod09/leaderboards/get",
// 	  			headers: APIKey,
// 	  			statsType: "json",
// 	  			//Parameter for what stat you're looking for
// 	  			data: {"window": "top_10_"+input},
// 	  			success: function(stats){
// 	  			console.log(stats.entries);
// 	  			for(i =0; i<5; i++){
// 	  				var values = {};
// 	  				values = {
// 	  					username: stats["entries"][i]["username"],
// 	  					kills: stats["entries"][i]["kills"],
// 	  					rank: stats["entries"][i]["rank"],
// 	  					platform: stats["entries"][i]["platform"],
// 	  					wins: stats["entries"][i]["wins"],
// 	  					kd: stats["entries"][i]["kd"],
// 	  					score: stats["entries"][i]["score"]
// 	  				};
// 	  				var lbstats = "<div class='lb-sub'> <div class='textBox'><h2>"+values.username+"</h1> <p>"+values[input].substring(0,1);
// 	  				var lbInputstats = values[input]+"</p></div> <span><img src='/assets/img/platforms/"+values.platform+".png'></span></div>";
// 	  				if(input === "kills"){
// 	  					$(".lbKills").append(lbstats+lbInputstats);
// 	  				} 
// 	  				else if(input === "wins"){
// 	  					$(".lbWins").append(lbstats+lbInputstats);
// 	  				} 
// 	  				else if(input === "score"){
// 	  					$(".lbScore").append(lbstats+lbInputstats);
// 	  				} 
// 	  				else {
// 	  					console.log("API does not detect that. Try checking the spelling")
// 	  				}
// 	  			}
// 	  			},
// 	  			error: function(jqXHR, textStatus, err){console.log(textStatus)}
// 	  		})
// 	}
	// $.ajax({
	// 	type: "POST",
	// 	url: "https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get",
	// 	headers: APIKey,
	// 	statsType: "json",
	// 	data: {"language": "en"},
	// 	success: function(data){
	// 		console.log(data);
	// 	},
	// 	error: function(jqXHR, textStatus, err){
	// 		console.log(err);
	// 	}
	// })
var entries = [{
            "title": "Make A Splash",
            "body": "Chomp and Sky Stalker Gear in the Item Shop now!",
            "image": "https://fortnite-public-files.theapinetwork.com/0b76799d416020eedcbe611364d2ee09.jpeg",
            "time": "1539045123"
        },
        {
            "title": "Quad Launcher",
            "body": "Quickly fire up to 4 rockets to blanket an area with explosive damage.",
            "image": "https://fortnite-public-files.theapinetwork.com/b5d8acc3d3b38ba1700ecd6958cc4616.jpeg",
            "time": "1539014704"
        },
        {
            "title": "Time For Harvest",
            "body": "Straw Stuffed Gear available now!",
            "image": "https://fortnite-public-files.theapinetwork.com/41ef6c17cae14a94b8d29b614b4eb679.jpeg",
            "time": "1538870762"
        }]
function slideShow(){
	var index = 0;
	var prev = $(".prev");
	var next = $(".next");
	var jumbotron = $(".jumbotron");
	prev.click(function(){
		if(index<=0){
			index+=2;
			console.log(index);
		} else{
			index --;
			console.log(index);
		}
		jumbotron.css("background-image", "url("+entries[index].image+")");
		$(".jumbotron .description h1").text(entries[index].title);
		$(".jumbotron .description p").text(entries[index].body);
		if(!jumbotron.hasClass('fade')){
    		jumbotron.addClass('fade');
  		} 
	});
	next.click(function(){
		if(index >= 2){
			index-=2;
		} else{
			index++;
			console.log(index);
		}
		$(".jumbotron").css("background-image", "url("+entries[index].image+")");
		$(".jumbotron .description h1").text(entries[index].title);
		$(".jumbotron .description p").text(entries[index].body);
		if(!jumbotron.hasClass('fade')){
    		jumbotron.addClass('fade');
  		} else {
    		jumbotron.removeClass('fade');
  		} 
	});

	jumbotron.css("background-image", "url("+entries[index].image+")");
	$(".jumbotron .description h1").text(entries[index].title);
	$(".jumbotron .description p").text(entries[index].body);	
}
slideShow();
