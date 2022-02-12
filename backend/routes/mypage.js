import express from 'express';
import User from '../models/User.js';
import Board from '../models/Board.js';
import Review from '../models/Review.js';
import upload from '../utils/userAuth.js';
import axios from 'axios';
import fs from 'fs';
import Admin from '../models/Admin.js';
import certification from '../utils/certification.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const user = res.locals.user;

  if (user.isAdmin) {
    const admin = await Admin.find({}).lean();
    res.send(admin);
  } else {
    const [boards, reviews] = await Promise.all([
      Board.find({ creator: user.nickName }).lean(),
      Review.find({ creator: user.nickName }).lean(),
    ]);

    res.send({ boards, reviews, userAuth: user.auth });
  }
});

router.delete('/', async (req, res) => {
  const user = res.locals.user;
  if (user) {
    await Review.deleteMany({ creator: user.nickName });
    await Board.deleteMany({ creator: user.nickName });
    await User.findOneAndDelete({ nickName: user.nickName });
    res.clearCookie('auth_token');
    res.send({ message: '회원 탈퇴 완료' });
  } else {
    res.send({ message: '해당 유저가 존재하지 않습니다.' });
  }
});

router.post('/auth', upload.single('image'), async (req, res) => {
  const { path } = req.file;

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

  // if (certification(sumText)) {
  //   const u = res.locals.user;
  //   const user = await User.findOneAndUpdate({_id:u._id},{
  //   auth
  //   })
  // }
});

export default router;
