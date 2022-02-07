import React from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import HotPostsBoard from './DevGenBoard/HotPostsBoard';
import DevGenBoardWrapper from './DevGenBoard/DevGenBoardWrapper';

export default function BoardsWrapper({isLogin,freeBoard,developBoard}){
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <HotPostsBoard isLogin={ isLogin } freeBoard={freeBoard} developBoard={developBoard}/>
        <DevGenBoardWrapper isLogin={ isLogin } freeBoard={freeBoard} developBoard={developBoard}/>
      </Grid>            
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%; 
  margin: 3rem 0;
  padding:0 2rem; 
  align-items: center;
  box-sizing: border-box;
`;








