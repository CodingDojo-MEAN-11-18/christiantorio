const mongoose = require('mongoose');
const { Schema } = mongoose;

let QuoteSchema = new Schema({
  name: { type: String, required: true, minlength: 1 },
  quote: { type: String, required: true, minlength: 1 },
}, { timestamps: true });

module.exports = mongoose.model('Quote', QuoteSchema);
