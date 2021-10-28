// install express with `npm install express` 
const axios = require('axios');
const express = require('express')
const app = express()

const { REACT_APP_YELP_API_KEY } = process.env;

app.use(express.static('builds'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/v3/businesses/search', async (req, res) => {
  
  const config = {
    headers: {
      'Authorization': `Bearer ${REACT_APP_YELP_API_KEY}`,
      "accepts": "application/json"
    }
  };

  axios.get(`https://api.yelp.com${req.originalUrl}`, config)
        .then(function(response) {
            res.send(response.data)
        })
        .catch(function(error) {
            res.send({
                status: '500',
                message: error
            })
        });
   
});

app.get('/hello', async (req, res) => {
  res.send('Olá');
});


module.exports = app
