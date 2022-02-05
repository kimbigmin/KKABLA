import React from 'react';
import { Container } from '@mui/material';
import { Top } from '../styles/review-page/styled';
import logo from '../images/logo.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ReviewList from '../components/review/ReviewList';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function DetailPage({ isLogin }) {
  // const location = useLocation();
  // const { isLogin } = location.state;
  // console.log(isLogin);

  return (
    <Container maxWidth="md" sx={{ marginBottom: '5rem' }}>
      <Top>
        <h2>까블라 아카데미</h2>
      </Top>
      <IntroBar>기관소개</IntroBar>
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
        <Grid container spacing={3} sx={{ textAlign: 'left' }}>
          <Grid item xs={12}>
            <h4>홈페이지</h4>
            <a href="#" target="_blank">
              https://kkabla.com
            </a>
          </Grid>
          <Grid item xs={12}>
            <h4>위치</h4>
            <p>서울특별시 서초구 서초동 아무개로 16번길 707-1</p>
          </Grid>
          <Grid item xs={12}>
            <h4>수업방식</h4>
            <p>비대면 + 오프라인 강의</p>
          </Grid>
        </Grid>
      </Introduction>
      <ListTopBar>
        <div className="list-topbar">
          <h3>{2}개의 리뷰</h3>
          {isLogin && <button>리뷰작성하기</button>}
        </div>
      </ListTopBar>
      <Blind>
        {!isLogin && <div class="blind">로그인 후 이용이 가능합니다. 😢</div>}
        <ReviewList isLogin={isLogin} />
        <ReviewList isLogin={isLogin} />
      </Blind>
    </Container>
  );
}

const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 2rem;
  background-color: white;
  border-radius: 5px;

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #4586ffb2;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 2rem;

  img {
    width: 13rem;
  }

  .info {
    margin-top: 1rem;
  }

  h3 {
    margin-bottom: 0.4rem;
  }
`;

const ListTopBar = styled.div`
  margin-top: 6rem;

  .list-topbar {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: bold;
    }

    button {
      border: none;
      background-color: white;
      font-size: 1.1rem;
      font-weight: 500;
      background-color: #4a88ff;
      border-radius: 5px;
      padding: 0.3rem;
      color: white;
      cursor: pointer;
    }
  }
`;

const Blind = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .blind {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.036);
    color: #4d4d4d;

    position: absolute;
    width: 100%;
    height: 70%;

    font-size: 2rem;
    font-weight: bold;
  }
`;

const IntroBar = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #575757;
  margin-bottom: 1rem;
`;

export default DetailPage;
