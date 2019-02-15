//user logic for require and response to MongoDB
const User = require('./User.model');
const bcrypt = require('bcrypt');

class userLogic {

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
      return theUser;
    }).catch(error => {
      return error;
    });
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

  static editUser(editor, userToEdit, usernameToEdit) {
    const promise = this.getUser(usernameToEdit).then(user => {
      if (typeof user !== 'string') {
        if (editor.username === usernameToEdit || editor.role === 'Admin') {
          return User.findByIdAndUpdate(user._id, { email: userToEdit.email, username: userToEdit.username }, { new: false }).then(result => {
            return result;
          });
        } else {
          return 'Unauthorized!';
        }
      } else {
        return user;
      }
    });
    return promise;
  }

  static editUserRole(newRole, usernameToEdit) {
    const promise = this.getUser(usernameToEdit).then(user => {
      if (typeof user !== 'string') {
        return User.findByIdAndUpdate(user.id, { role: newRole }, { new: false }).then(result => {
          return result;
        });
      } else {
        return user;
      }
    });

    return promise;
  }
}
module.exports = userLogic;
