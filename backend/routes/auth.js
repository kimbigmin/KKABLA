import axios from 'axios';
import jwt from 'jsonwebtoken';
import express from 'express';
import getTokens from '../utils/getTokens.js';
import User from '../models/User.js';
import CryptoJS from 'crypto-js';
import cryto from 'crypto';
import { v4 as uuidv4 } from 'uuid';
import queryString from 'querystring';
import findUser from '../middlewares/findUser.js';
import Admin from '../models/Admin.js';

const router = express.Router();

router.get('/kakao', async (req, res) => {
  const { code } = req.query;
  const data = await getTokens({
    url: 'https://kauth.kakao.com/oauth/token',
    code,
    clientId: 'ca25925040f30318f70fb3c066f9444d',
    clientSecret: 'sGP8spDrGTl9d4ooxxeEhSOcaHkOHuQF',
    redirectUri: 'http://localhost:5000/auth/kakao',
  });

  const kakaoUser = await axios
    .get('https://kapi.kakao.com/v2/user/me', {
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  const token = jwt.sign(kakaoUser, process.env.JWT_SECRET);

  res.cookie('auth_token', token, {
    maxAge: 900000,
    httpOnly: true,
    secure: false,
  });

  res.redirect('http://localhost:3000');
});

router.get('/google', async (req, res) => {
  const code = req.query.code;
  const { id_token, access_token } = await getTokens({
    url: 'https://oauth2.googleapis.com/token',
    code,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    redirectUri: 'http://localhost:5000/auth/google',
  });

  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      },
    )
    .then((res) => res.data)
    .catch((error) => {
      console.error(`Failed to fetch user`);
      throw new Error(error.message);
    });

  const token = jwt.sign(googleUser, process.env.JWT_SECRET);

  res.cookie('auth_token', token, {
    maxAge: 900000,
    httpOnly: true,
    // secure: false,
  });

  res.redirect('http://localhost:3000');
});

router.get('/user', async (req, res) => {
  try {
    if (!req.cookies['auth_token']) return;

    const decode = jwt.verify(
      req.cookies['auth_token'],
      process.env.JWT_SECRET,
    );

    const hashedEmail = cryto
      .createHmac('sha256', process.env.SECRET)
      .update(decode.email || decode.kakao_account.email)
      .digest('hex');

    const hashedName = cryto
      .createHmac('sha256', process.env.SECRET)
      .update(decode.name || decode.kakao_account.profile.nickname)
      .digest('hex');

    const nickName = uuidv4().slice(0, 6);

    const user = await User.findOne({ hashedEmail, hashedName });

    // await Admin.create();

    if (user) {
      return res.send(user.nickName);
    } else {
      await User.create({ hashedEmail, hashedName, nickName });

      return res.send(nickName);
    }
  } catch (error) {
    console.log(error);
    res.send(null);
  }
});

router.delete('/logout', async (req, res) => {
  res.clearCookie('auth_token');
  res.send(null);
});

export default router;
