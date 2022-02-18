import React, { useState, useEffect } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import axios from 'axios';

function Review({ isLogin }) {
  const [bootcampData, setBootcampData] = useState([]);

  // 부트캠프 데이터 GET Handler
  const getBootcampData = async () => {
    return await axios.get('/board/review').then((res) => {
      setBootcampData(res.data);
    });
  };

  useEffect(() => {
    getBootcampData();
  }, []);

  console.log(bootcampData);

  return (
    <ReviewBox
      isLogin={isLogin}
      bootcampData={bootcampData}
      setBootcampData={setBootcampData}
    />
  );
}

export default Review;
