import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BootCampCard from './BootCampCard';

  const list = Array(4)
    .fill(null)
    .map((item) => {
      if (!item) {
        return (
          <Grid item xs={3}>
            <Link
              to="/review-detail"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <BootCampCard></BootCampCard>
            </Link>
          </Grid>
        );
      }
    });

export default function HotBootCampBoard(){
  return (
    <Container>
      <BoardHeader>
      <BoardTitle>{"현재 인기있는 부트 캠프"}</BoardTitle>
      </BoardHeader>
      <Grid container spacing={5}>
        {list}  
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 300px;
  width: 100vw;
  margin-bottom: 5%;
  padding: 3% 3%;  
  `;
const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;

const BoardTitle=styled.h2`
  font-weight : bold;
  font-size : 1.7rem;
  line-height : 1rem;
  color : #151618;
  margin-bottom: 1.5rem;
`


