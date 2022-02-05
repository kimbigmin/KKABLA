import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import styled from 'styled-components';

function ReviewList({ isLogin }) {
  return (
    <List>
      <Score>
        <span>
          {/* 받아온 평점으로 동적으로 별 생성하기 */}
          <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
          <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
          <StarIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
          <StarHalfIcon sx={{ color: '#fcdd29', fontSize: '1rem' }} />
        </span>
        <p>{3.5}점</p>
      </Score>
      <Contents>
        <p className="writer">
          작성자 : <span>{'i*****'}</span>
          <span className="auth">{'수강생인증'}</span>
        </p>
        <p className="content">
          <h4 className="title">장점</h4>
          <div>
            {isLogin
              ? '로그인시 보이는 내용 로그인시 보이는 내용 로그인시 보이는 내용 로그인시 보이는 내용 로그인시 보이는 내용'
              : '로그인을 해주세요. 로그인을 해주세요. 로그인을 해주세요. 로그인을 해주세요.로그인을 해주세요. 로그인을 해주세요. (비회원일 경우 보이는 내용)'}
          </div>
        </p>
        <p className="content">
          <h4 className="title">단점</h4>
          <div>
            {isLogin
              ? '로그인시 보이는 내용 로그인시 보이는 내용 로그인시 보이는 내용 로그인시 보이는 내용 로그인시 보이는 내용'
              : '로그인을 해주세요. 로그인을 해주세요. 로그인을 해주세요. 로그인을 해주세요.로그인을 해주세요. 로그인을 해주세요. (비회원일 경우 보이는 내용)'}
          </div>
        </p>
      </Contents>
      <Date>{'2022.01.26'}</Date>
    </List>
  );
}

const List = styled.div`
  margin-top: 1.5rem;
  border-top: solid 1px #52515120;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 2rem;
  color: #000000a6;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  width: 100%;
  border-radius: 5px;
`;

const Score = styled.div`
  display: flex;
  flex-direction: column;
  width: 6rem;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 1rem;
  }
`;

const Contents = styled.div`
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

const Date = styled.div`
  display: flex;
`;

export default ReviewList;
