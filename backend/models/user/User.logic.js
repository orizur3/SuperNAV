const User = require('./User.model');
const bcrypt = require('bcrypt');

class userLogic {

  constructor() {}

   static getAllUsers(){
    User.find().then(documents => {
      return documents;
    });
  }

   static create (user) {
    if (user.password !== user.passwordConf)
      return 'Passwords do not match.';
    User.create(user, function (error, user) {
      if (error) {
        return 'user not create';
      } else {
        return 'success';
      }
    });
  }

    static getUser (username, pass) {
    User.findById(username).exec(function (error, user) {
      if (error)
        return { error: 'username not exist' };
      else {
        bcrypt.compare(pass, user.password, function (err, result) {
          if (result === false)
            return { error: 'wrong password' };
          else
            return { user: user, error: 'password compare' };
        });
      }
    });
  }
}
module.exports = userLogic;
