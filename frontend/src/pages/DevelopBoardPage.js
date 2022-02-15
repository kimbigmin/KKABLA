import React from 'react';
import CommonBoardList from 'components/Board/common/CommonBoardList';

function DevelopBoardPage({ isLogin }) {
  return (
    <CommonBoardList type="develop" title="개발게시판" isLogin={isLogin} />
  );
}

export default DevelopBoardPage;
