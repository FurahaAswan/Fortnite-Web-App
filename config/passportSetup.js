var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth20").Strategy;
var keys = require("./keys");
var User = require("../models/user");

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Google Oauth2
passport.use(
  new GoogleStrategy({
    callbackURL: '/auth/google/redirect',
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret
  }, (accessToken, refreshToken, profile, done) => {
    //check to see if the user is in db
    User.findOne({googleId: profile.id}).then((currentUser) => {
        if(currentUser){
          console.log('User is: ', currentUser);
          done(null, currentUser);
        } else {
        //Create user in database
        new User({
            username: profile.displayName,
            googleId: profile.id,
            thumbnail: profile._json.image.url
        }).save().then((newUser) => {
            console.log("Create new user: ", newUser);
            done(null, newUser);
        });
      }
    });
  })
);