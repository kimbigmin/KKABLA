import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';

const router = express.Router();

//일반 게시판
router.get('/free', async (req, res) => {
  const borads = await Board.find({ type: 'free' });
  res.send(borads);
});

router.get('/develop', async (req, res) => {
  const borads = await Board.find({ type: 'develop' });
  res.send(borads);
});

//review 게시판
router.get('/review', async (req, res) => {
  const borads = await BootCamp.find({}).sort({ star: 1 });
  res.send(borads);
});

router.get('/review/:id', async (req, res) => {
  const { id } = req.params;
  const borads = await Review.find({ bootCamp: id });

  res.send(borads);
});

export default router;
