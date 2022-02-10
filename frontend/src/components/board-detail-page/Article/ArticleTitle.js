import React from 'react';
import styled from 'styled-components';

function ArticleTitle({ title, date, author }) {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <TitleDetail>
        <div className={'info'}>작성자: {author}</div>
        <div className={'info'}>작성일: {date}</div>
      </TitleDetail>
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  position: relative;

  height: 40px;
  margin: 10px;
  padding: 10px;

  border-bottom: solid 3px #e5e5e5;
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 500;
`;

const TitleDetail = styled.div`
  position: absolute;
  right: 0;

  display: flex;
  margin-bottom: 10px;
`;

export default ArticleTitle;
