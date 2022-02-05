import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Typography, Box } from '@mui/material';

function CommonBoard() {
  return (
    <Paper
      onClick={() => alert('안뇽')}
      sx={{
        p: 2,
        margin: 'auto',
        ':hover': { cursor: 'pointer' },
      }}
    >
      <Grid container>
        <Grid item container xs={8} direction="column">
          <Grid item container>
            <Typography gutterBottom variant="subtitle1" noWrap>
              제목입니다.제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다제목입니다
            </Typography>
          </Grid>
          <Grid item container>
            <Content variant="body1">
              내용입니다.내용입니다내용입니다내내용입니다내용입니다내용입니다내용입니다용입니다내용입니다내용입니다내용입니다
            </Content>
          </Grid>
          <Grid item>
            <Typography variant="caption">작성자</Typography>
          </Grid>
          <Grid item container>
            <Typography variant="caption">조회수</Typography>
            <Typography variant="caption">좋아요</Typography>
            <Typography variant="caption">댓글</Typography>
          </Grid>
        </Grid>
        <Grid item container xs={4}>
          <Img alt="이미지" src="/" />
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

const Content = (props) => (
  <Typography
    gutterBottom
    noWrap
    sx={{
      // height: 40,
      WebkitLineClamp: '2',
      WebkitBoxOrient: 'vertical',
    }}
  >
    {props.children}
  </Typography>
);
