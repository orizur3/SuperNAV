//token logic for autenticate and create Tokens
const jwt = require('jsonwebtoken');
const Token = require('./token_class');

class tokenLogic {

  static createToken(user) {
    return new Token(user, 'muli_maniak');
  }

  static verifyToken(req, res, next) {
    if (req.body.token) {
      req.body.user = jwt.verify(req.body.token, 'muli_maniak').user;
      return next();
    } else {
      const err = new Error('create Token');
      err.status = 400;
      return next(err);
    }
  }

  static rolesUser(req, res, next) {
    if (req.body.user.role === 'User')
      return next();
    else {
      const err = new Error('Unauthorized!');
      err.status = 400;
      return next(err);
    }
  }

  static rolesAdmin(req, res, next) {
    if (req.body.user.role === 'Admin')
      return next();
    else {
      const err = new Error('Unauthorized!');
      err.status = 400;
      return next(err);
    }
  }
}

module.exports = tokenLogic;
