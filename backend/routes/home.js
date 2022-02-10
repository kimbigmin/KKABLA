import express from 'express';
import findUser from '../middlewares/findUser.js';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const boards = await Board.find({});
  const bootCamps = await BootCamp.find({});
  const reviews = await Review.find({});
  console.log(res.locals.user);
  res.send({ boards, bootCamps, reviews });
});

export default router;
