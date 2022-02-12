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
        .get('http://localhost:5000/', { withCredentials: true })
        .then((res) => {
          //자유게시판 글과 개발 게시판 글을 나눈다.
          res.data.boards.map((post) => {
            if (post.type === 'free') {
              setFreeBoard((prevState) => {
                return [post, ...prevState];
              });
            } else if (post.type === 'develop') {
              setDevelopBoard((prevState) => {
                return [post, ...prevState];
              });
            }
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
