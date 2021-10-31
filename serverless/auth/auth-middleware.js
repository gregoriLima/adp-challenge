const passport = require('passport');

module.exports = {
  bearer: (req, res, next) => {
    passport.authenticate(
      'bearer', { session: false }, (erro, usuario, info) => {
        if (erro && erro.name === 'JsonWebTokenError') {
          return res.status(401).json({ erro: erro.message });
        }

        if (erro && erro.name === 'TokenExpiredError') {
          return res.status(401).json({ erro: erro.message, expiredAt: erro.expiredAt });
        }

        if (erro) {
          return res.status(500).json({ erro: erro.message });
        }

        req.token = info.token;
        return next();
      },
    )(req, res, next);
  },

};
