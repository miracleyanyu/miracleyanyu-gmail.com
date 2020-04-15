const mongoose = require('mongoose');

const itemSchema = require('../Item/item.schema.server');

const menuSchema = mongoose.Schema({
  items: [{
    type: mongoose.Schema.ObjectId,
    ref: 'ItemModel'
  }]
}, {collection: 'menus'});

module.exports = menuSchema;
