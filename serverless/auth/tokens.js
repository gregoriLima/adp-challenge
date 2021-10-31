const jwt = require('jsonwebtoken');

async function isValidToken(token) {
  const payload = jwt.verify(token, process.env.JWT_KEY);

  return payload;
}

module.exports = {

  acessToken: {
    nomeDoToken: 'Access',
    verifyValidToken(token) {
      return isValidToken(token);
    },
  },

};
