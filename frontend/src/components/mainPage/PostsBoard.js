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
  position: relative;
  height: 800px;
  width: 100vw;
  margin-bottom: 5%;
  padding: 3% 3%;  
  align-items: center;
`;








