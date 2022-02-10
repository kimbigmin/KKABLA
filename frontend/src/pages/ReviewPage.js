import React, { useState, useEffect } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import axios from 'axios';

function Review({ isLogin }) {
  const [bootcampData, setBootcampData] = useState([]);

  // 부트캠프 Get Handler
  const getBootcampData = async () => {
    return await axios
      .get('http://localhost:5000/board/review/')
      .then((res) => res.data);
  };

  const render = async () => {
    const bootcamp = await getBootcampData();
    const bootcampdata = await bootcamp.map(async (item) => {
      return await axios
        .get(`http://localhost:5000/board/review/${item._id}`)
        .then((res) => res.data)
        .then((result) => result);
    });

    return { bootcamp, bootcampdata };
  };

  const sumReviewsData = async (res) => {
    for (let i = 0; i < res.bootcamp.length; i++) {
      const reviews = await res.bootcampdata[i];
      res.bootcamp[i].review = reviews.review;
    }
    setBootcampData(res.bootcamp);
  };

  useEffect(() => {
    render().then(sumReviewsData);
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
