import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { List, Score, Contents, Date } from '../../styles/review-page/styled';

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

export default ReviewList;
