import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MyPageGrid from '../../components/MyPage/MyPageGrid';
import MyPagePosts from '../../components/MyPage/MyPagePosts';

function MyPageMoreLikes({ isLogin }) {
  const location = useLocation();
  const content = location.state;

  const [free, setFree] = useState(null);
  const [develop, setDevelop] = useState(null);

  useEffect(() => {
    setFree(content.filter((el) => el.type === 'free'));
    setDevelop(content.filter((el) => el.type === 'develop'));
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <MyPageGrid
            title={`자유게시판 좋아요 ${
              free === null || free === undefined ? 0 : free.length
            }개`}
            children={<MyPagePosts content={free} />}
          />
        </Grid>
        <Grid item xs={6}>
          <MyPageGrid
            title={`개발게시판 좋아요 ${
              develop === null || develop === undefined ? 0 : develop.length
            }개`}
            children={<MyPagePosts content={develop} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPageMoreLikes;
