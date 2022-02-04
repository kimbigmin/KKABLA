import express from 'express';
import User from '../models/User.js';
import Board from '../models/Board.js';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.cookies['auth_token']) return;

  const decode = jwt.verify(req.cookies['auth_token'], process.env.JWT_SECRET);

  const user = await User.findOne({
    hashedEmail: decode.email,
    hashedName: decode.name,
  });
  console.log(user);
  if (user.nickName) {
    const boards = await Board({ creator: user.nickName });
    const reviews = await Review({ creator: user.nickName });
    console.log([boards, reviews, user.auth]);
    res.send([boards, reviews, user.auth]);
  }
});

export default router;
