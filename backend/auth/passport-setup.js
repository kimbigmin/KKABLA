// import passport from 'passport';
// import * as google from 'passport-google-oauth20';
// const GoogleStrategy = google.Strategy;

const GoogleStrategy = require('passport-google-oauth2').Strategy;
const passport = require('passport');
passport.use(
  new GoogleStrategy(
    {
      clientID:
        '5970793349-7o1h48vm750nn8lp9fgj4sskjc8fnfct.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/login/google/callback',
      passReqToCallback: true,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    },
  ),
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  console.log('gg');
  done(null, user);
});
