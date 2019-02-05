const jwt = require('jsonwebtoken');

class Token {

  constructor(user) {
    this.token = jwt.sign({ user: user }, 'muli_maniak', { expiresIn: '1h' });
    this._profile = { email: user.email };
  }
}

module.exports = Token;
