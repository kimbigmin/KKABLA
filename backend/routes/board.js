import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';
import mongoose from 'mongoose';
import User from '../models/User.js';
import findUser from '../middlewares/findUser.js';

const router = express.Router();

//자유 게시판
router.get('/free', async (req, res) => {
  const borads = await Board.find({ type: 'free' }).sort({
    updatedTime: 'desc',
  });

  res.send(borads);
});

router.get('/free/:id', async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    const board = await Board.find({ _id: id });
    res.send(board);
  }
});

router.get('/free/:id/like', findUser, async (req, res) => {
  const { id } = req.params;
  const nickName = res.locals.user.nickName;
  console.log(id);
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await User.findOne({ nickName });

    if (!user) res.send({ message: '존재하지 않는 유저입니다.' });

    const boolean = await Board.findOne({
      _id: id,
      like: { $in: [user._id] },
    });

    if (boolean) {
      const board = await Board.findOneAndUpdate(
        { _id: id },
        { $pull: { like: { $in: [user._id] } } },
      );
      res.send(board);
    } else {
      const board = await Board.findOneAndUpdate(
        { _id: id },
        { $addToSet: { like: user._id } },
      );
      res.send(board);
    }
  } else {
    res.send({ message: '존재하지 않는 페이지입니다.' });
  }
});

router.get('/free/:id/report', findUser, async (req, res) => {
  const { id } = req.params;

  const { nickName } = req.body;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await User.findOne({ nickName });
    if (!user) res.send({ message: '존재하지 않는 유저입니다.' });
    const board = await Board.findOneAndUpdate(
      { _id: id },
      { $addToSet: { report: user._id } },
    );
    res.send(board);
  } else {
    res.send({ message: '존재하지 않는 페이지입니다.' });
  }
});

//개발 이야기
router.get('/develop', async (req, res) => {
  const borads = await Board.find({ type: 'develop' }).sort({
    updatedTime: 'desc',
  });

  res.send(borads);
});

router.get('/develop/:id', async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const board = await Board.find({ _id: id });
    res.send(board);
  }
});

router.get('/develop/:id/like', findUser, async (req, res) => {
  const { id } = req.params;
  const { nickName } = req.body;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await User.findOne({ nickName });

    if (!user) res.send({ message: '존재하지 않는 유저입니다.' });

    if (boolean) {
      const board = await Board.findOneAndUpdate(
        { _id: id },
        { $pull: { like: { $in: [user._id] } } },
      );
      res.send(board);
    } else {
      const board = await Board.findOneAndUpdate(
        { _id: id },
        { $addToSet: { like: user._id } },
      );
      res.send(board);
    }
  } else {
    res.send({ message: '존재하지 않는 페이지입니다.' });
  }
});

router.get('/develop/:id/report', findUser, async (req, res) => {
  const { id } = req.params;
  const { nickName } = req.body;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const user = await User.findOne({ nickName });
    if (!user) res.send({ message: '존재하지 않는 유저입니다.' });
    const board = await Board.findOneAndUpdate(
      { _id: id },
      { $addToSet: { report: user._id } },
    );
    res.send(board);
  }
});

//리뷰 게시판
router.get('/review', async (req, res) => {
  const borads = await BootCamp.find({}).sort({
    updatedTime: 'desc',
  });
  res.send(borads);
});

router.get('/review/:id', async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const bootCamp = await BootCamp.findOne({ _id: id }).populate('review');
    res.send(bootCamp);
  }
});

export default router;
