import React from 'react';
import { getStars } from '../../utils/getStars';
import styled from 'styled-components';

function CardForReviewPage({ item }) {
  return (
    <>
      <Box>
        <ImageBox>
          <img src={item.image} alt="logo" />
        </ImageBox>
        <div className="info">
          <h3>{item.name}</h3>
          <span>{getStars(item.star)}</span>
          <p>{item.star}점</p>
        </div>
      </Box>
    </>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  width: 100%;
  height: 250px;
  border-radius: 10px;
  box-shadow: rgba(90, 97, 103, 0.2) 0px 2px 8px 0px;
  text-align: center;
  text-decoration: none;

  &:hover {
    box-shadow: rgba(49, 124, 182, 0.836) 0px 2px 8px 0px;
    transition-duration: 1s;
  }

  .info {
    p {
      font-weight: bold;
      margin-top: 0.5rem;
    }
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 2rem;
    font-weight: 600;
    color: rgba(50, 50, 50, 0.961);
  }
`;

const ImageBox = styled.div`
  width: 50%;
  margin: auto;

  display: flex;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
`;

export default CardForReviewPage;
