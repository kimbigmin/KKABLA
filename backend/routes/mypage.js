import express from 'express';
import User from '../models/User.js';
import Board from '../models/Board.js';
import Review from '../models/Review.js';
import Comment from '../models/Comment.js';
import upload from '../utils/userAuth.js';
import axios from 'axios';
import fs from 'fs';
import Admin from '../models/Admin.js';
import certification from '../utils/certification.js';
import BootCamp from '../models/BootCamp.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const user = res.locals.user;
  let data;
  if (user.isAdmin) {
    // const admin = await Admin.findOne({})
    //   .populate('boards')
    //   // .populate('comments')
    //   .lean();
    const [resportBoard, reportComment] = await Promise.all([
      Board.find({ isBlind: true }),
      Comment.find({ isBlind: true }),
    ]);

    data = { resportBoard, reportComment };
  } else {
    const [boards, likeBoard, reviews] = await Promise.all([
      Board.find({ creator: user.nickName }).lean(),
      Board.find({ like: { $in: [user.nickName] } }).lean(),
      Review.find({ creator: user.nickName }).lean(),
    ]);
    data = { boards, reviews, userAuth: user.auth, likeBoard };
  }
  res.send(data);
});

router.delete('/', async (req, res) => {
  const user = res.locals.user;
  if (user) {
    const [Review, Board, User] = await Promise.all([
      Review.deleteMany({ creator: user.nickName }),
      Board.deleteMany({ creator: user.nickName }),
      User.findOneAndDelete({ nickName: user.nickName }),
    ]);
    res.clearCookie('auth_token');
    res.send({ message: '회원 탈퇴 완료' });
  } else {
    res.send({ message: '해당 유저가 존재하지 않습니다.' });
  }
});

router.post('/auth', upload.single('image'), async (req, res) => {
  const { path } = req.file;
  const { word } = req.body;
  const readFile = fs.readFileSync(`./${path}`);
  const encoding = Buffer.from(readFile).toString('base64');

  fs.unlink(path, (err) => {
    if (err) {
      console.error(err);
    }
  });

  let config = {
    headers: {
      'Content-Type': 'application/json',
      'X-OCR-SECRET': process.env.OCR_SECRET,
    },
  };
  let timestamp = new Date().getTime();
  let sumText = '';

  await axios
    .post(
      process.env.OCR_API,
      {
        images: [
          {
            format: 'png',
            name: 'medium',
            data: encoding,
          },
        ],
        lang: 'ko',
        requestId: 'string',
        resultType: 'string',
        timestamp: timestamp,
        version: 'V1',
      },
      config,
    )
    .then((res) => {
      res.data.images[0].fields.forEach((el) => {
        sumText += ' ' + el.inferText;
      });
    })
    .catch((err) => console.log(err));

  const u = res.locals.user;
  console.log(u);
  if (certification(sumText, word)) {
    const bootCamp = await BootCamp.find({
      name: { $regex: word, $options: 'i' },
    });
    const user = await User.findOneAndUpdate(
      { _id: u._id },
      {
        $push: { auth: [word] },
      },
    );
    res.send(user);
  }
});

export default router;
