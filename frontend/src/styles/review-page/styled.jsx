import styled from 'styled-components';

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  margin-bottom: 5rem;
  align-items: center;

  h2 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #484848ea;
  }

  span {
    font-size: 0.8rem;
    color: #484848ea;
    cursor: pointer;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  text-decoration: none;

  img {
    width: 80%;
  }

  .info {
    margin-top: 3rem;

    p {
      font-weight: bold;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    font-weight: 500;
    color: rgba(50, 50, 50, 0.961);
  }
`;

export const Introduction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 2rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: #4586ffb2;
  }

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 2rem;

  img {
    width: 13rem;
  }

  .info {
    margin-top: 1rem;
  }

  h3 {
    margin-bottom: 0.4rem;
  }
`;

export const ListTopBar = styled.div`
  margin-top: 6rem;

  .list-topbar {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: bold;
    }

    button {
      border: none;
      background-color: white;
      font-size: 1.1rem;
      font-weight: 500;
      background-color: #4a88ff;
      border-radius: 5px;
      padding: 0.3rem;
      color: white;
      cursor: pointer;
    }
  }
`;

export const List = styled.div`
  margin-top: 1.5rem;
  border-top: solid 1px #52515120;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  color: #000000a6;
  background-color: #e6e6e62c;
`;

export const Score = styled.div`
  display: flex;
  flex-direction: column;
  width: 6rem;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 1rem;
  }
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  .title {
    font-weight: bold;
    margin-bottom: 1.4rem;
  }

  .writer {
    margin-bottom: 3rem;
  }

  .auth {
    font-size: 0.8rem;
    background-color: #4586ff47;
    padding: 0.3rem;
    border-radius: 5px;
    margin-left: 0.6rem;
  }

  .content {
    margin-bottom: 2rem;
  }
`;

export const Date = styled.div`
  display: flex;
`;

export const Blind = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .blind {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0.036);
    color: #4d4d4d;

    position: absolute;
    width: 100%;
    height: 70%;

    font-size: 2rem;
    font-weight: bold;
  }
`;

export const IntroBar = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #575757;
  margin-bottom: 1rem;
`;
