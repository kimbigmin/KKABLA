import React from 'react';
import styled from 'styled-components';

import CommentInput from './CommentInput';
import Comment from './Comment';

function CommentBox({ data, onCreate, author, onDelete, isLogin }) {
  console.log(data);
  return (
    <Container>
      {isLogin ? <CommentInput onCreate={onCreate} author={author} /> : null}
      <Comments>
        {data.length !== 0 && data[0].comments
          ? data[0].comments.map((comment) => (
              <Comment data={comment} onDelete={onDelete} isLogin={isLogin} />
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
