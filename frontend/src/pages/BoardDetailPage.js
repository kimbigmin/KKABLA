import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import Article from '../components/board-detail-page/Article/Article';
import axios from 'axios';
import CommentBox from '../components/board-detail-page/Comment/CommentBox';

function BoardDetailPage({ isLogin }) {
  const [commentList, setCommentList] = useState([]);

  const location = useLocation();
  const { dataFromBoard } = location.state;
  const [likeCount, setLikeCount] = useState(
    dataFromBoard.like ? dataFromBoard.like.length : 0,
  );
  const [isClick, setIsClick] = useState(() => {
    const nickName = localStorage.getItem('nickName');

    if (dataFromBoard.like) {
      if (dataFromBoard.like.includes(JSON.parse(nickName))) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  });

  console.log(isLogin);
  console.log(isClick);
  console.log(dataFromBoard);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://localhost:5000/board/${dataFromBoard.type}/${dataFromBoard._id}`,
        )
        .then((res) => {
          console.log(res.data[0].comments);
          setCommentList(() => {
            console.log(res.data[0].comments);
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
      .post(
        `http://localhost:5000/post/board/comment/${dataFromBoard._id}`,
        newComment,
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        setCommentList((current) => {
          const newArr = [...current, res.data];
          return newArr;
        });
      });
  };

  const handleArticleLike = async () => {
    if (JSON.parse(localStorage.getItem('nickName'))) {
      if (isClick) {
        setIsClick(!isClick);
        setLikeCount(likeCount - 1);
      } else {
        setIsClick(!isClick);
        setLikeCount(likeCount + 1);
      }

      await axios.post(
        `http://localhost:5000/post/board/like/${dataFromBoard._id}`,
        { data: isLogin },
        {
          withCredentials: true,
        },
      );
    }
  };

  console.log(commentList);

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
      />
      <CommentBox
        commentList={commentList}
        onCreate={handleCreate}
        isLogin={isLogin}
        setCommentList={setCommentList}
      />
    </DetailPageContainer>
  );
}

const DetailPageContainer = styled.div`
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
