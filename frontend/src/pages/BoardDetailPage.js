import React, { useState, useRef } from 'react';
import styled from 'styled-components';

import Article from '../components/Article';
import CommentBox from '../components/Comment/CommentBox';

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

  useState(() => {
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
  max-width: 1260px;
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default BoardDetailPage;
