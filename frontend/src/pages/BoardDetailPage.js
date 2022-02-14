import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Article from '../components/board-detail-page/Article/Article';
import axios from 'axios';
import CommentBox from '../components/board-detail-page/Comment/CommentBox';

function BoardDetailPage({ isLogin }) {
  const [commentList, setCommentList] = useState([]);
  const location = useLocation();
  const { dataFromBoard } = location.state;
  console.log(dataFromBoard);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          `http://localhost:5000/board/${dataFromBoard.type}/${dataFromBoard._id}`,
        )
        .then((res) => {
          console.log(res.data.board[0].comments);
          setCommentList(res.data.board[0].comments);
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
        setCommentList((current) => {
          const newArr = [...current, res.data];
          return newArr;
        });
      });
  };

  const handleDelete = (index) => {
    // setCommentList(commentList.filter((item) => item.id !== index));
  };
  console.log(commentList);
  return (
    <DetailPageContainer>
      <h3>{dataFromBoard.type === 'free' ? '자유게시판' : '개발게시판'}</h3>
      <Article data={dataFromBoard} commentList={commentList} />
      <CommentBox
        commentList={commentList}
        onCreate={handleCreate}
        onDelete={handleDelete}
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
