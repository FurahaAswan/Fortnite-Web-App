$(document).ready(function(){
	leaderboards("kills");
	leaderboards("wins");
	leaderboards("score");
	news();
    $(".search-box").click(function(){
        $(this).addClass("click")
    });
    $(document).click(function(event){
        if(!$(event.target).closest('.search-box').length) {
            if($(".search-box").hasClass("click")) {
                $('.search-box').removeClass("click");
            }
        }
    });
});