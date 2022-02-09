import React, { useState, useEffect } from 'react';
import ReviewBox from '../components/review-page/ReviewBox';
import axios from 'axios';
import CardForReviewPage from '../components/review-page/CardsForReviewPage';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function Review({ isLogin }) {
  const [bootcampData, setBootcampData] = useState([]);
  const [cards, setCards] = useState([]);
  const [starData, setStarData] = useState([]);

  // 부트캠프 Get Handler
  const getBootcampData = async () => {
    const bootData = await axios.get('http://localhost:5000/board/review/');
    await setBootcampData((current) => {
      let newArr = [...bootData.data];
      return newArr;
    });
  };
  // 카드 Get Handler
  const getCardLists = (bootcamp) => {
    const cardLists = Promise.all(
      bootcampData.map((item) => {
        return axios
          .get(`http://localhost:5000/board/review/${item._id}`)
          .then((res) => {
            setStarData((current) => {
              const newArr = [...current, res.data];
              return newArr;
            });
            return (
              <Grid item xs={3} key={item.name}>
                <Link
                  to={`/board/review/detail/${item._id}`}
                  state={{
                    isLogin: isLogin,
                    data: item,
                    review: res.data.review,
                  }}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <CardForReviewPage
                    key={item.name}
                    item={item}
                    reviews={res.data.review}
                  ></CardForReviewPage>
                </Link>
              </Grid>
            );
          });
      }),
    );
    return cardLists;
  };

  useEffect(() => {
    getBootcampData();
  }, []);

  useEffect(() => {
    getCardLists(bootcampData).then((cardlist) => {
      setCards((current) => {
        const newArr = [...cardlist];
        return newArr;
      });
    });
  }, [bootcampData]);

  return (
    <ReviewBox
      isLogin={isLogin}
      bootcampData={bootcampData}
      setBootcampData={setBootcampData}
      cards={cards}
      setCards={setCards}
      starData={starData}
    />
  );
}

export default Review;
