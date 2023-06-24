const multer = require('multer');
const imageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathStorage = `${__dirname}/../imagesStorage`;
    cb(null, pathStorage);
  },
  filename: function (req, file, cb) {
    const ext = file.originalname.split('.').pop();
    const filename = `image-${Date.now()}.${ext}`;
    cb(null, filename);
  }
});
const imageUploaderMiddleware = multer({ storage: imageStorage });
module.exports = imageUploaderMiddleware;
