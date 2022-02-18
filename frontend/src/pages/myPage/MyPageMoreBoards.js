import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
//style
import { useEffect } from 'react';
import { Container, Grid } from '@mui/material';
//component
import MyPageGrid from 'components/MyPage/MyPageGrid';
import MyPagePosts from 'components/MyPage/MyPagePosts';

function MyPageMoreBoard() {
  const location = useLocation();
  const content = location.state;

  const [free, setFree] = useState();
  const [develop, setDevelop] = useState();

  useEffect(() => {
    setFree(content.filter((el) => el.type === 'free'));
    setDevelop(content.filter((el) => el.type === 'develop'));
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <MyPageGrid
            title={`자유게시판 ${free === null || free === undefined ? 0 : free.length}개`}
            children={<MyPagePosts content={free} />}
          />
        </Grid>
        <Grid item xs={6}>
          <MyPageGrid
            title={`개발게시판 ${develop === null || develop === undefined ? 0 : develop.length}개`}
            children={<MyPagePosts content={develop} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPageMoreBoard;
