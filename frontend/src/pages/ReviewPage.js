import React, { useState, useEffect } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import axios from 'axios';

function Review({ isLogin }) {
  const [bootcampData, setBootcampData] = useState([]);
  const [isAlignChange, setIsAlignChange] = useState(false);

  // 부트캠프 데이터 GET Handler
  const getBootcampData = async () => {
    return await axios
      .get('http://localhost:5000/board/review/')
      .then((res) => res.data);
  };
  // 부트캠프, 리뷰 데이터 GET Handler
  const getReviewAndBootcampData = async () => {
    const bootcamp = await getBootcampData();
    const bootcampdata = await bootcamp.map(async (item) => {
      return await axios
        .get(`http://localhost:5000/board/review/${item._id}`)
        .then((res) => res.data);
    });

    return { bootcamp, bootcampdata };
  };

  // 부트캠프, 리뷰 데이터 바인딩 Handler
  const bindReviewsAndBootcampData = async (res) => {
    for (let i = 0; i < res.bootcamp.length; i++) {
      const reviews = await res.bootcampdata[i];
      res.bootcamp[i].review = reviews.review;
    }
    setBootcampData(res.bootcamp);
  };

  useEffect(() => {
    if (!isAlignChange) {
      getReviewAndBootcampData().then(bindReviewsAndBootcampData);
      setIsAlignChange(true);
    }
  }, []);

  return (
    <ReviewBox
      isLogin={isLogin}
      bootcampData={bootcampData}
      setBootcampData={setBootcampData}
      isAlignChange={isAlignChange}
      setIsAlignChange={setIsAlignChange}
    />
  );
}

export default Review;
