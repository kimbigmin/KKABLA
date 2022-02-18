import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../../images/kabbla.png';

function AuthPageText() {
  const navigator = useNavigate();
  return (
    <div className="three">
      <img src={img}></img>
      <button onClick={() => navigator('/board/review')} className="img_btn">
        리뷰 남기러 가기
      </button>
    </div>
  );
}

export default AuthPageText;
