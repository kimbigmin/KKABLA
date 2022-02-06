import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './dummy';

function ReviewBox({ isLogin }) {
  const [dummy, setDummy] = useState(data);

  // 관리자 로그인 확인 => true면 기관추가 버튼생성
  const isAdmin = true;

  // Card list 생성
  const list = dummy.map((item) => {
    if (item) {
      return (
        <Grid item xs={3}>
          <Link
            to={`/review/detail/${item.id}`}
            state={{ isLogin: isLogin, data: item }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card item={item}></Card>
          </Link>
        </Grid>
      );
    }
  });
  // 별점순 정렬 핸들러
  const sortByStar = () => {
    const newArr = [...dummy];

    const sortedArr = newArr.sort((a, b) => {
      // 비교할 A 기관에 대한 별점리뷰 총점 구하기
      const sumStarsA = a.review.reduce((acc, val) => {
        return acc + val.star;
      }, 0);
      // 비교할 B 기관에 대한 별점리뷰 총점 구하기
      const sumStarsB = b.review.reduce((acc, val) => {
        return acc + val.star;
      }, 0);
      // 각 A,B 소수점 1자리까지의 평균별점 구하기
      let averageStarsA = (sumStarsA / a.review.length).toFixed(1);
      let averageStarsB = (sumStarsB / b.review.length).toFixed(1);

      // 만약 별점이 NaN라면 0점으로 변환
      averageStarsA = averageStarsA !== 'NaN' ? averageStarsA : 0;
      averageStarsB = averageStarsB !== 'NaN' ? averageStarsB : 0;
      // 각 기관 별점 비교 후 정렬
      if (averageStarsA > averageStarsB) {
        return -1;
      } else {
        return 1;
      }
    });
    // 정렬된 배열을 dummy에 다시 셋해주고 재렌더링
    setDummy(sortedArr);
  };

  // 이름순 정렬 핸들러
  const sortByName = () => {
    const newArr = [...dummy];
    const sortedArr = newArr.sort((a, b) => (a.name > b.name ? 1 : -1));
    setDummy(sortedArr);
  };

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <Top>
        <h2>리뷰게시판</h2>
        <div>
          <AlignButton onClick={sortByName}>이름순</AlignButton> |{' '}
          <AlignButton onClick={sortByStar}>평점순</AlignButton>
          {isAdmin && isLogin && <AdminButton>기관추가하기</AdminButton>}
        </div>
      </Top>
      <Grid container spacing={5}>
        {list}
      </Grid>
    </Container>
  );
}

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  margin-bottom: 5rem;
  align-items: center;

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #484848ea;
  }
`;

const AlignButton = styled.span`
  font-size: 0.8rem;
  color: #484848ea;
  cursor: pointer;

  &:hover {
    font-weight: bold;
    color: #4585ff;
  }
`;

const AdminButton = styled.span`
  border: none;
  font-size: 1.1rem;
  font-weight: 500;
  background-color: rgba(127, 170, 255, 0.4);
  border-radius: 5px;
  padding: 0.5rem;
  color: #484848ea;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    background-color: rgba(127, 170, 255, 1);
    transition-duration: 0.5s;
    color: white;
  }
`;

export default ReviewBox;
