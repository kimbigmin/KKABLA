import React from 'react';
import styled from 'styled-components';

import CommentInput from './CommentInput';
import Comment from './Comment';

function CommentBox({ data, onCreate, author, onDelete }) {
  console.log(data);
  return (
    <Container>
      <CommentInput onCreate={onCreate} author={author} />
      <Comments>
        {data.length !== 0 && data[0].comments
          ? data[0].comments.map((comment) => (
              <Comment data={comment} onDelete={onDelete} />
            ))
          : null}
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
