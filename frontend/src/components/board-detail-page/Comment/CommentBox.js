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
}) {
  console.log(commentList);
  return (
    <Container>
      {JSON.parse(localStorage.getItem('nickName')) && (
        <CommentInput onCreate={onCreate} author={author} type={'origin'} />
      )}
      <Comments>
        {commentList &&
          commentList.map((comment) => (
            <Comment
              key={comment._id}
              comment={comment}
              isReplyComment={false}
              isLogin={isLogin}
              setCommentList={setCommentList}
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
