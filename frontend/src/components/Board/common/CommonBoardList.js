import React from 'react';
import CommonBoard from './CommonBoard';
import { data } from './dummy';
import { Container, Grid } from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CommonBoardList({ type, title, isLogin }) {
  // 게시판 생성
  axios
    .get(`http://localhost:5000/board/${type}`, { withCredentials: true })
    .then((res) => console.log(res));
  const list = data
    .filter((item) => item.type === type)
    .map((item) => {
      if (item) {
        return (
          <Grid item xs={6}>
            <CommonBoard item={item} />
          </Grid>
        );
      }
    });

  // 최신순 정렬
  // const sortByRecent =

  // 좋아요순 정렬
  // const sortByLike =

  // 댓글순 정렬
  // const sortByComment =

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <Top>
        <h2>{title}</h2>

        <div>
          <span>최신순</span> | <span>좋아요순</span> | <span>댓글순</span>
          {isLogin ? (
            <Link
              to={`../post/${type}`}
              style={{
                textDecoration: 'none',
                color: '#66b0e5',
                fontWeight: 'bold',
                marginLeft: '2rem',
              }}
            >
              글 작성하기
            </Link>
          ) : null}
        </div>
      </Top>
      <Grid container spacing={2}>
        {list}
      </Grid>
    </Container>
  );
}

export default CommonBoardList;

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
