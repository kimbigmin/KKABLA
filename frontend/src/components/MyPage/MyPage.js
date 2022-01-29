import { Container, Divider, Grid } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

function MyPage() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <GridSection>
            <GridLabel>내 정보</GridLabel>
            <Divider></Divider>
          </GridSection>
        </Grid>
        <Grid item xs={4}>
          <GridSection>
            <GridLabel>내가 쓴 글</GridLabel>
            <Divider></Divider>
          </GridSection>
        </Grid>
        <Grid item xs={4}>
          <GridSection>
            <GridLabel>내가 쓴 리뷰</GridLabel>
            <Divider></Divider>
          </GridSection>
        </Grid>
        <Grid item xs={4}>
          <GridSection>
            <GridLabel>좋아요</GridLabel>
            <Divider></Divider>
          </GridSection>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPage;

const GridSection = styled.div`
  margin: 10px;
`;

const GridLabel = styled.label`
  margin-bottom: 10px;
`;
