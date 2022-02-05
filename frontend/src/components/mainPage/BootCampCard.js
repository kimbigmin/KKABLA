import React from 'react';
import EliceLogo from '../../images/eliceLogo.png';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from 'styled-components';

export default function BootCampCard({ isLogin }) {
  return (
    <>
      <Box>
        <img src={EliceLogo} alt="logo" />
        <div className="info">
          <h3>엘리스 코딩</h3>
          <span>
            {/*수정 필요: 받아온 평점으로 동적으로 별 생성하기 */}
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
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 4rem 0;
  background-color:white;
  box-sizing: border-box;

  width: 100%;
  height: 30vh;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  text-decoration: none;
  overflow: hidden;

  img {
    max-width: 50%;
    max-height: 70%;
  }

  .info {
    margin-top: 1.5rem;
    p {
      font-weight: bold;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: rgba(50, 50, 50, 0.961);
  }
`;
