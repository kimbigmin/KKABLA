import { Container, Divider, Grid, Box } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
function MyPage() {
  return (
    <Container
      sx={{
        bgcolor: '#F7F7F7',
      }}
      maxWidth="md"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GridBox>
            <GridSection>
              <GridTitle>닉네임123 님</GridTitle>
              <Divider></Divider>
              <GridDetail></GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
        <Grid item xs={4}>
          <GridBox>
            <GridSection>
              <GridTitle>작성한 글</GridTitle>
              <Divider></Divider>
              <GridDetail></GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
        <Grid item xs={4}>
          <GridBox>
            <GridSection>
              <GridTitle>작성한 리뷰</GridTitle>
              <Divider></Divider>
              <GridDetail></GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
        <Grid item xs={4}>
          <GridBox>
            <GridSection>
              <GridTitle>좋아요</GridTitle>
              <Divider></Divider>
              <GridDetail></GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPage;

const GridSection = styled.div`
  margin: 10px;
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;

const GridBox = styled(Box)`
  background-color: white;
  border-radius: 15px;
`;

const GridDetail = styled(Box)`
  min-height: 100px;
`;
