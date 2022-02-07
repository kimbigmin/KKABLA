import HotBootCampBoard from './BoardsCategory/HotBootCampBoard';
import BoardsWrapper from './BoardsCategory/BoardsWrapper';
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
          setDevelopBoard((prevState)=>{
            return [...prevState, ...res.data.reviews]  
          })

          setFreeBoard((prevState)=>{
            return [...prevState, ...res.data.boards]  
          })
        })      
        .catch((err) => console.log(err));
    };
    postReq();
  }, []);

  return (
    <Container>
      <HotBootCampBoard isLogin={ isLogin } />
      <BoardsWrapper freeBoard={freeBoard} developBoard={developBoard}/>
    </Container>
  );
}
