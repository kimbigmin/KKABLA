import BoardContents from 'components/Board/common/BoardContents';
import React from 'react';
import styled from 'styled-components';

function ArticleContent({ content }) {
  return (
    <ContentContainer>
      <BoardContents item={content} />
    </ContentContainer>
  );
}

const ContentContainer = styled.div`
  line-height: 1.7;
  font-size: 1.1rem;
  padding: 3.5rem 1rem 3.5rem 1rem;
  border-bottom: solid 1px #e5e5e5;

  p {
    font-size: 1.1rem;
  }
`;

export default ArticleContent;
