import express from 'express';
import User from '../models/User.js';
import { nanoid } from 'nanoid';
import jwt from 'jsonwebtoken';
import querystring from 'querystring';
import axios from 'axios';

const router = express.Router();

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
