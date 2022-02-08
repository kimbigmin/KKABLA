import React, { useState } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import AddAcademy from '../components/review-page/AddAcademy';

function Review({ isLogin }) {
  const [isAdminBtn, setIsAdminBtn] = useState(false);
  const [bootcampData, setBootcampData] = useState([]);
  const [cards, setCards] = useState([]);
  return (
    <>
      {isAdminBtn && <AddAcademy setIsAdminBtn={setIsAdminBtn} />}
      <ReviewBox
        isLogin={isLogin}
        isAdminBtn={isAdminBtn}
        setIsAdminBtn={setIsAdminBtn}
        bootcampData={bootcampData}
        setBootcampData={setBootcampData}
        cards={cards}
        setCards={setCards}
      />
    </>
  );
}

export default Review;
