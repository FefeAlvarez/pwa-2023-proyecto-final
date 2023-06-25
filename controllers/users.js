const { userModel } = require('../models');
const { errorHandler } = require('../utils/errorHandler');

const registerUser = async (req, res) => {
  try {
    const { body } = req;
    const data = await userModel.create(body);

    data.set('password', undefined, { strict: false });

    res.status(201);
    res.send({ data });
  } catch (e) {
    errorHandler(res, 'ERROR REGISTRANDO USUARIO NUEVO');
  }
};
const loginUser = async (req, res) => {
  const { body } = req;
  const user = await userModel.findOne({ email: body.email });

  if (!user) {
    errorHandler(res, 'USER_NOT_EXISTS', 404);
    return;
  }
  user.set('password', undefined, { strict: false });
  const data = {
    user
  };
  res.send({ data });
};
module.exports = { registerUser, loginUser };
