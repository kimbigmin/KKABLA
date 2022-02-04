import React from 'react';
import { TitleContainer, Title, TitleDetail } from './styles';
import './styles.scss';

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

export default ArticleTitle;
