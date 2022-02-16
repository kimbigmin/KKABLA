import React, { useState } from 'react';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { getRefinedDate } from '../../../utils/getRefinedDate';
import { getLocalStorageItem } from 'utils/getLocalStorageItem';
import axios from 'axios';

function ReplyComment({ comment, onDelete, setReplyList, articleWriter }) {
  console.log(comment);

  const isReplyWriter = comment.creator === articleWriter;

  const handleReplyDelete = async () => {
    await setReplyList((current) => {
      const newArr = [...current].filter((item) => {
        return item._id !== comment._id;
      });
      return newArr;
    });

    await axios
      .delete(`http://localhost:5000/post/comment/${comment._id}`, {
        withCredentials: true,
      })
      .then(console.log);
  };

  return (
    <CommentContainer>
      <Box
        sx={{
          width: '100%',
          minHeight: 60,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <NonText>
          <AuthorText>{isReplyWriter ? '작성자' : comment.creator}</AuthorText>
          <span className="date">{getRefinedDate(comment.createdAt)}</span>

          {getLocalStorageItem('nickName') === comment.creator && (
            <DeleteButton onClick={handleReplyDelete}>삭제</DeleteButton>
          )}
        </NonText>

        <Text writer={isReplyWriter}>{comment.contents}</Text>
      </Box>
    </CommentContainer>
  );
}

const CommentContainer = styled.div`
  width: 100%;
  padding: 1.3rem;
  border-top: 1px solid #00000021;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    background-color: #dfdfdf2a;
  }
`;

const NonText = styled.div`
  display: flex;
  align-items: center;

  .date {
    margin-left: 1rem;
    font-size: 0.7rem;
    color: gray;
  }
`;

const Text = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  line-height: 1.5;
  color: ${({ writer }) => {
    return writer ? '#4586FF' : 'black';
  }};
`;

const AuthorText = styled.div`
  color: black;
  font-weight: bold;
`;

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
  font-size: 0.7rem;
  margin-left: 1rem;
`;

export default ReplyComment;
