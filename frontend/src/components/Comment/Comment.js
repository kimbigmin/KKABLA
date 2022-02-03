import React from 'react';
import Box from '@mui/material/Box';
import ArticleCounts from '../LikeComments';
import styled from 'styled-components';

function Comment({ author, content, data }) {
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
          <div>
            <ArticleCounts
              size={'small'}
              likeCount={data.like}
              commentCount={data['re-comment']}
            />
          </div>
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
`;

export default Comment;
