// implement search service for at least 2 Models
// implement user parameterized search with at least 3 parameters
// implement groupe by search
// use at least one map reduce query
// Algoritem Hyper Log Log or Count Min Sketch
// Scraper
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const path = require('path');
const session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const Product = require('./models/product/product.http');
const User = require('./models/user/User.http');
const shoppingCart = require('./models/shoppingCart/shoppingCart.http')
const app = express();

//connect to Mongo DB
mongoose.connect("mongodb://localhost:27017/superNav", () => { })
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.log('error');
    console.log('Connection to database failed!');
  });
var db = mongoose.connection;

// fixed headers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS');
next();
});

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  }),
  cookie: {
    //must be served over https
    secure: false,
    //valid 3 days.  this is the true expiration setting
    originalMaxAge: 1000 * 60 * 60 * 24 * 3,
    //i think there's some bug that specifying this fixes but pretty sure it's deprecated
    _expires: false
  }
}));

//My Libraries
app.use('/sn', shoppingCart);
app.use('/sn', Product);
app.use('/sn', User);

module.exports = app;
