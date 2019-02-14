const jwt = require('jsonwebtoken');

class Token {

  constructor(user, secret) {
    this.token = jwt.sign({ user: user }, secret, { expiresIn: '25h' });
    this._profile = { email: user.email };
  }
}

module.exports = Token;
