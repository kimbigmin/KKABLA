import React, { useState, useEffect } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import axios from 'axios';

function Review({ isLogin }) {
  const [bootcampData, setBootcampData] = useState([]);

  // 부트캠프 데이터 GET Handler
  const getBootcampData = async () => {
    return await axios
      .get('http://localhost:5000/board/review/')
      .then((res) => {
        console.log(res.data);
        setBootcampData(res.data);
      });
  };

  useEffect(() => {
    getBootcampData();
  }, []);

  return (
    <ReviewBox
      isLogin={isLogin}
      bootcampData={bootcampData}
      setBootcampData={setBootcampData}
    />
  );
}

export default Review;
