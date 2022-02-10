import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import cryto from 'crypto';

const findUser = async (req, res, next) => {
  if (!req.cookies['auth_token']) return;
  try {
    const decode = jwt.verify(
      req.cookies['auth_token'],
      process.env.JWT_SECRET,
    );
    const hashedEmail = cryto
      .createHmac('sha256', process.env.SECRET)
      .update(decode.email || decode.kakao_account.email)
      .digest('hex');

    const hashedName = cryto
      .createHmac('sha256', process.env.SECRET)
      .update(decode.name || decode.kakao_account.profile.nickname)
      .digest('hex');

    const user = await User.findOne({
      hashedEmail,
      hashedName,
    });

    res.locals.user = user;
    next();
  } catch (error) {
    res.send({ message: '존재하지 않는 유저입니다.' });
  }
};

export default findUser;
