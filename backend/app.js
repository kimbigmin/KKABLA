import express from 'express';
import cors from 'cors';
import connectDB from './db/connectDB.js';
import Dotenv from 'dotenv';
import login from './routes/login.js';

Dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/login', login);

try {
  app.listen(5000, () => {
    console.log('server connected');
    connectDB(process.env.MONGODB);
  });
} catch (error) {
  console.log(error);
}
