import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { ArticleCountsContainer, Item } from './styles';

export default function ArticleCounts({ likeCount, commentCount }) {
  return (
    <ArticleCountsContainer>
      <Item>
        <ThumbUpIcon color="primary" />
        <p>{likeCount}</p>
      </Item>
      <Item>
        <ChatBubbleOutlineIcon color="action" />
        <p>{commentCount}</p>
      </Item>
    </ArticleCountsContainer>
  );
}
