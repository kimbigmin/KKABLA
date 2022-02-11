import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ArticleCounts from '../Article/ArticleCounts';
import styled from 'styled-components';
import { Button } from '@mui/material';
import InComment from '../InComment/InComment';

function Comment({ id, author, content, data, onDelete, myself }) {
  const handleDelete = (e) => {
    onDelete(id);
  };

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
          padding: '1rem 0 1rem 0',
        }}
      >
        <NonText>
          <AuthorText>{author}</AuthorText>
          <span>2022.02.04</span>
          {author === myself && (
            <Button size="small" onClick={handleDelete} sx={{ color: 'red' }}>
              삭제
            </Button>
          )}
        </NonText>

        <Text>{content}</Text>
        <ArticleCounts
          size={'small'}
          likeCount={data.like}
          commentCount={data['re-comment']}
          onClick={handleInComment}
        />
        {isClick && <InComment></InComment>}
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
