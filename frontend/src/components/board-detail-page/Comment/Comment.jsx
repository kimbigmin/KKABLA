import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ArticleCounts from '../Article/ArticleCounts';
import styled from 'styled-components';
import { Button } from '@mui/material';
import ReplyComment from './ReplyComment';
import { getRefinedDate } from '../../../utils/getRefinedDate';

function Comment({ comment, onDelete, isReplyComment, isLogin }) {
  // const handleDelete = (e) => {
  //   onDelete(id);
  // };

  const [isClick, setIsClick] = useState(false);

  const handleInComment = () => {
    setIsClick(!isClick);
  };
  return (
    <CommentContainer>
      <Box
        sx={{
          width: '100%',
          minHeight: 60,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NonText>
          <AuthorText>{comment.nickName}</AuthorText>
          <span>{getRefinedDate(comment.createdAt)}</span>
          {/* {author === myself && (
            <Button size="small" onClick={handleDelete} sx={{ color: 'red' }}>
              삭제
            </Button>
          )} */}
        </NonText>

        <Text>{comment.contents}</Text>
        {!isReplyComment && (
          <ArticleCounts
            size={'small'}
            likeCount={comment.like}
            commentCount={comment.comments}
            onClick={handleInComment}
            isReplyComment={isReplyComment}
          />
        )}
        {isClick && (
          <ReplyComment replyComments={comment.comments} isLogin={isLogin} />
        )}
      </Box>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  padding: 1.3rem;
  border-top: 1px solid #00000021;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: #dfdfdf2a;
  }
`;

const NonText = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 1rem;
    font-size: 0.7rem;
    color: gray;
  }
`;

const Text = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const AuthorText = styled.div`
  color: black;
  font-weight: bold;
`;

export default Comment;
