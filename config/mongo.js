const mongoose = require('mongoose');

const mongoDBConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('°°° Conexion a MongoDB exitosa °°°');
  } catch (error) {
    console.log('Error de conexion a MongoDB: ', error);
  }
};
module.exports = mongoDBConnect;
