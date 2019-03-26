//http require for users and autentication
const express = require('express');
const userLogic = require('./User.logic');
const tokenLogic = require('../token/tokens_logic')
const users = express.Router();

//GET all users
users.get("/users/all", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {
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
      users: data
    });
  }).catch(error => {
    var err = new Error(error);
    err.status = 400;
    return next(err);
  });

});

//Create new user
users.post("/users/create", (req, res, next) => {
  if (req.body.email &&
    req.body.username &&
    req.body.city &&
    req.body.password &&
    req.body.passwordConf) {
    const user = {
      email: req.body.email,
      username: req.body.username,
      city: req.body.city,
      password: req.body.password,
      passwordConf: req.body.passwordConf
    };
    if (req.body.birthday) {
      user.birthday = req.body.birthday;
    }
    const created = userLogic.create(user);
    created.then(theUser => {
      const token = tokenLogic.createToken(theUser);
      return res.status(200).json({
        message: 'sccess!',
        token: token.token
      });
    }).catch(error => {
      var err = new Error(error);
      err.status = 400;
      return next(err);
    });
  } else {
    var err = new Error('missing params');
    err.status = 400;
    return next(err);
  }
});

// Login
users.post('/profile', function (req, res, next) {
  if (req.body.username && req.body.password) {
    const authnticated = userLogic.checkUser(req.body.username, req.body.password);
    authnticated.then(authUser => {
      const token = tokenLogic.createToken(authUser);
      return res.status(200).json({
        message: 'token created',
        token: token.token
      });
    }).catch(error => {
      if (error == 'username dosent exist' || error == 'wrong password')
        return res.status(200).json({
          message: 'Wrong Credentials'
        });
      else {
        var err = new Error(error);
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

//Update personal information by user or admin
users.put("/users/edit_user", tokenLogic.verifyToken, (req, res, next) => {
  if (req.body.email &&
    req.body.username &&
    req.body.city &&
    req.body.oldUserName) {
    const user = {
      email: req.body.email,
      username: req.body.username,
      city: req.body.city,
      birthday: req.body.birthday
    };
    if (req.body.birthday)
      user.birthday = req.body.birthday;
    const edited = userLogic.editUser(req.body.user, user, req.body.oldUserName);
    edited.then(result => {
      return res.status(200).json({
        message: 'Updated',
        token: tokenLogic.createToken(result).token
      });
    }).catch(error => {
      var err = new Error(error);
      err.status = 400;
      return next(err);
    });
  } else {
    var err = new Error('missied parameters');
    err.status = 400;
    return next(err);
  }
});

// update Roles for admin
users.get("/users/edit_role", tokenLogic.verifyToken, tokenLogic.rolesAdmin, (req, res, next) => {  //, tokenLogic.rolesAdmin
  const editRole = userLogic.editUserRole(req.body.role, req.body.username);
  editRole.then(result => {
    return res.status(200).json({
      message: 'Updated User Role'
    });
  }).catch(error => {
    var err = new Error(error);
    err.status = 400;
    return next(err);
  });
});

//GET coordinates
users.get("/users/location", tokenLogic.verifyToken, (req, res, next) => {
  const location = userLogic.getLocation(req.body.user.city);
  location.then(locationJson => {
    return res.status(200).json({
      message: 'User location fetched from google',
      lat: locationJson.latitude,
      long: locationJson.longitude
    });
  }).catch(error => {
    var err = new Error('Error fetching location from google.');
    err.status = 400;
    return next(err);
  });
});

users.get("/users/checkRole", tokenLogic.verifyToken, (req, res, next) => {
  res.status(200).json({ message: req.body.user.role });
});

module.exports = users;
