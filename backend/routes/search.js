import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { value } = req.body;

  if (value) {
    const boards = await Board.find({
      $or: [
        { title: { $regex: value, $options: 'i' } },
        { contents: { $regex: value, $options: 'i' } },
      ],
    });
    const bootCamp = await BootCamp.find({
      name: { $regex: value, $options: 'i' },
    });

    res.send({ bootCamp, boards });
  }
});

export default router;
