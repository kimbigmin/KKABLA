import React from 'react';
import styled from 'styled-components';

import Article from '../components/Article';
import CommentBox from '../components/Comment/CommentBox';

function BoardDetailPage() {
  return (
    <DetailPageContainer>
      <Article />
      <CommentBox />
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
