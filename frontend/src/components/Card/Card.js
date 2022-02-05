import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from 'styled-components';

function Card({ item }) {
  return (
    <>
      <Box style={{ backgroundColor: 'white', height: '250px' }}>
        <div style={{ width: '50%' }}>
          <img src={item.image} alt="logo" style={{ width: '100%' }} />
        </div>
        <div className="info">
          <h3>{item.name}</h3>
          <span>
            {/* 받아온 평점으로 동적으로 별 생성하기 */}
            <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
            <StarHalfIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
          </span>
          <p>{item.star}</p>
        </div>
      </Box>
    </>
  );
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 4rem;
  padding-bottom: 4rem;

  width: 100%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  text-decoration: none;

  .info {
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

export default Card;
