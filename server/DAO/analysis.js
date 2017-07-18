const models = require('../models/index');

const Analysis = {

  create: (name, displayName) => {
    return models.User.find({where: {authUserId: displayName}}).then((user) => {
      if (!user) {
        console.log("Tried to create a new analysis, but no such user existed.");
        return false;
      } else {
        models.Analysis.create({
          name: name
        }, {returning: true}).then((createdAnalysis) => {
          user.addAnalysis(createdAnalysis).then(() => {
            console.log("Analysis created.");
            return true;
          });
        });
      }
    })
  },

  checkUserAccess: (id, displayName) => {
    return models.Analysis.find({where: {id: id}}).then((analysis) => {
      if (!analysis) {
        return false
      }
      analysis.getUser().then((analysisUser) => {
        if (!analysisUser) {
          return false;
        } else {
          return analysisUser.authUserId == displayName
        }
      })
    })
  },

  find: (id, displayName) => {
    return models.Analysis.find({where: {id: id}}).then((analysis) => {
      console.log("Got here");
      if (!analysis) {
        console.log("Analysis not found.");
        return false;
      }
      console.log("Getting user.");
      analysis.getUser().then((analysisUser) => {
        if (!analysisUser) {
          console.log("This analysis had no user. Analysis id: ", analysis.id);
          return false;
        }
        if (analysisUser.authUserId != displayName) {
          console.log("User mismatch. The user is not authorized to access this analysis.");
          return false;
        }
        analysis.getItems().then((items) => {
          return {
            analysis: analysis,
            items: items
          }
        });
      })
    })
  },

  delete: (id) => {
  }
}


module.exports = Analysis;
