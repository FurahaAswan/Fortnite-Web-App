var express 	   =  require("express"),
    app 		   = express(),
    bodyParser 	   = require('body-parser'),
    mongoose       = require("mongoose"),
    passport       = require("passport"),
    session        = require("express-session"),
    cookieParser   = require("cookie-parser");

//Configuration
var keys = require("./config/keys");
var passportSetup = require("./config/passportSetup");
app.set("view engine", "ejs");
app.set("port", (process.env.PORT || 80));
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req,res, next) {
  user = req.user;
  next();
})

//Routes
var authRoutes = require('./routes/authRoutes', "");
var mainRoutes = require("./routes/mainRoutes")

//Connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log("Connected to mongodb");
});

//Session Cookies
app.use(cookieParser('secret'));
app.use(require("express-session")({
    secret: "Terminate G3hetto",
    resave: false,
    saveUninitialized: false
}));

// PASSPORT INITIALIZE
app.use(passport.initialize());
app.use(passport.session());

app.use("/", mainRoutes);
app.use("/auth", authRoutes);
app.use(function(req, res) {
    res.status(404).end('error');
});

app.listen(app.get("port"), function(){
	console.log("the app is running on port" +app.get("port"));
});