import React from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import styled from 'styled-components';

export default function ArticleCounts({
  commentCount,
  size,
  onClick,
  isReplyComment,
  data,
  isLogin,
  isClick,
  likeCount,
}) {
  return (
    <ArticleCountsContainer>
      <Item>
        {isClick ? (
          <ThumbUpIcon fontSize={size} color="primary" onClick={onClick} />
        ) : (
          <ThumbUpOffAltIcon
            fontSize={size}
            color="primary"
            onClick={onClick}
          ></ThumbUpOffAltIcon>
        )}
        <p>{likeCount}</p>
      </Item>
      <Item style={{ marginLeft: '0.5rem' }} onClick={onClick}>
        <ChatBubbleOutlineIcon fontSize={size} color="action" />
        <p>{commentCount ? commentCount.length : 0}</p>
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
