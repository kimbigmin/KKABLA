import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function ReviewBox({ isLogin, bootcampData, setBootcampData }) {
  // 기관 리스트 추출
  const cardLists = bootcampData.map((item) => {
    return (
      <Grid item xs={3}>
        <Link
          to={`/board/review/detail/${item._id}`}
          state={{ isLogin: isLogin, data: item }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Card item={item} review={item.review}></Card>
        </Link>
      </Grid>
    );
  });

  // 별점순 정렬 핸들러
  const sortByStar = () => {
    const newArr = [...bootcampData];

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
    setBootcampData(sortedArr);
  };

  // 이름순 정렬 핸들러
  const sortByName = () => {
    const newArr = [...bootcampData];
    const sortedArr = newArr.sort((a, b) => (a.name > b.name ? 1 : -1));
    setBootcampData(sortedArr);
  };

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <ReviewPageTopBar>
        <h2>리뷰게시판</h2>
        <div>
          <AlignButton onClick={sortByName}>이름순</AlignButton> |
          <AlignButton onClick={sortByStar}>평점순</AlignButton>
        </div>
      </ReviewPageTopBar>
      <Grid container spacing={5}>
        {cardLists}
      </Grid>
    </Container>
  );
}

const ReviewPageTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
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

export default ReviewBox;
