import * as React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAnonymousName } from 'utils/getAnonymousName.js';
import BoardContents from './BoardContents';
import styled from 'styled-components';
import { removeImgTag } from 'utils/removeImgTag';

function CommonBoard({ item }) {
  return (
    <PaperArea>
      <Link
        to={`/board/${item.type}/${item._id}`}
        state={{ dataFromBoard: item }}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Grid container>
          <Grid item container xs direction="column">
            <Grid item container>
              <Title>{item.title}</Title>
            </Grid>
            <Grid item>
              <Content variant="body1">
                <TuiViewer>
                  <BoardContents item={removeImgTag(item.contents)} />
                </TuiViewer>
              </Content>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                {getAnonymousName(item.creator)}
              </Typography>
            </Grid>
            <Grid item container>
              <Caption>
                <Typography variant="caption">좋아요</Typography>
                <Typography variant="caption">
                  {item.like ? item.like.length : 0}
                </Typography>
              </Caption>
              <Caption>
                <Typography variant="caption">댓글</Typography>
                <Typography variant="caption">
                  {item.comments ? item.comments.length : 0}
                </Typography>
              </Caption>
            </Grid>
          </Grid>
          {item.images.length === 0 || item.images[0] === '' ? null : (
            <Grid item container xs={4}>
              <Img alt="썸네일" src={item.images[0]} />
            </Grid>
          )}
        </Grid>
      </Link>
    </PaperArea>
  );
}

export default CommonBoard;

const PaperArea = (props) => (
  <Paper
    sx={{
      p: 2,
      margin: 'auto',
      height: '130px',
      position: 'relative',
    }}
  >
    {props.children}
  </Paper>
);

const Title = (props) => (
  <Typography gutterBottom noWrap variant="h6" sx={{ fontSize: '1.2rem' }}>
    {props.children}
  </Typography>
);

const Content = (props) => (
  <Typography
    gutterBottom
    component={'div'}
    sx={{
      fontFamily: 'Pretendard-Regular',
      height: '50px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: '2',
    }}
  >
    {props.children}
  </Typography>
);

const Caption = (props) => (
  <Grid item sx={{ marginRight: '3px', fontFamily: 'Pretendard-Regular' }}>
    {props.children}
  </Grid>
);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  width: '100%',
  height: '110px',
  objectFit: 'cover',
});

const TuiViewer = styled.div`
  .toastui-editor-contents *:not(table) {
    line-height: normal;
  }
`;
