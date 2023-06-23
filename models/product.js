const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const productSchema = new mongoose.Schema({
  title: { type: String },
  price: { type: Number },
  description: { type: String },
  image: { type: String },
  category: { type: String }
});
productSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('product', productSchema);
