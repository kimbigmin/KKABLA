import React from 'react';
import CommonBoardList from 'components/Board/common/CommonBoardList';

function FreeBoardPage({ isLogin }) {
  return <CommonBoardList type="free" title="자유게시판" isLogin={isLogin} />;
}

export default FreeBoardPage;
