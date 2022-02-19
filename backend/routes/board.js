import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import mongoose from 'mongoose';

const router = express.Router();

//자유 게시판
router.get('/free', async (req, res) => {
  const { page } = req.query;
  const doc = await Board.countDocuments({ type: 'free' });

  let limit = doc - (page - 1) * 10 >= 10 ? 10 : doc - (page - 1) * 10;

  if (limit > 0 && page > 0) {
    const borads = await Board.find({ type: 'free' })
      .skip((page - 1) * 10)
      .limit(limit)
      .sort({
        createdAt: -1,
      })
      .lean();
    res.send(borads);
  } else {
    res.send({ message: '게시물이 없습니다.' });
  }
});

//자유 게시판 상세
router.get('/free/:id', async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const boards = await Board.find({ _id: id }).populate('comments').lean();
    res.send(boards);
  }
});

//개발 이야기
router.get('/develop', async (req, res) => {
  const { page } = req.query;
  const doc = await Board.countDocuments({ type: 'develop' });

  let limit = doc - (page - 1) * 10 >= 10 ? 10 : doc - (page - 1) * 10;

  if (limit > 0 && page > 0) {
    const borads = await Board.find({ type: 'develop' })
      .skip((page - 1) * 10)
      .limit(limit)
      .sort({
        createdAt: -1,
      })
      .lean();
    res.send(borads);
  } else {
    res.send({ message: '게시물이 없습니다.' });
  }
});

//개발 이야기 상세
router.get('/develop/:id', async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const board = await Board.find({ _id: id }).populate('comments').lean();
    res.send(board);
  }
});

//리뷰 게시판
router.get('/review', async (req, res) => {
  const borads = await BootCamp.find({}).lean();
  res.send(borads);
});

//리뷰 게시판 상세
router.get('/review/:id', async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const bootCamp = await BootCamp.findOne({ _id: id })
      .populate('review')
      .lean();

    res.send(bootCamp);
  }
});

export default router;
