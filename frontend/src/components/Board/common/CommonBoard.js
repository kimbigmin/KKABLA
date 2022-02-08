import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function CommonBoard({ item }) {
  return (
    <PaperArea>
      <Link
        to={`/board/detail/`}
        state={{ data: item }}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Grid container>
          <Grid item container xs={8} direction="column">
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
                <Typography variant="caption">조회수</Typography>
                <Typography variant="caption">{item.views}</Typography>
              </Caption>
              <Caption>
                <Typography variant="caption">좋아요</Typography>
                <Typography variant="caption">{item.like}</Typography>
              </Caption>
              <Caption>
                <Typography variant="caption">댓글</Typography>
                <Typography variant="caption">0</Typography>
              </Caption>
            </Grid>
          </Grid>
          <Grid item container xs={4}>
            <Img alt="이미지" src={item.thumbnail} />
          </Grid>
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
  <Grid item sx={{ margin: '3px' }}>
    {props.children}
  </Grid>
);

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxwidth: '100%',
  maxheight: '100%',
});
