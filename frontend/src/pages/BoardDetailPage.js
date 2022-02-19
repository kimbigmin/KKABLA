import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Article from '../components/board-detail-page/Article/Article';
import axios from 'axios';
import CommentBox from '../components/board-detail-page/Comment/CommentBox';
import { getLocalStorageItem } from 'utils/getLocalStorageItem';

function BoardDetailPage({ isLogin, isAdmin }) {
  const [commentList, setCommentList] = useState([]);

  const location = useLocation();
  const { dataFromBoard } = location.state;
  const [likeCount, setLikeCount] = useState(
    dataFromBoard.like ? dataFromBoard.like.length : 0,
  );
  const [isClick, setIsClick] = useState(() => {
    const nickName = getLocalStorageItem('nickName');

    if (dataFromBoard.like) {
      if (dataFromBoard.like.includes(nickName)) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`/board/${dataFromBoard.type}/${dataFromBoard._id}`)
        .then((res) => {
          setCommentList(() => {
            if (res.data[0].comments) {
              return res.data[0].comments;
            } else {
              return [];
            }
          });
        });
    };
    getData();
  }, []);

  const handleCreate = async (newComment) => {
    await axios
      .post(`/post/board/comment/${dataFromBoard._id}`, newComment, {
        withCredentials: true,
      })
      .then((res) => {
        setCommentList((current) => {
          const newArr = [...current, res.data];
          return newArr;
        });
      });
  };
  // 게시글 좋아요 핸들러
  const handleArticleLike = async () => {
    if (getLocalStorageItem('nickName')) {
      if (isClick) {
        setIsClick(!isClick);
        setLikeCount(likeCount - 1);
      } else {
        setIsClick(!isClick);
        setLikeCount(likeCount + 1);
      }

      await axios.post(
        `/post/board/like/${dataFromBoard._id}`,
        { data: isLogin },
        {
          withCredentials: true,
        },
      );
    }
  };

  return (
    <DetailPageContainer>
      <h3>{dataFromBoard.type === 'free' ? '자유게시판' : '개발게시판'}</h3>
      <Article
        data={dataFromBoard}
        commentList={commentList}
        isLogin={isLogin}
        onClickLike={handleArticleLike}
        isClick={isClick}
        likeCount={likeCount}
        isAdmin={isAdmin}
      />
      <CommentBox
        commentList={commentList}
        onCreate={handleCreate}
        isLogin={isLogin}
        setCommentList={setCommentList}
        articleWriter={dataFromBoard.creator}
        isAdmin={isAdmin}
      />
    </DetailPageContainer>
  );
}

const DetailPageContainer = styled.div`
  font-family: 'Pretendard-Regular';
  width: 50%;
  margin: 3rem auto 5rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
    margin-bottom: 3rem;
    font-size: 1.2rem;
  }
`;

export default BoardDetailPage;
