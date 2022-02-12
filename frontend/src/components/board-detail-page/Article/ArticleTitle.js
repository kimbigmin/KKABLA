import React from 'react';
import styled from 'styled-components';

function ArticleTitle({ title, date, author }) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <TitleDetail>
        <div className="info">작성자: {author}</div>
        <div className="info">작성일: {date}</div>
      </TitleDetail>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: solid 1px #e5e5e5;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TitleDetail = styled.div`
  display: flex;

  .info {
    margin-left: 1rem;
    font-size: 0.8rem;
    color: gray;
    font-weight: 500;
  }
`;

export default ArticleTitle;
