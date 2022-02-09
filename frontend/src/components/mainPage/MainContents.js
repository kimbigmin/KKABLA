import HotBootCampBoard from './BoardsCategory/HotBootCampBoard';
import BoardsWrapper from './BoardsCategory/BoardsWrapper';
import Banner from './BoardsCategory/Banner';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainContents({ isLogin }) {
  const [freeBoard, setFreeBoard] = useState([]);
  const [reviewBoard, setReviewBoard] = useState([]);
  const [developBoard, setDevelopBoard] = useState([]);
  const [bootCamp, setBootCamp] = useState([]);

  useEffect(() => {
    const postReq = async () => {
      axios
        .get('http://localhost:5000/')
        .then((res) => {
          // console.log(res.data.boards)
          console.log(res.data);
          setDevelopBoard((prevState) => {
            return [...prevState, ...res.data.reviews];
          });

          setFreeBoard((prevState) => {
            return [...prevState, ...res.data.boards];
          });
        })
        .catch((err) => console.log(err));
    };
    postReq();
  }, []);

  return (
    <>
      <Banner></Banner>
      <Container>
        <HotBootCampBoard isLogin={isLogin} />
        <BoardsWrapper
          isLogin={isLogin}
          freeBoard={freeBoard}
          developBoard={developBoard}
        />
      </Container>
    </>
  );
}
