import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import HotPostsBoard from 'components/mainPage/BoardsCategory/DevGenBoard/HotPostsBoard';
import DevGenBoardWrapper from 'components/mainPage/BoardsCategory/DevGenBoard/DevGenBoardWrapper';

export default function BoardsWrapper({isLogin, hotPostsBoard, freeBoard, developBoard}){
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <HotPostsBoard isLogin={ isLogin } hotPostsBoard={hotPostsBoard}/>
        <DevGenBoardWrapper isLogin={ isLogin } freeBoard={freeBoard} developBoard={developBoard}/>
      </Grid>            
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%; 
  margin: 7rem 0;
  padding:0 2rem; 
  align-items: center;
  box-sizing: border-box;
`;