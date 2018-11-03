var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User = require("../models/user");

//login
router.get("/login", function(req,res){
  res.render("login");
});

//logout
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

//GOOGLE

//auth with google+
router.get("/google", passport.authenticate("google", {
  scope:["profile"]
}));


//callback route for google to redierect
//hand control to passport to exchange profile info
router.get("/google/redirect", passport.authenticate("google"), function(req,res){
  res.redirect("/");
})

module.exports = router;