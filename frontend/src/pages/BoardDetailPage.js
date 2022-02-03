import React from 'react';
import styled from 'styled-components';
import Card from '../components/review-page/Card';

function BoardDetailPage() {
  return (
    <DetailPageContainer>
      <Card />
    </DetailPageContainer>
  );
}

const DetailPageContainer = styled.div`
  padding: 50px;
`;

export default BoardDetailPage;
