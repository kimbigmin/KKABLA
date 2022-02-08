import React, { useState, useEffect } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import axios from 'axios';

function Review({ isLogin }) {
  const [bootcampData, setBootcampData] = useState([]);

  // 부트캠프 데이터 GET 함수
  const getBootcampData = async () => {
    const bootData = await axios.get('http://localhost:5000/board/review/');
    await setBootcampData((current) => {
      let newArr = [...current, ...bootData.data];
      return newArr;
    });
  };
  // 부트캠프 데이터 불러오기
  useEffect(() => {
    getBootcampData();
  }, []);

  return (
    <>
      <ReviewBox
        isLogin={isLogin}
        bootcampData={bootcampData}
        setBootcampData={setBootcampData}
      />
    </>
  );
}

export default Review;
