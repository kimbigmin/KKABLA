import React from 'react';
import { Container } from '@mui/material';
import { Top } from '../../styles/review-page/styled';
import logo from '../../images/logo.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ReviewList from './ReviewList';
import styled from 'styled-components';
import {
  Introduction,
  Info,
  ListTopBar,
  Blind,
} from '../../styles/review-page/styled';

function Detail({ isLogin }) {
  isLogin = false;

  return (
    <Container maxWidth="md" sx={{ marginBottom: '5rem' }}>
      <Top>
        <h2>까블라 아카데미</h2>
      </Top>
      <Introduction>
        <Info>
          <img src={logo} alt="logo" />
          <div className="info">
            <h3>까블라 아카데미</h3>
            <span>
              {/* 받아온 평점으로 동적으로 별 생성하기 */}
              <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
              <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
              <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
              <StarHalfIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            </span>
            <p>3.5</p>
          </div>
        </Info>
        <p>홈페이지: </p>
        <p>위치: </p>
      </Introduction>
      <ListTopBar>
        <div className="list-topbar">
          <h3>{2}개의 리뷰</h3>
          {isLogin && <button>리뷰작성하기</button>}
        </div>
      </ListTopBar>
      <Blind>
        {!isLogin && <div class="blind">로그인 후 이용이 가능합니다.</div>}
        <ReviewList />
        <ReviewList />
      </Blind>
    </Container>
  );
}

export default Detail;
