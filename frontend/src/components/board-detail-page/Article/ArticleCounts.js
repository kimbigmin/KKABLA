import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import styled from 'styled-components';

export default function ArticleCounts({
  likeCount,
  commentCount,
  size,
  onClick,
}) {
  return (
    <ArticleCountsContainer>
      <Item>
        <ThumbUpIcon fontSize={size} color="primary" />
        <p>{likeCount}</p>
      </Item>
      <Item style={{ marginLeft: '0.5rem' }} onClick={onClick}>
        <ChatBubbleOutlineIcon fontSize={size} color="action" />
        <p>{commentCount}</p>
      </Item>
    </ArticleCountsContainer>
  );
}

const ArticleCountsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
