import HotBootCampBoard from 'components/mainPage/BoardsCategory/HotBootCampBoard';
import BoardsWrapper from 'components/mainPage/BoardsCategory/BoardsWrapper';
import Banner from 'components/mainPage/BoardsCategory/Banner';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DefaultData from 'components/defaultData';
export default function MainContents({ isLogin }) {
  const [totalBoards,setTotalBoards]=useState(DefaultData);
  
  useEffect(()=>{
    const postReq = () => {
      axios
        .get('http://localhost:5000/', { withCredentials: true })
        .then((res) => {
          setTotalBoards(res.data);
        })
        .catch((err) => console.log(err));
    };
    postReq();
  },[])  

  return (
    <>
      <Banner></Banner>
      <Container>
        <HotBootCampBoard isLogin={isLogin} hotBootCamps={totalBoards?.bootCamps}/>
        <BoardsWrapper
          isLogin={isLogin}
          freeBoard={totalBoards?.boards}
          developBoard={totalBoards?.develop}
          hotPostsBoard={totalBoards?.like}
        />    
      </Container>
    </>
  );
}
