import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './dummy';

function ReviewBox({ isLogin }) {
  const list = data.map((item) => {
    if (item) {
      return (
        <Grid item xs={3} justifyContent={'stretch'}>
          <Link
            to="/review/detail"
            state={{ isLogin: isLogin }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card item={item}></Card>
          </Link>
        </Grid>
      );
    }
  });

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <Top>
        <h2>리뷰게시판</h2>
        <div>
          <span>이름순</span> | <span>평점순</span>
        </div>
      </Top>
      <Grid container spacing={5}>
        {list}
      </Grid>
    </Container>
  );
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  margin-bottom: 5rem;
  align-items: center;

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #484848ea;
  }

  span {
    font-size: 0.8rem;
    color: #484848ea;
    cursor: pointer;
  }
`;

export default ReviewBox;
