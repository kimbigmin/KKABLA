import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const findUser = async (req, res, next) => {
  console.log(req.cookies);
  if (!req.cookies['auth_token']) return;
  try {
    const decode = jwt.verify(
      req.cookies['auth_token'],
      process.env.JWT_SECRET,
    );

    const user = await User.findOne({
      hashedEmail: decode.email || decode.kakao_account.email,
      hashedName: decode.name || decode.kakao_account.profile.nickname,
    });

    next();
  } catch (error) {
    res.send({ message: '존재하지 않는 유저입니다.' });
  }
};

export default findUser;
