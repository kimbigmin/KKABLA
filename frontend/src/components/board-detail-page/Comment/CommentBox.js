import React from 'react';
import styled from 'styled-components';
import CommentInput from './CommentInput';
import Comment from './Comment';

function CommentBox({
  commentList,
  onCreate,
  author,
  isLogin,
  setCommentList,
  articleWriter,
}) {
  return (
    <Container>
      {isLogin && <CommentInput onCreate={onCreate} type={'origin'} />}
      <Comments>
        {commentList &&
          commentList.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              isReplyComment={false}
              isLogin={isLogin}
              setCommentList={setCommentList}
              articleWriter={articleWriter}
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
