const express = require('express');
const router = express.Router();
const models = require('../models/index');

const analysisDAO = require('../DAO/analysis');
const userDAO = require('../DAO/user');
const itemDAO = require('../DAO/item');



router.get('/auth', (req, res) => {
  var user = {}
  if (req.session.passport && req.session.passport.user) {
    user = req.session.passport.user;
    res.send({
      "loggedIn": res.locals.loggedIn,
      "username": user.displayName
    })
  } else {
    res.send({
      "loggedIn": false
    })
  }
});

// Get all analyses for a specific username

router.get('/analyses', (req, res) => {
  var user = {}
  if (req.session.passport && req.session.passport.user) {
    user = req.session.passport.user;
    analysisDAO.findAll(user.displayName).then((analyses) => {
      console.log("Returning requested analyses: ", analyses)
      return res.status(200).json({"analyses": analyses});
    });
  } else {
    return res.status(403).json({"status": "Unauthorized"});
  }
});


// Get a specific analysis by its id
router.get('/analysis', (req, res) => {
  var user = {}
  if (req.session.passport && req.session.passport.user) {
    user = req.session.passport.user;
    const analysisId = req.query.analysisId;
    analysisDAO.find(analysisId, user.displayName).then((analysis) => {
      if (!analysis) {
        return res.status(404).json({"err": "Not found."})
      } else {
        return res.send(analysis)
      }
    })
  } else {
    return res.status(403).json({"status": "Unauthorized"});
  }
});


// Create new analysis
router.post('/analysis', (req, res) => {
  console.log("Creating a new analysis...");
  console.log(req.session.passport);
  var user = {}
  if (req.session.passport && req.session.passport.user) {
    console.log("Was authorized.");
    user = req.session.passport.user;
    const name = req.body.name;
    analysisDAO.create(name, user.displayName).then((createdAnalysis) => {
      console.log("Boolean value returned: ", createdAnalysis)
      if (createdAnalysis) {
        return res.status(201).json({"status": true, "analysis": createdAnalysis});
      } else {
        return res.status(404).json({"status": "Failed to create a new analysis"});
      }
    })
  } else {
    return res.status(403).json({"status": "Unauthorized"});
  }
});


/* Create a new analysis item, and add it to an existing analysis.
* An analysis must always exist before an item may be added.
*/

router.post('/item', (req, res) => {
  var user = {}
  if (req.session.passport && req.session.passport.user) {
    user = req.session.passport.user;
    const item = req.body.item;
    const analysisId = req.body.analysisId;
    analysisDAO.checkUserAccess(analysisId, user.displayName).then((hasAccess) => {
      if (!hasAccess) {
        return res.status(403).json({"status": "Unauthorized"});
      } else {
        itemDAO.create(item, analysisId, user.displayName).then((createdItem) => {
          if (createdItem) {
            return res.status(201).json({"status": "Item created."});
          } else {
            return res.status(403).json({"status": "No item was created."});
          }
        });
      }
    });
  } else {
    return res.status(403).json({"status": "Unauthorized"});
  }
});

module.exports = router;
