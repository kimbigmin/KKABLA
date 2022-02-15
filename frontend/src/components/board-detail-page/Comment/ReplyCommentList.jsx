import React, { useState } from 'react';
import ReplyInput from './CommentInput';
import styled from 'styled-components';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ReplyComment from './ReplyComment';
import axios from 'axios';

function ReplyCommentList({ comment, replyList, setReplyList }) {
  // 대댓글 작성 핸들러
  const handleReplyCreate = async (newComment) => {
    await axios
      .post(
        `http://localhost:5000/post/comment/comment/${comment._id}`,
        newComment,
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        setReplyList((current) => {
          const newArr = [...current, res.data];
          return newArr;
        });
      });
  };
  return (
    <>
      {JSON.parse(localStorage.getItem('nickName')) && (
        <ReplyInput type={'reply'} onCreate={handleReplyCreate} />
      )}

      {replyList.map((item) => {
        console.log(item);
        return (
          <ReplyContainer>
            <IconContainer>
              <SubdirectoryArrowRightIcon />
            </IconContainer>
            <CommentContainer>
              <ReplyComment comment={item} />
            </CommentContainer>
          </ReplyContainer>
        );
      })}
    </>
  );
}

const ReplyContainer = styled.div`
  margin-left: 10px;
  display: flex;
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 40%;
  transform: translateX(-40%);
`;

const CommentContainer = styled.div`
  margin-left: 1rem;
  width: 94%;
`;

export default ReplyCommentList;
