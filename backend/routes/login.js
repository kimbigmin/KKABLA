import { OAuth2Client } from 'google-auth-library';
import express from 'express';
import User from '../models/User.js';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';

const router = express.Router();
const client = new OAuth2Client(process.env.CLIENT_ID);

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) {
    array[i] = item;
  } else {
    array.push(item);
  }
}

router.post('/google', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });

  const { name, email } = ticket.getPayload();
  upsert(users, { name, email });

  console.log(users);

  const user = await User.findOne({ name, email });
  const webToken = jwt.sign(user, 'secret', { expiresIn: '1h' });

  if (user) {
    res.json([user.name, user.email, user.auth]);
  } else {
    const createdUser = await User.create({ name, email, shortId: nanoid() });
    res.json(createdUser);
  }
});

export default router;
