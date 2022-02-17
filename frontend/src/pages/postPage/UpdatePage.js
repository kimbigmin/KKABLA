import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Typography, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import UpdateArticle from 'components/board-detail-page/UpdateArticle';

function UpdatePage({ isLogin }) {
  const location = useLocation();
  const { data } = location.state;

  console.log(data);

  return (
    <PostContainer>
      <TopTypography variant="h5">글 수정하기</TopTypography>
      <Divider></Divider>
      <UpdateArticle isLogin={isLogin} data={data} />
    </PostContainer>
  );
}

export default UpdatePage;

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
