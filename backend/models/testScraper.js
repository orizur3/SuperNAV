const express = require('express');
const Scraper = require('./scraper')

const testScraper = express.Router();


testScraper.get('/test', (req, res, next) => {
  console.log('start');
  Scraper.categoryParser('https://groceries.asda.com').then(result => {
    return res.status(200).json({
      message: 'product names',
      result: result
    });
  }).catch(error => {
    const err = new Error(error);
    err.status = 400;
    return next(err);
  });
});

module.exports = testScraper;
