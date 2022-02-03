import React from 'react';
import styled from 'styled-components';

import Article from '../components/Article';
import CommentBox from '../components/CommentBox';

function BoardDetailPage() {
  return (
    <DetailPageContainer>
      <Article />
      <CommentBox />
    </DetailPageContainer>
  );
}

const DetailPageContainer = styled.div`
  padding: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default BoardDetailPage;
