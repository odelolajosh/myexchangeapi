const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const { makeRequest } = require('./http-request');

// base url
const url = '/api';
const EXCHANGE_RATE_API = 'api.exchangeratesapi.io';

const app = express();

// To manage CORS issues
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(`/`, express.static(path.join(__dirname, 'public')));
app.use(`${url}/`, express.static(path.join(__dirname, 'public')));

app.get(`${url}/rates`, async (req, res) => {
  const { base, currency } = req.query;
  
  try {
    const options = {
      host: EXCHANGE_RATE_API,
      path: `/latest?base=${base}&symbols=${currency}`
    }
    makeRequest(options, ({ data, error }) => {
      if (error) {
        return res.status(500).json({
          error: 'Internal Server Error'
        })
      }
      const results = {
        base,
        date: new Date().toISOString().substr(0, 10),
        rates: data.rates
      }
      return res.status(200).json({ results });
    })
  } catch(err) {
    return res.status(500).json({
      error: err.message
    })
  }
});

module.exports = app;
