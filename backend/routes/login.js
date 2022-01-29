import { OAuth2Client } from 'google-auth-library';
import express from 'express';
import User from '../models/User.js';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import querystring from 'querystring';
import axios from 'axios';

const router = express.Router();
// const client = new OAuth2Client(process.env.CLIENT_ID);

// const users = [];

// function upsert(array, item) {
//   const i = array.findIndex((_item) => _item.email === item.email);
//   if (i > -1) {
//     array[i] = item;
//   } else {
//     array.push(item);
//   }
// }

// router.post('/google', async (req, res) => {
//   const { token } = req.body;
//   const ticket = await client.verifyIdToken({
//     idToken: token,
//     audience: process.env.CLIENT_ID,
//   });

//   const { name, email } = ticket.getPayload();
//   upsert(users, { name, email });

//   console.log(users);

//   const user = await User.findOne({ name, email });

//   const webToken = jwt.sign(user, 'secret', { expiresIn: '1h' });

//   res.cookie('webToken', webToken, {
//     httpOnly: true,
//   });

//   if (user) {
//     res.json([user.name, user.email, user.auth]);
//   } else {
//     const createdUser = await User.create({ name, email, shortId: nanoid() });
//     res.json(createdUser);
//   }
// });

function getGoogleAuthUrl() {
  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const option = {
    redirect_uri: 'http://localhost:5000/auth/google',
    client_id: process.env.CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  return `${rootUrl}?${querystring.stringify(option)}`;
}

router.get('/google', (req, res) => {
  return res.send(getGoogleAuthUrl());
});

export default router;
