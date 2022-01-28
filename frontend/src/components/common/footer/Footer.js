import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import logo from '../../../images/logo.png';
import { FooterBar } from '../../../styles/common/styled';

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
              <a href="#" target="_blank">
                안용연
              </a>
            </li>
            <li>
              <a href="https://github.com/kimbigmin" target="_blank">
                김민규
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" target="_blank">
                배대철
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                이가은
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="#" target="_blank">
                이하현
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                김예찬
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterBar>
  );
}

export default Footer;
