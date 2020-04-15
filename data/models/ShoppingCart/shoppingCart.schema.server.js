const mongoose = require('mongoose');

const itemSchema = require('../Item/item.schema.server');

const shoppingCartSchema = mongoose.Schema({
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ItemModel'
  }]
}, {collection: 'carts'});

module.exports = shoppingCartSchema;
