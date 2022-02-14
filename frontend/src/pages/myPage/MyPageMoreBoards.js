import { Container, Grid } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MyPageGrid from '../../components/MyPage/MyPageGrid';
import MyPagePosts from '../../components/MyPage/MyPagePosts';

function MyPageMoreBoard({ isLogin }) {
  const location = useLocation();
  const content = location.state;
  console.log(location.state);

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <MyPageGrid
            title={`자유게시판 ${content.length}개`}
            children={<MyPagePosts content={content} />}
            length={content.length}
          />
        </Grid>
        <Grid item xs={6}>
          <MyPageGrid
            title={`개발게시판 ${content.length}개`}
            children={<MyPagePosts content={content} />}
            length={content.length}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPageMoreBoard;
