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
            token: token.token
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

// GET route after registering
users.get('/profile', function (req, res, next) {
  if (req.body.username && req.body.password) {
    const authnticated = userLogic.chackUser(req.body.username, req.body.password);
    authnticated.then(authUser => {
      if (typeof authUser !== typeof 'srting') {
        const token = tokenLogic.createToken(authUser);
        return res.status(200).json({
          message: 'token created',
          token: token.token
        });
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
});

users.put("/users", tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.email &&
    req.body.username) {
    const user = {
      email: req.body.email,
      username: req.body.username
    };
    const edited = userLogic.editUser(req.body.user, user, req.body.oldUserName);
    edited.then(result => {
      console.log(result);
      if (typeof result !== 'string') {
        return res.status(200).json({
          message: 'Updated'
        });
      } else {
        var err = new Error(result);
        err.status = 400;
        return next(err);
      }
    });
  }
});

users.put("/users/edit_role", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
  const editRole = userLogic.editUserRole(req.body.role, req.body.username);
  editRole.then(result => {
    if (typeof result !== 'string') {
      return res.status(200).json({
        message: 'Updated User Role'
      });
    } else {
      var err = new Error(result);
      err.status = 400;
      return next(err);
    }
  })
});

module.exports = users;
