import React, { useState } from 'react';
import ReplyInput from './CommentInput';
import Comment from './Comment';
import styled from 'styled-components';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ReplyComment from './ReplyComment';
import axios from 'axios';

function ReplyCommentList({ onCreate, comment }) {
  const [replyList, setReplyList] = useState(comment.comments);
  // 대댓글 작성 핸들러
  console.log(comment);
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
      <ReplyInput type={'reply'} onCreate={handleReplyCreate} />

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
