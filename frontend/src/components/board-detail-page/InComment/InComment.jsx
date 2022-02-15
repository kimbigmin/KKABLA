import React from 'react';
import InCommentInput from './InCommentInput';

function InComment({ isLogin }) {
  return (
    <>
      {isLogin && <InCommentInput></InCommentInput>}
      {/* <InCommentContents></InCommentContents> */}
    </>
  );
}

export default InComment;
