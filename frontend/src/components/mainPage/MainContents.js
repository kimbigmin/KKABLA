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
<<<<<<< HEAD
          //자유게시판 글과 개발 게시판 글을 나눈다.  
          res.data.boards
            .map((post)=>{
              if (post.type==="free"){
                setFreeBoard((prevState)=>{
                  return [post, ...prevState]
                })
              }
              else if(post.type==="develop"){
                setDevelopBoard((prevState)=>{
                  return [post, ...prevState]
                })    
              }      
            })          
=======
          // console.log(res.data.boards)
          console.log(res.data);
          setDevelopBoard((prevState) => {
            return [...prevState, ...res.data.reviews];
          });

          setFreeBoard((prevState) => {
            return [...prevState, ...res.data.boards];
          });
>>>>>>> 9fcfb97eff121c066ef522861c201a58f9cd53a5
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
