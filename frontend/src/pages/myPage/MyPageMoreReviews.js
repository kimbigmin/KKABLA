import { Container } from '@mui/material';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MyPageGrid from '../../components/MyPage/MyPageGrid';
import MyPageReviews from '../../components/MyPage/MyPageReviews';

function MyPageMoreReviews({ isLogin }) {
  const location = useLocation();
  const content = location.state;
  console.log(location.state);

  return (
    <Container>
      <MyPageGrid
        title={`작성한 리뷰 ${content.length}개`}
        children={<MyPageReviews content={content} />}
        length={content.length}
      />
    </Container>
  );
}

export default MyPageMoreReviews;
