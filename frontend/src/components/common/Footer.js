import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import styled from 'styled-components';
import logo from '../../images/logo.png';

function Footer() {
  return (
    <FooterBar>
      <img src={logo} alt="logo"></img>
      <p>
        <CopyrightIcon sx={{ fontSize: '1.1rem' }} />
        Copyright | Team10 By Elice SW Engineer Track
      </p>
      <div className="github-list">
        <p>Contributor GitHub | </p>
        <div className="lists">
          <ul>
            <li>
              <a href="#">안용연</a>
            </li>
            <li>
              <a
                href="https://github.com/kimbigmin"
                target="_blank"
                rel="noreferrer"
              >
                김민규
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">배대철</a>
            </li>
            <li>
              <a href="#">이가은</a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#">이하현</a>
            </li>
            <li>
              <a href="#">김예찬</a>
            </li>
          </ul>
        </div>
      </div>
    </FooterBar>
  );
}

const FooterBar = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 150px;
  color: rgba(0, 0, 0, 0.365);
  font-size: 0.8rem;

  img {
    width: 160px;
    opacity: 0.8;
  }

  p {
    display: flex;
    justify-content: center;
  }

  .github-list {
    display: flex;
    align-items: center;
  }
  .lists {
    display: flex;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  ul {
    margin: 0.4rem;
  }

  li {
    margin: 0.3rem;
  }
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.365);

    &:hover {
      color: rgba(0, 0, 0, 0.589);
    }
  }
`;

export default Footer;
