// compiler("kills");
// compiler("wins");
// compiler("score");
news();
var APIkey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};
function compiler(input){
	var APIkey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};
	$.ajax({
	  			type: "POST",
	  			url: "https://fortnite-public-api.theapinetwork.com/prod09/leaderboards/get",
	  			headers: APIkey,
	  			statsType: "json",
	  			//Parameter for what stat you're looking for
	  			data: {"window": "top_10_"+input},
	  			success: function(stats){
	  			for(i =0; i<5; i++){
	  				var values = {
	  					username: stats["entries"][i]["username"],
	  					kills: stats["entries"][i]["kills"],
	  					rank: stats["entries"][i]["rank"],
	  					platform: stats["entries"][i]["platform"],
	  					wins: stats["entries"][i]["wins"],
	  					kd: stats["entries"][i]["kd"],
	  					score: stats["entries"][i]["score"]
	  				}
	  				var lbstats = "<div class='lb-sub'> <div class='textBox'><h2>"+values.username+"</h1> <p>" +input.toUpperCase().substring(0,1)+"  "+values[input]+"</p></div> <span><img src='/assets/img/platforms/"+values.platform+".png'></span></div>";
	  				if(input === "kills"){
	  					$(".lbKills").append(lbstats);
	  				} 
	  				else if(input === "wins"){
	  					$(".lbWins").append(lbstats);
	  				} 
	  				else if(input === "score"){
	  					$(".lbScore").append(lbstats);
	  				} 
	  				else {
	  					console.log("API does not detect that. Try checking the spelling")
	  				}
	  			}
	  			},
	  			error: function(jqXHR, textStatus, err){console.log(textStatus)}
	  		})
	}
function news(){
	var APIkey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};
	$.ajax({
	  			type: "POST",
	  			url: "https://fortnite-public-api.theapinetwork.com/prod09/br_motd/get",
	  			headers: APIkey,
	  			statsType: "json",
	  			//Parameter for the language
	  			data: {"language": "en"},
	  			success: function(data){
	  				var entries = [];
	  				var date = new Date();
					var timestamp = date.getTime();
	  				data["entries"].forEach(function(body){
	  					if(timestamp - (body.time*1000) <= 604800000){
	  						entries.push(body);
	  					}
	  				})
	  				entries.forEach(function(body, i, parent){
	  					if((body.body.includes("now!") || body.body.includes("Item Shop!")) && (timestamp - (body.time*1000) > 86400000)){
	  						parent.splice(i,1);
	  					}
	  				})
	  				console.log(entries);
						var index = 0;
						var prev = $(".prev");
						var next = $(".next");
						var jumbotron = $(".jumbotron");
						jumbotron.css("background-image", "url("+entries[index].image+")");
						$(".jumbotron .description h1").text(entries[index].title);
						$(".jumbotron .description p").text(entries[index].body);
						prev.click(function(){
							if(index<=0){
								index+=(entries.length - 1);
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
							if(index >= (entries.length-1)){
								index = 0;
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
	  			},
	  			error: function(jqXHR, textStatus, err){console.log(textStatus)}
	  		});
}
