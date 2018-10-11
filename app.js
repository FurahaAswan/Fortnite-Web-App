var express 	= require("express"),
	app 		= express(),
	request 	= require("request"),
	fs			= require("fs");
	bodyParser 	= require('body-parser');

app.set("view engine", "ejs");
app.set("port", (process.env.PORT || 5000));
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));

var apiKey = {"Authorization": "2e04211c18b48a93110d5ff1f0b06f90"};

app.get("/", function(req,res){
	res.render("index");
});

app.post("/stats", function(req,res){
	// console.log(req.body.username);
	// var url = "https://fortnite-public-api.theapinetwork.com/prod09/users/id";
	// var user = {"username": req.body.username};
	// var options = {
	// 	headers: apiKey,
	// 	url: url,
	// 	form: user
	// }
	// request.post(options, function(error, response, body){
	// 	console.log(JSON.parse(body));
	// 	if (typeof body !== 'undefined') {
 // 		 	data = JSON.parse(body);
 // 		 	data.preference = req.body.platform;
 // 		 	res.render("stats");
	// 	} else{
	// 		res.send("undefined");
	// 	}
	// });
});

app.get("/stats", function(req,res){
  res.render("stats");
});

app.get('/video', function(req, res) {
  const path = 'public/assets/videos/sample.mp4'
  const stat = fs.statSync(path)
  const fileSize = stat.size
  const range = req.headers.range

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-")
    const start = parseInt(parts[0], 10)
    const end = parts[1]
      ? parseInt(parts[1], 10)
      : fileSize-1

    const chunksize = (end-start)+1
    const file = fs.createReadStream(path, {start, end})
    const head = {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': 'video/mp4',
    }

    res.writeHead(206, head)
    file.pipe(res)
  } else {
    const head = {
      'Content-Length': fileSize,
      'Content-Type': 'video/mp4',
    }
    res.writeHead(200, head)
    fs.createReadStream(path).pipe(res)
  }
})

app.use(function(req, res) {
    res.status(404).end('error');
});

app.listen(app.get("port"), function(){
	console.log("the app is running on port" +app.get("port"));
});