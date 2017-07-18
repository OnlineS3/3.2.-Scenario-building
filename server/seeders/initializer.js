'use strict';

const db = require('../models/index');

const initializer = {
  initDb: () => {
    db.sequelize.sync({force: true})
  },

  initModels: (force = false) => {
    db.User.sync({force: force})
    db.Analysis.sync({force: force})
    db.Item.sync({force: force})
  }
}

module.exports = initializer;
