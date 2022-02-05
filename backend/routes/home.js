import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const boards = await Board.find({});
  //   const free = boards.filter((board) => board.type === 'free');
  const bootCamps = await BootCamp.find({});
  const reviews = await Review.find({});

  res.send({ boards, bootCamps, reviews });
});

export default router;
