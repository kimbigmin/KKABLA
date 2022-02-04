import { Container, Grid } from '@mui/material';
import React from 'react';

import MyPageGrid from './MyPageGrid';
import MyPageAuth from './MyPageAuth';
import MyPagePosts from './MyPagePosts';
import MyPageReviews from './MyPageReviews';
import MyPageLikes from './MyPageLikes';

const users = {
  name: '닉네임123',
  auth: [
    {
      part: 'Elice SW Engineer Track 1기',
      reviewDate: '2022-02-03',
      ratings: 3,
    },
    {
      part: 'Elice SW Engineer Track 2기',
      reviewDate: '2022-02-03',
      ratings: 3,
    },
  ],
  postCount: 3,
  posts: [
    {
      postTitle: '테스트용 제목 1',
      postContent: '테스트용 내용 1',
    },
    {
      postTitle: '테스트용 제목 2',
      postContent: '테스트용 내용 2',
    },
    {
      postTitle: '테스트용 제목 3',
      postContent: '테스트용 내용 3',
    },
  ],
  reviewCount: 1,
};

function MyPage() {
  return (
    <Container
      sx={{
        bgcolor: '#F7F7F7',
      }}
      maxWidth="md"
    >
      <Grid container>
        <Grid item xs={12}>
          <MyPageGrid
            title={`${users.name} 님`}
            children={<MyPageAuth content={users.auth} />}
          />
        </Grid>
        <Grid item xs={3.5}>
          <MyPageGrid
            title={`작성한 글 ${users.postCount}개`}
            children={<MyPagePosts content={users.posts} />}
          />
        </Grid>
        <Grid item xs={5}>
          <MyPageGrid
            title={`작성한 리뷰 ${users.reviewCount}개`}
            children={<MyPageReviews content={users.auth} />}
          />
        </Grid>
        <Grid item xs={3.5}>
          <MyPageGrid
            title={'좋아요'}
            children={<MyPageLikes content={'좋아요'} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPage;

{
  /* <GridBox>
  <GridSection>
    <GridTitle>작성한 리뷰 n개</GridTitle>
    <Divider
      sx={{
        margin: '10px 0',
      }}
    ></Divider>
    <GridDetail>
      <GridDetailBox>
        <Grid container>
          <Grid item xs={4}>
            <RatingBox>
              3.0
              <Rating
                name="read-only"
                value={3}
                size="small"
                readOnly
              />
            </RatingBox>
          </Grid>
          <Grid item xs={8}>
            <RatingDate>2022-02-03</RatingDate>
            <RatingName>Elice SW Engineer Track 1기</RatingName>
          </Grid>
        </Grid>
      </GridDetailBox>
    </GridDetail>
  </GridSection>
</GridBox> */
}
