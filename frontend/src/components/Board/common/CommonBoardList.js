import React, { useState, useEffect } from 'react';
import CommonBoard from './CommonBoard';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

function CommonBoardList({ type, title, isLogin }) {
  const [commonBoard, setCommonBoard] = useState([]);
  const [recentList, setRecentList] = useState([]);
  const [alignBold, setAlignBold] = useState('recentButton');

  const getBoardInfo = () => {
    axios
      .get(`http://localhost:5000/board/${type}`, {})
      .then((Response) => {
        console.log(Response);
        setCommonBoard(Response.data);
        setRecentList(Response.data);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  useEffect(() => {
    getBoardInfo();
  }, []);

  // console.log(commonBoard);
  // 게시판 생성
  const list = commonBoard.map((item) => {
    if (item) {
      return (
        <Grid key={item._id} item xs={6}>
          <CommonBoard item={item} />
        </Grid>
      );
    }
  });

  // 최신순 정렬
  const sortByRecent = (id) => {
    setCommonBoard(recentList);
    setAlignBold(id);
  };

  // 좋아요순 정렬
  const sortByLike = (id) => {
    const sortedData = [...commonBoard].sort((a, b) => {
      const aLike = a.like ? a.like.length : 0;
      const bLike = b.like ? b.like.length : 0;
      return aLike > bLike ? -1 : aLike === bLike ? 0 : 1;
    });
    setCommonBoard(sortedData);
    setAlignBold(id);
  };

  // 댓글순 정렬
  const sortByComment = (id) => {
    const sortedData = [...commonBoard].sort((a, b) => {
      const aComment = a.comments ? a.comments.length : 0;
      const bComment = b.comments ? b.comments.length : 0;
      return aComment > bComment ? -1 : aComment === bComment ? 0 : 1;
    });
    setCommonBoard(sortedData);
    setAlignBold(id);
  };

  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <ReviewPageTopBar>
        <Title>{title}</Title>

        <div>
          <AlignButton
            id="recentButton"
            clickState={alignBold}
            onClick={() => sortByRecent('recentButton')}
          >
            최신순
          </AlignButton>{' '}
          |{' '}
          <AlignButton
            id="likeButton"
            clickState={alignBold}
            onClick={() => sortByLike('likeButton')}
          >
            좋아요순
          </AlignButton>{' '}
          |{' '}
          <AlignButton
            id="commentButton"
            clickState={alignBold}
            onClick={() => sortByComment('commentButton')}
          >
            댓글순
          </AlignButton>
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
      </ReviewPageTopBar>
      <Grid container spacing={2}>
        {list}
      </Grid>
    </Container>
  );
}

export default CommonBoardList;

const ReviewPageTopBar = (props) => (
  <Container
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: '5rem',
      marginBottom: '1rem',
      alignItems: 'center',
    }}
  >
    {props.children}
  </Container>
);

const Title = (props) => (
  <Typography
    variant="subtitle1"
    sx={{ fontSize: '1.7rem', fontWeight: 'bold', color: '#484848ea' }}
  >
    {props.children}
  </Typography>
);

const AlignButton = (props) => (
  <Typography
    variant="button"
    onClick={props.onClick}
    sx={
      props.clickState === props.id
        ? {
            fontSize: '0.8rem',
            fontWeight: '800',
            color: '#484848ea',
            cursor: 'pointer',
            ':hover': { fontWeight: 'bold', color: '#4585ff' },
          }
        : {
            fontSize: '0.8rem',
            color: '#484848ea',
            cursor: 'pointer',
            ':hover': { fontWeight: 'bold', color: '#4585ff' },
          }
    }
  >
    {props.children}
  </Typography>
);
