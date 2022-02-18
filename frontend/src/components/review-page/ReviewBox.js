import React from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import styled from 'styled-components';
import CardForReviewPage from '../review-page/CardsForReviewPage';
import { Link } from 'react-router-dom';

function ReviewBox({ bootcampData, setBootcampData }) {
  //별점순 정렬 핸들러
  const sortByStar = () => {
    const newArr = [...bootcampData];

    const sortedArr = newArr.sort((a, b) => {
      if (a.star > b.star) {
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
    const sortedArr = newArr.sort((a, b) => (a.name >= b.name ? 1 : -1));
    setBootcampData(sortedArr);
  };

  // 렌더링할 카드리스트 생성
  const cardList = bootcampData.map((item) => {
    return (
      <Grid item xs={3} key={item.name}>
        <Link
          to={`/board/review/detail/${item._id}`}
          state={{
            data: item,
          }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <CardForReviewPage
            key={item.name}
            item={item}
            reviews={item.review}
          ></CardForReviewPage>
        </Link>
      </Grid>
    );
  });

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <ReviewPageTopBar>
        <h2>리뷰게시판</h2>
        <div>
          <AlignButton onClick={sortByName}>이름순</AlignButton>
          {' | '}
          <AlignButton onClick={sortByStar}>평점순</AlignButton>
        </div>
      </ReviewPageTopBar>
      <Grid container spacing={5}>
        {cardList}
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
  height: 47.602px;

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
