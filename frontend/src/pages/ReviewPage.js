import React, { useState } from 'react';
import ReviewBox from '../components/review/ReviewBox';
import AddAcademy from '../components/review/AddAcademy';

function Review({ isLogin }) {
  const [isAdminBtn, setIsAdminBtn] = useState(false);

  return (
    <>
      {isAdminBtn && <AddAcademy setIsAdminBtn={setIsAdminBtn} />}
      <ReviewBox
        isLogin={isLogin}
        isAdminBtn={isAdminBtn}
        setIsAdminBtn={setIsAdminBtn}
      />
    </>
  );
}

export default Review;
