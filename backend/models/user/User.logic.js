//user logic for require and response to MongoDB
const User = require('./User.model');
const bcrypt = require('bcrypt');
var NodeGeocoder = require('node-geocoder'); // Google geocoder sevice

class userLogic {

  static getAllUsers() {
    const promise = User.find().then(users => {
      return users;
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
      city: userJson.city,
      password: userJson.password,
      passwordConf: userJson.passwordConf,
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

  static getUserById(userId) {
    const promise = User.findById(userId).then(theUser => {
      if (theUser === null)
        return Promise.reject('user dosent exist');
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
        return User.findByIdAndUpdate(user._id, userToEdit , { new: true }).then(result => {
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

  static getLocation(city) {
    var options = { // options for the geocoder service
      provider: 'google',
      apiKey: 'AIzaSyD-x2XCvFbeRPUUIx1yoER2DIJ088GkaWc'
    };
    var geocoder = NodeGeocoder(options);
    const promise = geocoder.geocode(city)
      .then(res=> {
        return {
          latitude: res[0].latitude,
          longitude: res[0].longitude
        };
      });
    return promise;
  }
}
module.exports = userLogic;
