import HotBootCampBoard from 'components/mainPage/BoardsCategory/HotBootCampBoard';
import BoardsWrapper from 'components/mainPage/BoardsCategory/BoardsWrapper';
import Banner from 'components/mainPage/BoardsCategory/Banner';
import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function MainContents({ isLogin }) {
  const [freeBoard, setFreeBoard] = useState([]);
  const [developBoard, setDevelopBoard] = useState([]);
  const [hotBootCamps, setHotBootCamps] = useState([]);
  const [hotPostsBoard, setHotPostsBoard]=useState([]);
  
  const getData = async()=>{
    const {data:boardsData}=await axios.get('http://localhost:5000/', { withCredentials: true })   
    const {freeBoard1,hotBootCamps1,developBoard1,hotPostsBoard1}=boardsData;
  }
  getData();
  // console.log(freeBoard1);
  useEffect(() => {
    const postReq = async () => {
      axios
      .get('http://localhost:5000/', { withCredentials: true })
      .then((res) => {
          setFreeBoard((prevState) =>{ 
            return [...res.data.boards];      
          });
          setDevelopBoard((prevState) =>{
            return [...res.data.develop];      
          });
          setHotPostsBoard((prevState)=>{
            return [...res.data.like];
          });
          setHotBootCamps((prevState)=>{
            return [...res.data.bootCamps];
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
        <HotBootCampBoard isLogin={isLogin} hotBootCamps={hotBootCamps}/>
        <BoardsWrapper
          isLogin={isLogin}
          freeBoard={freeBoard}
          developBoard={developBoard}
          hotPostsBoard={hotPostsBoard}
        />
      </Container>
    </>
  );
}
