const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
require("dotenv").config();

const { CLIENT_ID, CLIENT_SECRET, ENV, BACK_HOST } = process.env;

passport.use(
  new GoogleStrategy(
    {
      clientID: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
      passReqToCallback: true,
      proxy: true,
    },
    (req, accessToken, refreshToken, profile, done) => {
      console.log(
        `req: ${req} accessToken: ${accessToken} refreshToken: ${refreshToken} profile: ${profile} done: ${done}`
      );
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
