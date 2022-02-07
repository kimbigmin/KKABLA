import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Box } from '@mui/material';

function CommonBoard({ item }) {
  return (
    <Paper
      onClick={() => alert('안뇽')}
      sx={{
        p: 2,
        margin: 'auto',
        ':hover': { cursor: 'pointer' },
        height: '150px',
      }}
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
              <Typography variant="caption">0</Typography>
            </Caption>
            <Caption>
              <Typography variant="caption">좋아요</Typography>
              <Typography variant="caption">{item.thumbnail}</Typography>
            </Caption>
            <Caption>
              <Typography variant="caption">댓글</Typography>
              <Typography variant="caption">0</Typography>
            </Caption>
          </Grid>
        </Grid>
        <Grid item container xs={4}>
          <Img alt="이미지" src={item.images} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default CommonBoard;

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const Title = (props) => (
  <Typography gutterBottom noWrap variant="h6">
    {props.children}
  </Typography>
);

const Content = (props) => (
  <Typography
    gutterBottom
    sx={{
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
