  var APIkey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};
//  var key = "AIzaSyC6Q-w8R7jcEWgrSvbXKcCZsEd2gWxxmVM";
//  var playlistId = "LLUH8f9jIA0LzqJwmwb12RVQ";
//  var URL = "https://www.googleapis.com/youtube/v3/playlistItems";


//  var options = {
//    part: 'snippet',
//    key: key,
//    maxResults: 20,
//    playlistId: playlistId
//  }
//
//  function loadVids(){
//    $.getJSON(URL, options, function(data){
//      var id = data.items[0].snippet.resourceId.videoId;
//      resultsLoop(data);
//    })
//  }
//
//  function resultsLoop(data) {
//
//    $.each(data.items, function(i, item){
//        var thumb = data.items[0].snippet.thumbnails.medium.url;
//        var title = item.snippet.title;
//        var desc = item.snippet.description.substring(0, 100);
//        var id = item.snippet.resourceId.videoId;
//        var date = item.snippet.publishedAt;
//
//        var videoOptions = {
//          id: id,
//          part: 'statistics',
//          key: key
//        }
//
//        var url = "https://www.googleapis.com/youtube/v3/videos";
//        $.getJSON(url, videoOptions, function(subData){
//          var viewCount = subData.items[0].statistics.viewCount;
//
//          function formatDate(date) {
//            var day = date.substring(8,10);
//            var month = date.substring(5,7);
//            var year = date.substring(0,4);
//          }
//
//          $(".forceOverflow").append(`
//          <div class="videoInfo">
//          <iframe id="video" src="https://www.youtube.com/embed/${id}"></iframe>
//          <div class="textBox big left">
//            <h1>${title}</h1>
//            <p>${formatDate(date)}</p>
//          </div>
//          <div class="textBox right">
//            <h1>${viewCount} Hits</h1>
//          </div>
//          </div>
//          `);
//        }) 
//    })
//  }
