import React, { useState } from 'react';
import Box from '@mui/material/Box';
import ArticleCounts from '../Article/ArticleCounts';
import styled from 'styled-components';
import ReplyCommentList from './ReplyCommentList';
import { getRefinedDate } from '../../../utils/getRefinedDate';
import axios from 'axios';
import { getLocalStorageItem } from 'utils/getLocalStorageItem';
import { getAnonymousName } from 'utils/getAnonymousName';

function Comment({ comment, isReplyComment, setCommentList, articleWriter }) {
  const [commentLikeList, setCommentLikeList] = useState(comment.like);
  const [isCommentClick, setIsCommentClick] = useState(false);
  const [replyList, setReplyList] = useState(comment.comments);
  const [isLikeClick, setIsLikeClick] = useState(() => {
    return commentLikeList.includes(getLocalStorageItem('nickName'))
      ? true
      : false;
  });
  const [commentLikeCount, setCommentLikeCount] = useState(comment.like.length);

  // 댓글 삭제 핸들러
  const handleDelete = async () => {
    await setCommentList((current) => {
      const newArr = [...current].filter((item) => {
        return item._id !== comment._id;
      });
      return newArr;
    });

    await axios.delete(`/post/comment/${comment._id}`, {
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
        setCommentLikeCount(commentLikeCount - 1);
        setIsLikeClick(false);
        setCommentLikeList((current) => {
          const index = [...current].indexOf(comment._id);
          return [...current].splice(index, 1);
        });
      } else {
        setCommentLikeCount(commentLikeCount + 1);
        setIsLikeClick(true);
        setCommentLikeList((current) => {
          const newArr = [...current, comment._id];
          return newArr;
        });
      }

      await axios.get(`/post/comment/like/${comment._id}`, {
        withCredentials: true,
      });
    }
  };

  // 댓글 신고 핸들러
  const onHandleReport = async () => {
    if (!alert('정말로 신고하시겠습니까?')) {
      await axios.post(`/post/comment/report/${comment._id}`, {
        withCredentials: true,
      });
    }
  };

  console.log(comment);

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

          {getLocalStorageItem('nickName') === comment.creator ? (
            <DeleteButton onClick={handleDelete}>삭제</DeleteButton>
          ) : (
            getLocalStorageItem('nickName') && (
              <span className="report" onClick={onHandleReport}>
                신고
              </span>
            )
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
            onHandleReport={onHandleReport}
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
  .report {
    margin-left: 1rem;
    font-size: 0.7rem;
    color: gray;
    cursor: pointer;

    &:hover {
      color: red;
    }
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
