import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Article from '../components/board-detail-page/Article/Article';

import CommentBox from '../components/board-detail-page/Comment/CommentBox';

const mockComment = [
  {
    id: 0,
    author: 'a****',
    content: '충격이네요 ㄷㄷ',
    data: {
      like: 3,
      're-comment': 1,
    },
  },
  {
    id: 1,
    author: 'd****',
    content:
      '접종 금기·연기 등 의학적 사유가 있을 때는 노바백스 백신으로 3차 접종을 받을 수 있다.교차접종을 받을 경우에는 의사의 판단이 필요하다. 대상자는 의료기관의 예비명단에 이름을 올려 당일 예약을 마치면 접종받을 수 있다.권근용 추진단 예방접종관리팀장은 "노바백스 외 백신으로 1·2차 접종을 받은 후에 아나필락시스나 혈소판 감소성 혈전증, 모세혈관 누출 증후군 등의 중대한 이상반응이 나타났을 때는 (동일 백신) 접종 금기 대상"이라며',
    data: {
      like: 3,
      're-comment': 2,
    },
  },
  {
    id: 2,
    author: 'b*****',
    content: '좋은 정보 감사합니다~',
    data: {
      like: 3,
      're-comment': 4,
    },
  },
  {
    id: 3,
    author: '엘****',
    content: '깜짝 놀랐습니다...',
    data: {
      like: 3,
      're-comment': 4,
    },
  },
];

function BoardDetailPage() {
  const [commentList, setCommentList] = useState([]);
  const [author, setAuthor] = useState(null);
  const nextId = useRef(mockComment.length + 1);

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
      <h3>{'자유게시판'}</h3>
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
