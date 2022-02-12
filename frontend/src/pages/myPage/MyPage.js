import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';

import MyPageGrid from '../../components/MyPage/MyPageGrid';
import MyPageAuth from '../../components/MyPage/MyPageAuth';
import MyPagePosts from '../../components/MyPage/MyPagePosts';
import MyPageReviews from '../../components/MyPage/MyPageReviews';
import MyPageLikes from '../../components/MyPage/MyPageLikes';
import axios from 'axios';
import { useEffect } from 'react';

function MyPage({ isLogin }) {
  const [board, setBoard] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getMyData = async () => {
    await axios
      .get('http://localhost:5000/mypage', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        setBoard(res.data.boards);
        setReviews(res.data.reviews);
      });
  };

  useEffect(() => {
    getMyData();
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <MyPageGrid title={`${isLogin} 님`} children={<MyPageAuth />} />
        </Grid>
        <Grid item xs={3.5}>
          <MyPageGrid
            title={`작성한 글 ${board ? board.length : 0}개`}
            children={<MyPagePosts content={board} />}
            length={board ? board.length : 0}
            content={board}
            board="boards"
          />
        </Grid>
        <Grid item xs={5}>
          <MyPageGrid
            title={`작성한 리뷰 ${reviews ? reviews.length : 0}개`}
            children={<MyPageReviews content={reviews} />}
            length={reviews ? reviews.length : 0}
            content={reviews}
            board="reviews"
          />
        </Grid>
        <Grid item xs={3.5}>
          <MyPageGrid title={`좋아요`} board="likes" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPage;
