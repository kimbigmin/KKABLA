import React from 'react';
import styled from 'styled-components';

function ArticleContent({ content }) {
  return <ContentContainer>{content}</ContentContainer>;
}

const ContentContainer = styled.div`
  padding: 30px;
  line-height: 1.6;
`;

export default ArticleContent;
