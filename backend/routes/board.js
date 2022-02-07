import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';

const router = express.Router();

//자유 게시판
router.get('/free', async (req, res) => {
  const borads = await Board.find({ type: 'free' });
  res.send(borads);
});

router.get('/free/:id', async (req, res) => {
  const { id } = req.params;
  const borad = await Board.find({ _id: id });
  res.send(borad);
});

//개발 이야기
router.get('/develop', async (req, res) => {
  const borads = await Board.find({ type: 'develop' });
  res.send(borads);
});

router.get('/develop/:id', async (req, res) => {
  const { id } = req.params;
  const borad = await Board.find({ _id: id });
  res.send(borad);
});

//리뷰 게시판
router.get('/review', async (req, res) => {
  const borads = await BootCamp.find({}).sort({ star: 1 });
  res.send(borads);
});

router.get('/review/:id', async (req, res) => {
  const { id } = req.params;
  const bootCamp = await BootCamp.findOne({ _id: id });
  const reviews = await Review.find({ bootCamp: bootCamp._id });
  res.send({ reviews, reviews });
});

export default router;
