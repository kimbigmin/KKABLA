import styled from 'styled-components';
import React, { useState, Children } from 'react';
import { Divider, Box } from '@mui/material';

function MyPageLikes({ content }) {
  const [likes, setLikes] = useState(content);

  return (
    <>
      {likes
        ? Children.toArray(
            likes.map((el) => (
              <GridDetailBox>
                <GridTitle>{el.postTitle}</GridTitle>
                <Divider></Divider>
                <GridDetail>{el.postContent}</GridDetail>
              </GridDetailBox>
            )),
          )
        : '좋아요한 글이 없습니다.'}
    </>
  );
}

//post에 따라서 정해짐. null 이면 좋아요한 글이 없습니다 출력

export default MyPageLikes;

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
