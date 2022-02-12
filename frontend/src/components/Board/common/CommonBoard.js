import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function CommonBoard({ item }) {
  return (
    <PaperArea>
      <Link
        to={`/board/free/${item._id}`}
        state={{ data: item }}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Grid container>
          {/* 이미지 넣어보고 xs={8} 수정필요 */}
          <Grid item container direction="column">
            <Grid item container>
              <Title>{item.title}</Title>
            </Grid>
            <Grid item>
              <Content variant="body1">{item.contents}</Content>
            </Grid>
            <Grid item>
              <Typography variant="caption">{item.creator}</Typography>
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
          {item.thumbnail ? (
            <Grid item container xs={4}>
              <Img alt="이미지" src={item.thumbnail} />
            </Grid>
          ) : null}
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
    }}
  >
    {props.children}
  </Paper>
);

const Title = (props) => (
  <Typography gutterBottom noWrap variant="h6">
    {props.children}
  </Typography>
);

const Content = (props) => (
  <Typography
    gutterBottom
    sx={{
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
  <Grid item sx={{ marginRight: '3px' }}>
    {props.children}
  </Grid>
);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxwidth: '100%',
  maxheight: '100%',
});
