const mongoose = require('mongoose');
const { Schema } = mongoose;

let OwlSchema = new Schema({
  name: { type: String, required: true, minlength: 1 },
  food: { type: String, required: true, minlength: 1 },
  hangout: { type: String, required: true, minlength: 1 }
}, { timestamps: true });

module.exports = mongoose.model('Owl', OwlSchema);
