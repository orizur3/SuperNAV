//fix file
const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  if (req.body.token) {
    req.profile = jwt.verify(req.body.token, 'muli maniak');
    return next()
  } else {
    var err = new Error('not Login ');
    err.status = 401;
    return next(err);
  }
}
