const models = require('../models/index');

const User = {

  create: (displayName) => {
    models.User.create({
      authUserId: displayName
    }, {returning: true})
    .then((createdUser) => {
      console.log("User created for: ", createdUser.authUserId);
    })
    .catch((err) => {
      console.log("Something went wrong when trying to create a new user: ", err);
    })
  },

  checkAndCreate: (displayName) => {
    models.User.find({where: {authUserId: displayName}}).then((user) => {
      if (user) {
        console.log("User existed.")
      } else {
        User.create(displayName);
      }
    })
  },

  delete: (id) => {
  }
}


module.exports = User;
