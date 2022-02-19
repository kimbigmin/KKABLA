import React from 'react';
import { useLocation } from 'react-router-dom';
//style
import styled from 'styled-components';
import { Container, Typography, Divider } from '@mui/material';
//component
import PostReview from 'components/post-page/PostReview';

function PostReviewPage({ isLogin }) {
  const location = useLocation();
  const { data } = location.state;

  return (
    <PostContainer>
      <TopTypography variant="h5">글 작성하기</TopTypography>
      <Divider></Divider>
      <PostReview isLogin={isLogin} post={data} />
    </PostContainer>
  );
}

export default PostReviewPage;

const PostContainer = styled(Container)`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  margin: 20px auto;
`;

const TopTypography = styled(Typography)`
  margin: 0 0 10px 10px;
  font-weight: bold;
`;
