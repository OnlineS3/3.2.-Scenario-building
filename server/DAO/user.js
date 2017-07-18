const models = require('../models/index');

const User = {

  create: (displayName) => {
    return models.User.create({
      authUserId: displayName
    }, {returning: true})
    .then((createdUser) => {
      console.log("User created for: ", createdUser.authUserId);
      return true;
    })
    .catch((err) => {
      console.log("Something went wrong when trying to create a new user: ", err);
      return false;
    })
  },

  checkAndCreate: (displayName) => {
    return models.User.find({where: {authUserId: displayName}}).then((user) => {
      if (user) {
        console.log("User existed.")
      } else {
        return User.create(displayName);
      }
    })
  },

  delete: (id) => {
  }
}


module.exports = User;
