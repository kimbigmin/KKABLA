import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Typography, Divider } from '@mui/material';
import Post from '../../components/post-page/Post';
import PostReview from '../../components/post-page/PostReview';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostPage({ isLogin }) {
  const [post, setPost] = useState({});

  // param으로 전달 된 board 따라서 게시판이 변경됨
  const param = useParams();
  const board = param.board;

  useEffect(() => {
    function getPost() {
      axios.get(`http://localhost:5000`).then((res) => setPost(res.data));
    }

    getPost();
  }, []);

  console.log(post);

  return (
    <PostContainer>
      <TopTypography variant="h5">글 작성하기</TopTypography>
      <Divider></Divider>
      <Post isLogin={isLogin} name={board} />
    </PostContainer>
  );
}

export default PostPage;

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
