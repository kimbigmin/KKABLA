import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';
import upload from '../utils/storage .js';
import mongoose from 'mongoose';
import User from '../models/User.js';
import Comment from '../models/Comment.js';
import Admin from '../models/Admin.js';

const router = express.Router();

//리뷰 작성
router.post('/review/:id', async (req, res) => {
  const { title, pros, cons, star, creator } = req.body;
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const bootCam = await BootCamp.findOne({ _id: id });

    const review = await Review.create({
      title,
      pros,
      cons,
      star,
      creator,
      bootCamp: bootCam,
    });

    const bootcamp = await BootCamp.findOneAndUpdate(
      { _id: id },
      {
        $push: {
          review,
        },
        $set: {
          star: (
            (bootCam.star * bootCam.review.length + star) /
            (bootCam.review.length + 1)
          ).toFixed(1),
        },
      },
    );
    res.send(bootcamp);
  }
});

//개발 게시판 글 작성
router.post('/develop', upload.array('image'), async (req, res) => {
  const { title, contents, creator, type } = req.body;

  const images = req.files ? req.files.map((file) => file.location) : '';
  const develop = await Board.create({
    title,
    contents,
    creator,
    images,
    type,
  });
  res.redirect('http://localhost:3000/board/develop');
});

//자유 게시판 글 작성
router.post('/free', upload.array('image'), async (req, res) => {
  const { title, contents, creator, type } = req.body;

  const images = req.files ? req.files.map((file) => file.location) : '';

  await Board.create({ title, contents, creator, images, type });
  return res.redirect('http://localhost:3000/board/free');
});

// 게시판 상세에서 댓글 달기
router.post('/comment/:id', async (req, res) => {
  const { contents } = req.body;
  const { id } = req.params;
  const comments = await Comment.create({
    nickName: res.locals.user.nickName,
    contents: 'test123123',
  });
  const board = await Board.findOneAndUpdate(
    { _id: id },
    {
      $push: { comments },
    },
  );
  // res.send({ message: '성공적으로 댓글이 달렸습니다.' });
  res.send(board);
});

//게시판 상세에서 좋아요 누르기
router.get('/like/:id', async (req, res) => {
  const { id } = req.params;
  const userId = res.locals.user._id;
  if (mongoose.Types.ObjectId.isValid(id)) {
    if (!userId) res.send({ message: '존재하지 않는 유저입니다.' });
    const boolean = await Board.findOne({ _id: id, like: { $in: [userId] } });
    if (boolean) {
      const board = await Board.findOneAndUpdate(
        { _id: id },
        { $pull: { like: { $in: [userId] } } },
      );
      res.send(board);
    } else {
      const board = await Board.findOneAndUpdate(
        { _id: id },
        { $addToSet: { like: userId } },
      );
      res.send(board);
    }
  } else {
    res.send({ message: '존재하지 않는 페이지입니다.' });
  }
});

//게시판 상세에서 신고하기
router.get('/report/:id', async (req, res) => {
  const { id } = req.params;
  const userId = res.locals.user._id;

  if (mongoose.Types.ObjectId.isValid(id)) {
    if (!userId) res.send({ message: '존재하지 않는 유저입니다.' });
    const board = await Board.findOneAndUpdate(
      { _id: id },
      { $addToSet: { report: userId } },
    );

    // if(board.report.length + 1 > 2){
    //   await Admin.
    // }

    res.send(board);
  }
});

//부트캠프 기관 등록하기
router.post('/bootcamp', upload.single('image'), async (req, res) => {
  const { name, loca, homePage, system } = req.body;
  const { location } = req.file;

  const bootCamp = await BootCamp.create({
    name,
    image: location,
    location: loca,
    homePage,
    system,
    star: 0,
  });

  res.send(bootCamp);
});

export default router;
