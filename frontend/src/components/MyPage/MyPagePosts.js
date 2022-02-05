import styled from 'styled-components';
import React, { useState, Children } from 'react';
import { Divider, Box } from '@mui/material';

function MyPagePosts({ content }) {
  const [post, setPost] = useState(content);

  return (
    <>
      {post
        ? Children.toArray(
            post.map((el) => (
              <GridDetailBox>
                <GridTitle>{el.postTitle}</GridTitle>
                <Divider></Divider>
                <GridDetail>{el.postContent}</GridDetail>
              </GridDetailBox>
            )),
          )
        : '글을 작성해주세요'}
    </>
  );
}

//post에 따라서 정해짐. null 이면 글을 작성해주세요 출력

export default MyPagePosts;

const GridDetailBox = styled(Box)`
  background-color: #f7f7f7;
  border-radius: 10px;
  margin: 10px 0;
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;

const GridDetail = styled(Box)`
  padding: 10px;
  font-size: 12px;
`;
