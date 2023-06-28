const jwtoken = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const signToken = async (user) => {
  const sign = await jwtoken.sign(
    {
      _id: user._id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: '4h'
    }
  );

  return sign;
};

const verifyToken = async (tokenJwt) => {
  try{
    const token= await jwtoken.verify(tokenJwt, JWT_SECRET)
    return token
  }catch(e){
      return null
  }
};

module.exports={signToken,verifyToken}