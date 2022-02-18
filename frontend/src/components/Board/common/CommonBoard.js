import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getAnonymousName } from 'utils/getAnonymousName.js';
import BoardContents from './BoardContents';
import { removeImgTag } from 'utils/removeImgTag';

function CommonBoard({ item }) {
  return (
    <PaperArea>
      {item.isBlind ? (
        <ReportMessage>
          [신고 횟수 누적으로 블라인드된 게시물 입니다]
        </ReportMessage>
      ) : null}
      <BlindArea isBlind={item.isBlind}>
        <Link
          to={`/board/${item.type}/${item._id}`}
          state={{ dataFromBoard: item }}
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <Grid container>
            {/* 이미지 넣어보고 xs={8} 수정필요 */}
            <Grid item container direction="column">
              <Grid item container>
                <Title>{item.title}</Title>
              </Grid>
              <Grid item>
                <Content variant="body1">
                  <BoardContents item={removeImgTag(item.contents)} />
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
            {item.thumbnail ? (
              <Grid item container xs={4}>
                <Img alt="이미지" src={item.thumbnail} />
              </Grid>
            ) : null}
          </Grid>
        </Link>
      </BlindArea>
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

const BlindArea = (props) => (
  <Container
    disableGutters
    sx={
      props.isBlind
        ? {
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
          }
        : null
    }
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

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxwidth: '100%',
  maxheight: '100%',
});
