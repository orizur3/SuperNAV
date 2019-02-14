const User = require('./User.model');
const bcrypt = require('bcrypt');

class userLogic {

  constructor() {}

  static getAllUsers() {
    const promise= User.find().then(documents => {
      return documents;
    });
    return promise;
  }

  static create(userJson) {
     if (userJson.password !== userJson.passwordConf)
       return 'Passwords do not match.';
     const user = new User({
       email: userJson.email,
       username: userJson.username,
       password: userJson.password,
       passwordConf: userJson.passwordConf
     });
    const promise=user.save().then(createUser => {
      return 'success.';
    }).catch(error => {
      return 'user not create.';
      });
    return promise;
  }

  static getUser(username) {
    const promise = User.findOne({ username: username }).then(theUser => {
      if (theUser === null)
        return new Promise((resolve, reject) => {
          resolve('username dosent exist');
        });
      /*
      return bcrypt.compare(pass, theUser.password).then(result=> {
        return result;
      }).then(result => {
        if (result === true)
          return theUser;
        else
          return 'wrong password';
        });
        */ return theUser;
    }).catch(error => {
      return error;
    });
      //const promise = User.find({username:username},function (error, user) {
      //if (error)
      //  return { log: 'username not exist' };
      //else {
      //  bcrypt.compare(pass, user.password, function (err, result) {
      //    if (result === false)
      //      return { log: 'wrong password' };
      //    else
      //      return { user: user, log: 'password match' };
      //  });
      //  }
      //});
      return promise;
  }

  static chackUser(username, pass) {
    const promise = this.getUser(username).then(user => {
      if (typeof user === 'string')
        return user;
      return bcrypt.compare(pass, user.password).then(result => {
        return result;
      }).then(result => {
        if (result === true)
          return user;
        else
          return 'wrong password';
      });
    });
    return promise;
  }

}
module.exports = userLogic;
