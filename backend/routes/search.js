import express from 'express';
import Board from '../models/Board.js';
import BootCamp from '../models/BootCamp.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { value } = req.body;

  if (value) {
    const boards = await Board.find({
      // $or: [
      //   { title: { $search: value, $options: 'ig' } },
      //   { contents: { $search: value, $options: 'ig' } },
      // ],
    });
    const bootCamp = await BootCamp.find({
      name: { $regex: `/${value}/`, $options: 'ig' },
    });
    console.log(boards, bootCamp);
    res.send({ boards, bootCamp });
  }
});

export default router;
