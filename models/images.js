const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const ImageSchema = new mongoose.Schema(
  {
    url: {
      type: String
    },
    filename: {
      type: String
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

ImageSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('images', ImageSchema);
