import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const a = await Board.find({});

  const [boards, develop, like, bootCamps] = await Promise.all([
    Board.find({ type: 'free' })
      .sort({
        createdAt: -1,
      })
      .limit(9)
      .lean(),
    Board.find({ type: 'develop' })
      .sort({
        createdAt: -1,
      })
      .limit(9)
      .lean(),
    Board.find({}).sort({ like: -1 }).limit(19).lean(),
    BootCamp.find({})
      .sort({
        like: -1,
      })
      .limit(4)
      .lean(),
  ]);
  res.send({ boards, develop, bootCamps, like });
});

export default router;
