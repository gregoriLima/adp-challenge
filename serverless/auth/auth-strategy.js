const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;
const tokens = require('./tokens');

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        await tokens.acessToken.verifyValidToken(token);
        done(null, null, { token });
      } catch (error) {
        done(error);
      }
    },
  ),
);
