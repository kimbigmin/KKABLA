import { Container } from '@mui/material';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MyPageGrid from '../../components/MyPage/MyPageGrid';
import MyPagePosts from '../../components/MyPage/MyPagePosts';

function MyPageMoreLikes({ isLogin }) {
  const location = useLocation();
  const content = location.state;
  console.log(location.state);

  return (
    <Container>
      <MyPageGrid
        title={`좋아요한 게시글 ${0}개`}
        children={<MyPagePosts content={content} />}
      />
    </Container>
  );
}

export default MyPageMoreLikes;
