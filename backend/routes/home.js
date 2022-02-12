import express from 'express';
import findUser from '../middlewares/findUser.js';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const boards = await Board.find({ type: 'free' })
    .sort({
      updatedAt: -1,
    })
    .limit(9);

  const develop = await Board.find({ type: 'develop' })
    .sort({
      updatedAt: -1,
    })
    .limit(9);

  const like = await Board.find({}).sort({ like: -1 }).limit(19);

  const bootCamps = await BootCamp.find({});
  const reviews = await Review.find({}).sort({
    updatedAt: -1,
  });

  res.send({ boards, develop, bootCamps, like });
});

export default router;
