import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BootCampCard from './BootCampCard';
import HotPostsBoard from './postBoards/HotPostsBoard';
import DevelopAndGeneralBoard from './DevelopAndGeneralBoard';

export default function PostsBoard(){
  return (
    <Container>
      <Grid container columnSpacing={4}>
        <HotPostsBoard/>
        <DevelopAndGeneralBoard/>
      </Grid>            
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin: 3rem 0;
  padding:0 2rem; 
  align-items: center;
  box-sizing: border-box;
`;








