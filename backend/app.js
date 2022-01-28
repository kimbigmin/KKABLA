import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import Dotenv from 'dotenv';
import login from './routes/login.js';
import cookieParser from 'cookie-parser';
import auth from './routes/auth.js';

//env setting
Dotenv.config();

const app = express();

//setting
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:3000',
  }),
);
app.use(cookieParser());

//Routes
app.use('/login', login);
app.use('/auth', auth);

try {
  app.listen(5000, () => {
    console.log('server connected');
    connectDB(process.env.MONGODB);
  });
} catch (error) {
  console.log(error);
}
