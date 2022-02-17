import React, { useState, useEffect } from 'react';
import CommonBoard from './CommonBoard';
import BlindBoard from './BlindBoard';
import { Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function CommonBoardList({ type, title, isLogin }) {
  const [commonBoard, setCommonBoard] = useState([]);
  const [recentList, setRecentList] = useState([]);
  const [alignBold, setAlignBold] = useState('recentButton');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getBoardInfo = () => {
    axios
      .get(`http://localhost:5000/board/${type}`, {})
      // `http://localhost:5000/board/${type}?page=${page}&limit=10`
      .then((Response) => {
        setCommonBoard(commonBoard.concat(Response.data));
        setRecentList(commonBoard.concat(Response.data));

        Response.data === 0 || Response.data.length < 10
          ? setHasMore(false)
          : setPage(page + 1);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  console.log(commonBoard);

  useEffect(() => {
    getBoardInfo();
  }, []);

  // 게시판 생성
  const list = commonBoard.map((item) => {
    if (item) {
      return (
        <Grid key={item._id} item xs={6}>
          {item.isBlind ? <BlindBoard /> : <CommonBoard item={item} />}
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
      <InfiniteScroll
        dataLength={commonBoard.length}
        next={getBoardInfo}
        hasMore={hasMore}
        loader={
          <h4 style={{ marginTop: '10px', textAlign: 'center' }}>Loading..</h4>
        }
        scrollableTarget="svrollableDiv"
        style={{ all: 'initial' }}
      >
        <Grid container spacing={2}>
          {list}
        </Grid>
      </InfiniteScroll>
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
