import HotBootCampBoard from 'components/mainPage/BoardsCategory/HotBootCampBoard';
import BoardsWrapper from 'components/mainPage/BoardsCategory/BoardsWrapper';
import Banner from 'components/mainPage/BoardsCategory/Banner';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainContents({ isLogin }) {
  const [totalBoards,setTotalBoards]=useState();
  
  useEffect(()=>{
    const postReq = async () => {
      await axios
      .get('http://localhost:5000/', { withCredentials: true })
      .then((res) => {
        setTotalBoards(()=>{
          return(
            <>
              <HotBootCampBoard isLogin={isLogin} hotBootCamps={res.data.bootCamps}/>
              <BoardsWrapper
                isLogin={isLogin}
                freeBoard={res.data.boards}
                developBoard={res.data.develop}
                hotPostsBoard={res.data.like}
              />
            </>     
          )
        });  
      })
      .catch((err) => console.log(err));
    };
    postReq();
  },[])  

  return (
    <>
      <Banner></Banner>
      <Container>
        {totalBoards}
      </Container>
    </>
  );
}
