import React from 'react';
import styled from 'styled-components';

import CommentInput from './CommentInput';
import Comment from './Comment';

const mock = [
  {
    author: '강아지',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 1,
    },
  },
  {
    author: '고양이',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 2,
    },
  },
  {
    author: '햄스터',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 4,
    },
  },
  {
    author: '개미',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 4,
    },
  },
];

function CommentBox() {
  return (
    <Container>
      <CommentInput />
      <Comments>
        {mock.map((comment) => (
          <Comment
            author={comment.author}
            content={comment.content}
            data={comment.data}
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
