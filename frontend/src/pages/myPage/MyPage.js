import { Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

import MyPageGrid from '../../components/MyPage/MyPageGrid';
import MyPageAuth from '../../components/MyPage/MyPageAuth';
import MyPagePosts from '../../components/MyPage/MyPagePosts';
import MyPageReviews from '../../components/MyPage/MyPageReviews';
import MyPageLikes from '../../components/MyPage/MyPageLikes';
import axios from 'axios';
import { useEffect } from 'react';

function MyPage({ isLogin }) {
  const [board, setBoard] = useState();
  const [reviews, setReviews] = useState();
  const [auth, setAuth] = useState();
  const [bootCamp, setBootCamp] = useState();

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
      <MypageTopBar>
        <h2>마이페이지</h2>
      </MypageTopBar>
      <Grid container>
        <Grid item xs={12}>
          <MyPageGrid
            title={`${isLogin} 님`}
            children={<MyPageAuth content={auth} />}
          />
        </Grid>
        <Grid item xs={3.5}>
          <MyPageGrid
            title={`작성한 글 ${
              board === undefined || board === null ? 0 : board.length
            }개`}
            children={
              <MyPagePosts
                content={
                  board === undefined || board === null
                    ? board
                    : board.slice(0, 5)
                }
              />
            }
            length={board === undefined || board === null ? 0 : board.length}
            content={board}
            board="boards"
          />
        </Grid>
        <Grid item xs={5}>
          <MyPageGrid
            title={`작성한 리뷰 ${
              reviews === undefined || reviews === null ? 0 : reviews.length
            }개`}
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

const MypageTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
  margin-bottom: 3rem;
  align-items: center;
  height: 47.602px;

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #484848ea;
  }
`;

export default MyPage;
