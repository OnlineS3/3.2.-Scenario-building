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
          return analysis.addItem(createdItem).then((result) => {
            return createdItem;
          });
        });
      }
    })
  },

  delete: (itemId, displayName) => {
    return models.Item.find({where: {id: itemId}}).then((item) => {
      if (!item) {
        console.log("No such item.");
        return false;
      } else {
        return item.getAnalysis().then((analysis) => {
          if (!analysis) {
            console.log("No such analysis.");
            return false;
          } else {
            return analysis.getUser().then((user) => {
              if (user.authUserId != displayName) {
                console.log("Unauthorized to delete this item");
                return false;
              } else {
                return item.destroy().then((result) => {
                  console.log("Item deleted.");
                  return true;
                })
              }
            })
          }
        })
      }
    })
  }
}

module.exports = Item;
