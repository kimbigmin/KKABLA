import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';

const router = express.Router();

router.get('/:value', async (req, res) => {
  const { value } = req.params;

  if (value) {
    const [bootCamp, boards] = await Promise.all([
      BootCamp.find({
        name: { $regex: value, $options: 'i' },
      }),
      Board.find({
        $or: [
          { title: { $regex: value, $options: 'i' } },
          { contents: { $regex: value, $options: 'i' } },
        ],
      }),
    ]);
    console.log(bootCamp, boards);
    res.send({ bootCamp, boards });
  }
});

router.get('/bootcamp/:value', async (req, res) => {
  const { value } = req.params;

  if (value) {
    const bootCamp = await BootCamp.find({
      name: { $regex: value, $options: 'i' },
    });

    console.log(bootCamp);
    res.send(bootCamp);
  }
});

export default router;
