import HotBootCampBoard from './HotBootCampBoard';
import GeneralPostsBoard from './postBoards/GeneralPostsBoard';
import PostsBoard from './PostsBoard';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainContents() {
  const [freeBoard, setFreeBoard] = useState([]);
  const [reviewBoard, setReviewBoard] = useState([]);
  const [developBoard, setDevelopBoard] = useState([]);
  const [bootCamp, setBootCamp] = useState([]);

  useEffect(() => {
    const postReq = async () => {
      axios
        .get('http://localhost:5000/')
        .then((res) => res.data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    };

    postReq();
  }, []);

  return (
    <Container>
      <HotBootCampBoard />
      <PostsBoard />
    </Container>
  );
}
