import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import ArticleCounts from './ArticleCounts';
import { getAnonymousName } from '../../../utils/getAnonymousName';
import { getRefinedDate } from '../../../utils/getRefinedDate';

// 날짜정제 함수

function Article({ data, commentList, likeList, setLikeList, isLogin }) {
  console.log(commentList);
  return (
    <ArticleContainer>
      <Box
        sx={{
          width: '100%',
          minHeight: 300,
          padding: '1rem 1rem 1rem 1rem',
          backgroundColor: 'white',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <ArticleTitle
          title={data.title}
          date={getRefinedDate(data.createdAt)}
          author={getAnonymousName(data.creator)}
        />
        <ArticleContent content={data.contents} />
        <ArticleCounts
          data={data}
          likeList={likeList}
          setLikeList={setLikeList}
          commentCount={commentList}
          isLogin={isLogin}
        />
      </Box>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Article;
