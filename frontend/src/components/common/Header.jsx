import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import logo from './logo.png';

import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/topic" className="link">
        토픽게시판
      </Link>
      <Link to="/free" className="link">
        자유게시판
      </Link>
      <Link to="/review" className="link">
        리뷰게시판
      </Link>
      <Link to="/mypage" className="link">
        마이페이지
      </Link>
    </Container>
  );
}

const Container = styled.header`
  margin: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

  img {
    width: 150px;
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
`;

export default Header;
