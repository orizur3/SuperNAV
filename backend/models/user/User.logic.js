//user logic for require and response to MongoDB
const User = require('./User.model');
const bcrypt = require('bcrypt');

class userLogic {

  static getAllUsers() {
    const promise = User.find().then(documents => {
      return documents;
    });
    return promise;
  }

  static create(userJson) {
    if (userJson.password !== userJson.passwordConf)
      return Promise.reject('Passwords do not match.');
    const user = new User({
      email: userJson.email,
      username: userJson.username,
      birthday: userJson.birthday,
      password: userJson.password,
      passwordConf: userJson.passwordConf
    });
    const promise = user.save().then(createUser => {
      return createUser;
    });
    return promise;
  }

  static getUser(username) {
    const promise = User.findOne({ username: username }).then(theUser => {
      if (theUser === null)
        return Promise.reject('username dosent exist');
      return theUser;
    });
    return promise;
  }

  static checkUser(username, pass) {
    const promise = this.getUser(username).then(user => {
      return bcrypt.compare(pass, user.password).then(result => {
        if (result === true)
          return user;
        else
          return Promise.reject('wrong password');
      });
    });
    return promise;
  }

  static editUser(editor, userToEdit, usernameToEdit) {
    const promise = this.getUser(usernameToEdit).then(user => {
      if (editor.username === usernameToEdit || editor.role === 'Admin') {
        return User.findByIdAndUpdate(user._id, { email: userToEdit.email, username: userToEdit.username, birthday: userToEdit.birthday }, { new: false }).then(result => {
          return result;
        });
      } else {
        return Promise.reject('Unauthorized!');
      }
    });
    return promise;
  }

  static editUserRole(newRole, usernameToEdit) {
    const promise = this.getUser(usernameToEdit).then(user => {
      return User.findByIdAndUpdate(user.id, { role: newRole }, { new: false }).then(result => {
        return result;
      });
    });

    return promise;
  }
}
module.exports = userLogic;
