//check logic function
const express = require('express');
const userLogic = require('./User.logic');
const Token = require('../token/token_class');

const users = express.Router();

users.get("/users", (req, res, next) => {
  const users = userLogic.getAllUsers();
  /*
   * separate between empty data to get data
  var message;
  if (user.length == 0)
    message = 'empty database'
  else
    message = 'Users fetched successfully!'
    */
  res.status(200).json({
    message: 'Users fetched successfully!',
    Users: users
  });
});

users.post("/users", (req, res, next) => {
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    var user = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    };
    var created = userLogic.create(user);
    if (created === 'success') {
      return res.redirect('/sn/profile');
    } else {
      var err = new Error(created);
      err.status = 400;
      return next(err);
    }
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
});

function requiresLogin(req, res, next) {
  if (req.token) {
    return next();
  } else if (req.body.username && req.body.password) {
    let authnticated = userLogic.getUser(req.body.username, req.body.password);
    if (authnticated.error === 'password compare') {
      req.token = new Token(user);
      return next();
    } else {
      var err = new Error(authnticated.error);
      err.status = 401;
      return next(err);
    }
  } else {
    var err = new Error('You must have token or user & pass');
    err.status = 401;
    return next(err);
  }
}

// GET route after registering
users.get('/profile', requiresLogin, function (req, res, next) {
  return res.json({ massage: 'success login', token: req.token });
});

module.exports = users;
