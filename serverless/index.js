const axios = require('axios');
const express = require('express');
const authMiddleware = require('./auth/auth-middleware');
const authStrategy = require('./auth/auth-strategy');

const app = express();

const { REACT_APP_YELP_API_KEY } = process.env;

app.use(express.static('build'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const fetchYelpApi = async (req, res) => {
  const config = {
    headers: {
      Authorization: `Bearer ${REACT_APP_YELP_API_KEY}`,
      accepts: 'application/json',
    },
  };

  axios.get(`https://api.yelp.com${req.originalUrl}`, config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send({
        status: '500',
        message: error,
      });
    });
};

app
  .get('/v3/businesses/search', authMiddleware.bearer, fetchYelpApi);
app
  .get('/v3/businesses/:id/reviews', authMiddleware.bearer, fetchYelpApi);

module.exports = app;
