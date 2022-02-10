import React from 'react';
import Box from '@mui/material/Box';
import ArticleCounts from '../Article/ArticleCounts';
import styled from 'styled-components';
import { Button } from '@mui/material';

function Comment({ id, author, content, data, onDelete, myself }) {
  const handleDelete = (e) => {
    onDelete(id);
  };

  return (
    <CommentContainer>
      <Box
        sx={{
          width: '90%',
          minHeight: 60,
          backgroundColor: 'rgba(162,210,255,0.3)',
          borderRadius: 2,
        }}
      >
        <NonText>
          <AuthorText>{author}</AuthorText>
          <div style={{ marginRight: 70 }}>
            <ArticleCounts
              size={'small'}
              likeCount={data.like}
              commentCount={data['re-comment']}
              sx={{ marginTop: -2 }}
            />
          </div>
          {author === myself && (
            <Button
              size="small"
              onClick={handleDelete}
              sx={{ padding: 0, marginTop: 0 }}
            >
              삭제
            </Button>
          )}
        </NonText>

        <Text>{content}</Text>
      </Box>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  width: 100%;
  padding: 2px;

  display: flex;
  justify-content: center;
`;

const NonText = styled.div`
  padding-left: 10px;
  padding-top: 10px;
  position: relative;
  display: flex;
`;

const Text = styled.div`
  margin: 10px 0 10px 20px;
`;

const AuthorText = styled.div`
  margin-right: 20px;
  color: gray;
  padding-top: 4px;
  padding-left: 8px;
`;

export default Comment;
