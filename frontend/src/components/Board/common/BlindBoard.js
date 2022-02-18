import * as React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';

function BlindBoard() {
  return (
    <PaperArea>
      <ReportMessage>
        [신고 횟수 누적으로 블라인드된 게시물 입니다]
      </ReportMessage>
      <BlindArea>
        <Grid container>
          <Grid item container direction="column">
            <Grid item container>
              <Title>신고된 게시글 제목입니다.</Title>
            </Grid>
            <Grid item>
              <Content variant="body1">
                신고된 게시글의 내용입니다. 신고된 게시글의 내용입니다.
              </Content>
            </Grid>
            <Grid item>
              <Typography variant="caption">******</Typography>
            </Grid>
            <Grid item container>
              <Caption>
                <Typography variant="caption">좋아요</Typography>
                <Typography variant="caption">0</Typography>
              </Caption>
              <Caption>
                <Typography variant="caption">댓글</Typography>
                <Typography variant="caption">0</Typography>
              </Caption>
            </Grid>
          </Grid>
        </Grid>
      </BlindArea>
    </PaperArea>
  );
}

export default BlindBoard;

const PaperArea = (props) => (
  <Paper
    sx={{
      p: 2,
      margin: 'auto',
      height: '130px',
      position: 'relative',
      msUserSelect: 'none',
      MozUserSelect: 'none',
      WebkitUserSelect: 'none',
      userSelect: 'none',
    }}
  >
    {props.children}
  </Paper>
);

const BlindArea = (props) => (
  <Container
    disableGutters
    sx={{
      p: 2,
      margin: 'auto',
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 'modal',
      backgroundColor: 'rgba(0,0,0,0.1)',
      WebkitFilter: 'blur(5px)',
      left: '0px',
      top: '0px',
    }}
  >
    {props.children}
  </Container>
);

const ReportMessage = (props) => (
  <Typography
    component={'div'}
    variant="body1"
    sx={{
      position: 'absolute',
      top: '45%',
      left: '20%',
      zIndex: 'tooltip',
      textAlign: 'center',
    }}
  >
    {props.children}
  </Typography>
);

const Title = (props) => (
  <Typography gutterBottom noWrap variant="h6">
    {props.children}
  </Typography>
);

const Content = (props) => (
  <Typography
    gutterBottom
    component={'div'}
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
