import React from 'react';
import styled from 'styled-components';
import logo from '../common/header/logo.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

function Card({ data }) {
  return (
    <>
      <Box>
        <img src={logo} alt="lgoo" />
        <div className="info">
          <h3>까블라 아카데미</h3>
          <span>
            {/* 받아온 평점으로 동적으로 별 생성하기 */}
            <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            <StarHalfIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
          </span>
          <p>3.5</p>
        </div>
      </Box>
    </>
  );
}

export default Card;

const Box = styled.div`
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
