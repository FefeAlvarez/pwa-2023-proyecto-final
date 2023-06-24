const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String
    },
    price: {
      type: Number
    },
    image: {
      type: String
    },
    category: {
      type: String
    },
    description: {
      type: String
    },
    imageId: {
      type: mongoose.Types.ObjectId
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
ProductSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('products', ProductSchema);
