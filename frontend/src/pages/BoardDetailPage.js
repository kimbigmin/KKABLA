import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Article from '../components/board-detail-page/Article/Article';

import CommentBox from '../components/board-detail-page/Comment/CommentBox';

const mockComment = [
  {
    id: 0,
    author: '강아지',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 1,
    },
  },
  {
    id: 1,
    author: '고양이',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 2,
    },
  },
  {
    id: 2,
    author: '햄스터',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 4,
    },
  },
  {
    id: 3,
    author: '개미',
    content: 'lorem ipsum 어쩌구..',
    data: {
      like: 3,
      're-comment': 4,
    },
  },
];

function BoardDetailPage() {
  const [commentList, setCommentList] = useState([]);
  const [author, setAuthor] = useState(null);
  let nextId = useRef(mockComment.length + 1);

  useEffect(() => {
    //fetch Comment
    setCommentList(mockComment);
    setAuthor('default');
  }, []);

  const handleCreate = (newComment) => {
    setCommentList(commentList.concat({ ...newComment, id: nextId.current }));
    nextId.current += 1;
  };

  const handleDelete = (index) => {
    console.log(index);
    setCommentList(commentList.filter((item) => item.id !== index));
  };

  return (
    <DetailPageContainer>
      <h3>자유게시판</h3>
      <Article />
      <CommentBox
        data={commentList}
        onCreate={handleCreate}
        author={author}
        onDelete={handleDelete}
      />
    </DetailPageContainer>
  );
}

const DetailPageContainer = styled.div`
  width: 60%;
  margin: 5rem auto 5rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: bold;
  }
`;

export default BoardDetailPage;
