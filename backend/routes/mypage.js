import express from 'express';
import User from '../models/User.js';
import Board from '../models/Board.js';
import Review from '../models/Review.js';
import upload from '../utils/storage .js';
import axios from 'axios';
import fs from 'fs';

const router = express.Router();

router.get('/', async (req, res) => {
  if (!req.cookies['auth_token']) return;

  const decode = jwt.verify(req.cookies['auth_token'], process.env.JWT_SECRET);
  const user = await User.findOne({
    hashedEmail: decode.email || decode.kakao_account.email,
    hashedName: decode.name || decode.kakao_account.profile.nickname,
  });

  console.log(user);

  if (user.nickName) {
    const boards = await Board({ creator: user.nickName });
    const reviews = await Review({ creator: user.nickName });
    console.log([boards, reviews, user.auth]);
    res.send({ boards, reviews, userAuth: user.auth });
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
  console.log(sumText);
});

export default router;
