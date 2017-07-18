const models = require('../models/index');

const Item = {

  create: (item, analysisId, userId) => {
    return models.Analysis.find({where: {id: analysisId}}).then((analysis) => {
      if (!analysis) {
        return false;
      } else {
        return models.Item.create({
          label: item.label,
          uncertainty: item.uncertainty,
          impact: item.impact,
        }, {returning: true}).then((createdItem) => {
          analysis.addItem(createdItem);
          return true;
        });
      }
    })
  }
}

module.exports = Item;
