import React, { useState } from 'react';
import ReviewBox from './ReviewBox';

function Review() {
  const [isLogin, setIsLogin] = useState(false);

  return <ReviewBox isLogin={isLogin} />;
}

export default Review;
