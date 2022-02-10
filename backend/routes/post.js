import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';
import upload from '../utils/storage .js';
import mongoose from 'mongoose';

const router = express.Router();

router.post('/free', upload.array('image'), async (req, res) => {
  const { title, contents, creator, type } = req.body;

  const images = req.files ? req.files.map((file) => file.location) : '';

  await Board.create({ title, contents, creator, images, type });
  return res.redirect('http://localhost:3000/board/free');
});

router.get('/review/:id', async (req, res) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    const bootCamp = await BootCamp.findOne({ _id: id }).populate('review');
    res.send(bootCamp);
  }
});

router.post('/review/:id', async (req, res) => {
  const { bootCamp, title, pros, cons, star, creator } = req.body;
  if (mongoose.Types.ObjectId.isValid(bootCamp)) {
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

    res.send(review);
  }
});

router.post('/develop', upload.array('image'), async (req, res) => {
  const { title, contents, creator, type } = req.body;

  const images = req.files ? req.files.map((file) => file.location) : '';
  const develop = await Board.create({
    title,
    contents,
    creator,
    images,
    type,
  });
  res.redirect('http://localhost:3000/board/develop');
});

router.post('/bootcamp', upload.single('image'), async (req, res) => {
  const { name, loca, homePage, system } = req.body;
  const { location } = req.file;

  const bootCamp = await BootCamp.create({
    name,
    image: location,
    location: loca,
    homePage,
    system,
  });

  res.send(bootCamp);
});

export default router;
