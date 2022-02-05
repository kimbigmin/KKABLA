import styled from 'styled-components';

export const FooterBar = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 150px;
  color: rgba(0, 0, 0, 0.365);
  font-size: 0.8rem;
  border-top: 1px solid rgba(0, 0, 0, 0.105);

  .github-list {
    display: flex;
    align-items: center;
  }
  .lists {
    display: flex;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  img {
    width: 160px;
    opacity: 0.8;
  }

  p {
    display: flex;
    justify-content: center;
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

export const Nav = styled.header`
  margin: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;

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
