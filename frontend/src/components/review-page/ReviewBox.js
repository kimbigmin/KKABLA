import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Top } from '../../styles/review-page/styled';
import Card from './Card';

function ReviewBox() {
  const list = Array(24)
    .fill(null)
    .map((item) => {
      if (!item) {
        return (
          <Grid item xs={3}>
            <Card></Card>
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

export default ReviewBox;
