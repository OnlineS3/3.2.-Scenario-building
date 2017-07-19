const models = require('../models/index');

const Analysis = {

  create: (name, displayName) => {
    return models.User.find({where: {authUserId: displayName}}).then((user) => {
      if (!user) {
        console.log("Tried to create a new analysis, but no such user existed.");
        return false;
      } else {
        return models.Analysis.create({
          name: name
        }, {returning: true}).then((createdAnalysis) => {
          return user.addAnalysis(createdAnalysis).then(() => {
            console.log("Analysis created.");
            return createdAnalysis;
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
      return analysis.getUser().then((analysisUser) => {
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
      return analysis.getUser().then((analysisUser) => {
        if (!analysisUser) {
          console.log("This analysis had no user. Analysis id: ", analysis.id);
          return false;
        }
        if (analysisUser.authUserId != displayName) {
          console.log("User mismatch. The user is not authorized to access this analysis.");
          return false;
        }
        return analysis.getItems().then((items) => {
          return {
            analysis: analysis,
            items: items
          }
        });
      })
    })
  },

  findAll: (displayName) => {
    return models.User.find({where: {authUserId: displayName}}).then((user) => {
      if (!user) {
        console.log("Returning empty array because no user was found.");
        return []
      } else {
        return user.getAnalyses().then((analyses) => {
          console.log("returning ", analyses.length, " analyses.");
          return analyses;
        });
      }
    });
  },

  delete: (id) => {
  }
}


module.exports = Analysis;
