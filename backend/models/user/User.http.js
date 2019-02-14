//check logic function
const express = require('express');
const userLogic = require('./User.logic');
const Token = require('../token/token_class');
const User = require('./User.model');
const tokenLogic = require('../token/tokens_logic')

const users = express.Router();

users.get("/users", (req, res, next) => {
  const users = userLogic.getAllUsers();
  users.then(data => {
    var message;
    if (data.length !== 0)
      message = 'Users fetched successfully!';
    else {
      message = 'empty database.';
    }
    res.status(200).json({
      message: message,
      Users: data
    });
  });

  });

users.post("/users", (req, res, next) => {
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {
    const user = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    };
    const created = userLogic.create(user);

    if (typeof created !== typeof 'string') {
      created.then(message => {
        if (message === 'success.') {
          const token = tokenLogic.createToken(user);
          return res.status(200).json({
            message: message,
            Token: token.token
          });
        } else {
          const err = new Error(message);
          err.status = 400;
          return next(err);
        }
      });
    } else {
      var err = new Error(created);
      err.status = 400;
      return next(err);
    }
  } else {

  }
});

function checkSession(req, res, next) {
  console.log('checkSession   ' + req.session);
  if (req.session.userToken) {
    console.log('req.session.userToken');
    req.body.token = req.session.userToken
  }
    return next();
  }

function requiresLogin(req, res, next) {
  if (req.body.token) {
    return next();
  } else if (req.body.username && req.body.password) {
    const authnticated = userLogic.chackUser(req.body.username, req.body.password);
    authnticated.then(authUser => {
      if (typeof authUser !== typeof 'srting') {
        req.body.token = tokenLogic.createToken(authUser).token;
        return next();
      } else {
        var err = new Error(authUser);
        err.status = 400;
        return next(err);
      }
    });
  } else {
    var err = new Error('missing user or password');
    err.status = 400;
    return next(err);
  }
}

// GET route after registering
users.get('/profile', requiresLogin, function (req, res, next) {
  return res.json({ massage: 'success login', token: req.body.token });
});

module.exports = users;
