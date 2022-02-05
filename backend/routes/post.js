import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';
import Review from '../models/Review.js';

const router = express.Router();

router.post('/free', async (req, res) => {
  const { title, contents, creator, images, type } = req.body;

  await Board.create({ title, contents, creator, images, type });
});

router.post('/review', async (req, res) => {
  const { bootCamp, title, pros, cons, star, creator } = req.body;
  console.log(req.body);

  await Review.create({ title, pros, cons, star, creator, bootCamp });
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

router.post('/bootcamp', async (req, res) => {
  const { name, image, star, location, homepage, system } = req.body;

  const bootCamp = await BootCamp.create({
    name,
    image,
    star,
    location,
    homepage,
    system,
  });
  res.send(bootCamp);
});

export default router;
