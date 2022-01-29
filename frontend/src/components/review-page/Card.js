import React from 'react';
import logo from '../../images/logo.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { Box } from '../../styles/review-page/styled';

function Card() {
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
