import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Typography, Divider } from '@mui/material';
import PostReview from '../../components/post-page/PostReview';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostReviewPage({ isLogin }) {
  const params = useParams();
  const id = params.id;

  console.log(id);

  const [post, setPost] = useState({});
  useEffect(() => {
    function getPost() {
      axios
        .get(`http://localhost:5000/board/review/${id}`)
        .then((res) => setPost(res.data));
    }

    getPost();
  }, []);

  console.log(post);

  return (
    <PostContainer>
      <TopTypography variant="h5">글 작성하기</TopTypography>
      <Divider></Divider>
      <PostReview isLogin={isLogin} />
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
