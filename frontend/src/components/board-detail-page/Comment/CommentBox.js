import React from 'react';
import styled from 'styled-components';

import CommentInput from './CommentInput';
import Comment from './Comment';

function CommentBox({ data, onCreate, author, onDelete }) {
  return (
    <Container>
      <CommentInput onCreate={onCreate} author={author} />
      <Comments>
        {data.map((comment) => (
          <Comment
            id={comment.id}
            author={comment.author}
            content={comment.content}
            data={comment.data}
            onDelete={onDelete}
            myself={author}
          />
        ))}
      </Comments>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Comments = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export default CommentBox;
