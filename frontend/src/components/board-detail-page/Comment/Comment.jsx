import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ArticleCounts from '../Article/ArticleCounts';
import styled from 'styled-components';
import ReplyCommentList from './ReplyCommentList';
import { getRefinedDate } from '../../../utils/getRefinedDate';
import axios from 'axios';
import { getLocalStorageItem } from 'utils/getLocalStorageItem';
import { getAnonymousName } from 'utils/getAnonymousName';

function Comment({
  comment,
  isReplyComment,
  isLogin,
  setCommentList,
  articleWriter,
}) {
  const [isCommentClick, setIsCommentClick] = useState(true);
  const [replyList, setReplyList] = useState(comment.comments);
  const [isLikeClick, setIsLikeClick] = useState(() => {
    const nickName = getLocalStorageItem('nickName');
    return comment.like.includes(nickName) ? true : false;
  });
  const [commentLikeCount, setCommentLikeCount] = useState(comment.like.length);

  console.log(comment);
  console.log(isLikeClick);

  // 댓글 삭제 핸들러
  const handleDelete = async () => {
    await setCommentList((current) => {
      console.log(current);
      const newArr = [...current].filter((item) => {
        return item._id !== comment._id;
      });
      return newArr;
    });

    await axios.delete(`http://localhost:5000/post/comment/${comment._id}`, {
      withCredentials: true,
    });
  };

  const handleReplyComment = () => {
    setIsCommentClick(!isCommentClick);
  };

  // 댓글 좋아요 핸들러
  const handleCommentLike = async () => {
    if (getLocalStorageItem('nickName')) {
      if (isLikeClick) {
        setIsLikeClick(!isLikeClick);
        setCommentLikeCount(commentLikeCount - 1);
      } else {
        setIsLikeClick(!isLikeClick);
        setCommentLikeCount(commentLikeCount + 1);
      }

      await axios.post(
        `http://localhost:5000/post/comment/like/${comment._id}`,
        { data: getLocalStorageItem('nickName') },
        {
          withCredentials: true,
        },
      );
    }
  };

  const isCommentWriter = comment.creator === articleWriter;

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
          <AuthorText>
            {isCommentWriter ? '작성자' : getAnonymousName(comment.creator)}
          </AuthorText>
          <span className="date">{getRefinedDate(comment.createdAt)}</span>

          {isCommentWriter && (
            <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
          )}
        </NonText>

        <Text writer={isCommentWriter}>{comment.contents}</Text>
        {!isReplyComment && (
          <ArticleCounts
            size={'small'}
            likeCount={commentLikeCount}
            commentCount={replyList}
            onClickComment={handleReplyComment}
            isReplyComment={isReplyComment}
            isClick={isLikeClick}
            onClickLike={handleCommentLike}
            comment={comment}
          />
        )}
        {isCommentClick && (
          <ReplyCommentList
            comment={comment}
            replyList={replyList}
            setReplyList={setReplyList}
            articleWriter={articleWriter}
          />
        )}
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

export default Comment;
