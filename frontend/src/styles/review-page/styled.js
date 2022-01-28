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
