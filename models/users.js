const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      required: [true, 'Por favor, ingrese un email'],
      unique: true
    },
    password: {
      type: String,
      required: [true, 'Por favor, ingrese una contraseña'],
      minlength: 6,
      maxlength: 25
    },
    role: {
      type: ['user', 'admin'],
      default: 'user'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
UserSchema.plugin(mongooseDelete, { overrideMethods: 'all' });
module.exports = mongoose.model('users', UserSchema);
