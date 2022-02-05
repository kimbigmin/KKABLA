import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from './dummy';

function ReviewBox({ isLogin }) {
  const [dummy, setDummy] = useState(data);

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
  // 이름순 정렬 핸들러
  const sortByName = () => {
    const newArr = [...dummy];
    const sortedArr = newArr.sort((a, b) => (a.name > b.name ? 1 : -1));
    setDummy(sortedArr);
  };

  // 별점순 정렬 핸들러
  const sortByStar = () => {
    const newArr = [...dummy];
    const sortedArr = newArr.sort((a, b) => (a.star > b.star ? -1 : 1));
    setDummy(sortedArr);
  };

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <Top>
        <h2>리뷰게시판</h2>
        <div>
          <span onClick={sortByName}>이름순</span> |{' '}
          <span onClick={sortByStar}>평점순</span>
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

  span {
    font-size: 0.8rem;
    color: #484848ea;
    cursor: pointer;
  }
`;

export default ReviewBox;
