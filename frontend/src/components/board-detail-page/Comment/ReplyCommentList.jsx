import React from 'react';
import ReplyInput from './CommentInput';
import styled from 'styled-components';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import ReplyComment from './ReplyComment';
import axios from 'axios';
import { getLocalStorageItem } from 'utils/getLocalStorageItem';

function ReplyCommentList({ comment, replyList, setReplyList, articleWriter }) {
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
      {getLocalStorageItem('nickName') && (
        <ReplyInput type={'reply'} onCreate={handleReplyCreate} />
      )}

      {replyList.map((item) => {
        return (
          <ReplyContainer key={item._id}>
            <IconContainer>
              <SubdirectoryArrowRightIcon />
            </IconContainer>
            <CommentContainer>
              <ReplyComment
                comment={item}
                setReplyList={setReplyList}
                articleWriter={articleWriter}
              />
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
