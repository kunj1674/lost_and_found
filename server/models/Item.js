// models/Item.js
const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now },
    found: { type: Boolean, default: false }
});

module.exports = mongoose.model('Item', ItemSchema);
