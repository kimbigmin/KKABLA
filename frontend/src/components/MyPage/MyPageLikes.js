import styled from 'styled-components';
import React, { useState, Children } from 'react';
import { Divider, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function MyPageLikes({ content }) {
  return (
    <>
      {content
        ? Children.toArray(
            content.map((el) => (
              <Link
                to={`/board/${el.type}/${el._id}`}
                state={{ dataFromBoard: el }}
              >
                <GridDetailBox>
                  <GridTitle>{el.title}</GridTitle>
                  <GridBoard>
                    {el.type === 'free' ? '자유게시판' : '개발게시판'}
                  </GridBoard>
                </GridDetailBox>
              </Link>
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

const GridBoard = styled(Box)`
  padding: 10px;
  font-size: 12px;
  line-height: 12px;
`;
