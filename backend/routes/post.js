import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';
import upload from '../utils/storage .js';

const router = express.Router();

router.post('/free', async (req, res) => {
  const { title, contents, creator, images, type } = req.body;
  await Board.create({ title, contents, creator, images, type });
});

router.get('/review/:id', async (req, res) => {
  const { id } = req.params;
  const bootCamp = await BootCamp.findOne({ _id: id }).populate('review');

  console.log(bootCamp);
  res.send(bootCamp);
});

router.post('/review/:id', async (req, res) => {
  const { bootCamp, title, pros, cons, star, creator } = req.body;
  const bootCam = await BootCamp.findOne({ _id: bootCamp });

  const review = await Review.create({
    title,
    pros,
    cons,
    star,
    creator,
    bootCamp: bootCam,
  });
  const bootcamp = await BootCamp.findByIdAndUpdate(
    { _id: bootCamp },
    {
      $push: {
        review,
      },
    },
  );

  console.log(bootcamp);

  res.send(review);
});

router.post('/develop', async (req, res) => {
  const { title, contents, creator, images, type } = req.body;

  const develop = await Board.create({
    title,
    contents,
    creator,
    images,
    type,
  });
  res.send(develop);
});

router.post('/bootcamp', upload.single('image'), async (req, res) => {
  const { name, star, location, homepage, system } = req.body;
  const { path } = req.file;

  const bootCamp = await BootCamp.create({
    name,
    image: path,
    star,
    location,
    homepage,
    system,
  });

  res.send(bootCamp);
});

export default router;
