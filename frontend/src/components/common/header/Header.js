import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import SearchAppBar from './SerachBar';
import { Nav } from '../../../styles/common/styled';

function Header({ isLogin }) {
  console.log(isLogin);
  return (
    <Nav>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/board/review" className="link">
        리뷰게시판
      </Link>
      <Link to="/board/free" className="link">
        자유게시판
      </Link>
      <Link to="/board/develop" className="link">
        개발이야기
      </Link>

      {isLogin ? (
        <Link to="/mypage" className="link">
          마이페이지
        </Link>
      ) : null}
      {isLogin ? (
        <Link className="log" to="/logout">
          로그아웃
        </Link>
      ) : (
        <Link className="log" to="/login">
          로그인
        </Link>
      )}
      <SearchAppBar />
    </Nav>
  );
}

export default Header;
