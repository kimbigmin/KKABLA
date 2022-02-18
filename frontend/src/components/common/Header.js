import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import SearchAppBar from './SearchBar';
import styled from 'styled-components';

function Header({ isLogin, isAdmin }) {
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
        개발게시판
      </Link>

      {isLogin ? (
        isAdmin ? (
          <Link to="/admin" className="link">
            관리자 페이지
          </Link>
        ) : (
          <Link to="/mypage" className="link">
            마이페이지
          </Link>
        )
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

const Nav = styled.header`
  font-family: 'Pretendard-Regular';
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  z-index: 100;

  img {
    width: 160px;
  }

  .link {
    text-decoration: none;
    color: #484848ea;
    font-size: 1.1rem;
    font-weight: 500;

    &:hover {
      color: #4586ff;
      font-weight: 600;
      transition-property: color;
      transition-duration: 0.5s;
    }
  }

  .log {
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    color: #4586ff;
  }
`;

export default Header;
