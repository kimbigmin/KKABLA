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
  const [board, setBoard] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [auth, setAuth] = useState(null);
  const [bootCamp, setBootCamp] = useState(null);

  const getMyData = async () => {
    await axios
      .get('http://localhost:5000/mypage', {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setBoard(res.data.boards);
        setReviews(res.data.reviews);
        setAuth(res.data.userAuth);
      });
  };

  const getBootcamp = async () => {
    await axios.get('http://localhost:5000/board/review/').then((res) => {
      console.log(res.data);
      setBootCamp(res.data);
    });
  };

  useEffect(() => {
    getMyData();
    getBootcamp();
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <MyPageGrid
            title={`${isLogin} 님`}
            children={<MyPageAuth content={auth} />}
          />
        </Grid>
        <Grid item xs={3.5}>
          <MyPageGrid
            title={`작성한 글 ${board === null ? 0 : board.length}개`}
            children={
              <MyPagePosts
                content={board === null ? board : board.slice(0, 5)}
              />
            }
            length={board === null ? 0 : board.length}
            content={board}
            board="boards"
          />
        </Grid>
        <Grid item xs={5}>
          <MyPageGrid
            title={`작성한 리뷰 ${reviews === null ? 0 : reviews.length}개`}
            children={
              <MyPageReviews content={reviews} bootcampData={bootCamp} />
            }
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
