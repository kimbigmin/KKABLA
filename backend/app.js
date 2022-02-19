import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import Dotenv from 'dotenv';
import login from './routes/login.js';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.js';
import search from './routes/search.js';
import post from './routes/post.js';
import board from './routes/board.js';
import mypage from './routes/mypage.js';
import home from './routes/home.js';
import findUser from './middlewares/findUser.js';

//env setting
Dotenv.config();

const app = express();

//setting
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: `${process.env.CLIENT_URL}`,
  }),
);

//Routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use('/auth', auth);
app.use('/post', findUser, post);
app.use('/mypage', findUser, mypage);
app.use('/login', login);
app.use('/search', search);
app.use('/board', board);
app.use('/', home);

try {
  app.listen(5000, () => {
    console.log('server connected');
    connectDB(process.env.MONGODB);
  });
} catch (error) {
  console.log(error);
}
