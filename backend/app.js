const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const Product = require('./models/product/product.logic');
const User = require('./models/user/User.logic');

const app = express();

mongoose.connect("mongodb://localhost:27017/superNav")
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Connection to database failed!');
  });
var db = mongoose.connection;

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
  })
}));

app.use('/sn', Product);
app.use('/sn', User);
module.exports = app;
