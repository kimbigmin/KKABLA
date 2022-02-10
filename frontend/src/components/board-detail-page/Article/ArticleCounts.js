import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import styled from 'styled-components';

export default function ArticleCounts({ likeCount, commentCount, size }) {
  return (
    <ArticleCountsContainer>
      <Item>
        <ThumbUpIcon fontSize={size} color="primary" />
        <p>{likeCount}</p>
      </Item>
      <Item>
        <ChatBubbleOutlineIcon fontSize={size} color="action" />
        <p>{commentCount}</p>
      </Item>
    </ArticleCountsContainer>
  );
}

const ArticleCountsContainer = styled.div`
  position: absolute;
  bottom: 0.1em;

  display: flex;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;
