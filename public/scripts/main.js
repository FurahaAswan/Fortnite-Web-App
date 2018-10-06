<script>
	var APIkey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};
	$.ajax({
	  			type: "POST",
	  			url: "https://fortnite-public-api.theapinetwork.com/prod09/users/id",
	  			headers: APIkey,
	  			dataType: "json",
	  			data: {"username": "FurFur_BEAST"}
	  		})
	  		.done(function(data) {
	  			console.log('GET response:', JSON.stringify(data));
	  			$.ajax({
	  				type: "POST",
	  				url: "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats",
	  				headers: APIkey,
	  				dataType: "json",
	  				data: {user_id: data["uid"], platform: data["platforms"][1], "window": "alltime"},
	  				success: function(stuff){
	  					console.log(JSON.stringify(stuff))
	  				},
	  				error: function(textStatus, errorThrown){
	  					console.log(errorThrown);
	  				}
	  			})
	  		})
	  		.fail(function(jqXHR, textStatus, err) {
	  			console.log("Ajax error response:", textStatus);
	  		});
</script>