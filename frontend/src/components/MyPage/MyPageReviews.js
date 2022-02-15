import React, { useState, Children } from 'react';
import styled from 'styled-components';
import { Box, Rating, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function MyPageReviews({ content, bootcampData }) {
  const findBootcampName = (id) => {
    return bootcampData.filter((el) => el._id === id)[0].name;
  };

  const findBootCampImg = (id) => {
    return bootcampData.filter((el) => el._id === id)[0].image;
  };
  return (
    <>
      {content && (
        <>
          {Children.toArray(
            content.map((el) => (
              <Link
                to={`/board/review/`}
                state={{
                  data: el,
                }}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <GridContainer container>
                  <Grid item xs={4}>
                    <RatingBox>
                      {el.star}
                      <ReviewRating
                        name="read-only"
                        value={el.star}
                        size="small"
                        readOnly
                      />
                    </RatingBox>
                  </Grid>
                  <Grid item xs={3}>
                    <BootCampImg
                      src={findBootCampImg(el.bootCamp)}
                      alt="부트캠프 이미지"
                    />
                  </Grid>
                  <Grid item xs={5}>
                    <RatingDate>{el.updatedAt}</RatingDate>
                    <RatingName>{findBootcampName(el.bootCamp)}</RatingName>
                  </Grid>
                </GridContainer>
              </Link>
            )),
          )}
        </>
      )}
    </>
  );
}

export default MyPageReviews;

const GridContainer = styled(Grid)`
  background-color: #f4f4f4;
  margin-bottom: 10px;
  border-radius: 10px;
  position: relative;
`;

const RatingBox = styled(Box)`
  text-align: center;
  margin: 26px 0;
  display: flex;
  flex-direction: column;
  justify-contents: center;
`;

const RatingDate = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
`;

const RatingName = styled(Box)`
  text-align: center;
  line-height: 88px;
`;

const ReviewRating = styled(Rating)`
  justify-content: center;
`;

const BootCampImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
