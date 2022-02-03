import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ArticleCountsContainer, Item } from './styles';

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

ArticleCountsContainer.defaultProps = {
  fontSize: 'large',
};
