import React, { Children } from 'react';
import { Link } from 'react-router-dom';
//style
import { Box } from '@mui/material';
import styled from 'styled-components';

function MyPagePosts({ content }) {
  return (
    <>
      {content
        ? Children.toArray(
            content.map((el) => (
              <Link to={`/board/${el.type}/${el._id}`} state={{ dataFromBoard: el }}>
                <GridDetailBox>
                  <GridTitle>{el.title}</GridTitle>
                  <GridBoard>{el.type === 'free' ? '자유게시판' : '개발게시판'}</GridBoard>
                </GridDetailBox>
              </Link>
            )),
          )
        : '글을 작성해주세요'}
    </>
  );
}

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

const GridBoard = styled(Box)`
  padding: 10px;
  font-size: 12px;
  line-height: 12px;
`;
