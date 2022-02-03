import React from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';

import ArticleTitle from './ArticleTitle';
import ArticleContent from './ArticleContent';
import ArticleCounts from '../LikeComments';

const mock = {
  title: 'Title example',
  date: '2022-02-02',
  author: 'no-named',
  like: 3,
  comment: 8,
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};

function Article() {
  return (
    <ArticleContainer>
      <Box
        sx={{
          width: '90%',
          minHeight: 300,
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      >
        <ArticleTitle
          title={mock.title}
          date={mock.date}
          author={mock.author}
        />
        <ArticleContent content={mock.content} />
        <ArticleCounts likeCount={mock.like} commentCount={mock.comment} />
      </Box>
    </ArticleContainer>
  );
}

const ArticleContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default Article;
