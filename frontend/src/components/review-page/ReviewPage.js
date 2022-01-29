import React, { useState } from 'react';
import ReviewBox from './ReviewBox';

function Review({ isLogin }) {
  return <ReviewBox isLogin={isLogin} />;
}

export default Review;
