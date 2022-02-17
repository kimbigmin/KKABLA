import React, { useState, Children } from 'react';
import styled from 'styled-components';
import { Box, Rating, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';

function MyPageReviews({ content, bootcampData }) {
  console.log(content);

  const findBootcampName = (id) => {
    return bootcampData.filter((el) => el._id === id)[0].name;
  };

  const findBootCampImg = (id) => {
    return bootcampData.filter((el) => el._id === id)[0].image;
  };

  const findBootCampData = (id) => {
    return bootcampData.filter((el) => el._id === id)[0];
  };
  return (
    <>
      {content && (
        <>
          {Children.toArray(
            content.map((el) => (
              <Link
                to={`/board/review/detail/${el._id}`}
                state={{
                  data: findBootCampData(el.bootCamp),
                }}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <GridContainer container>
                  <GridItem item xs={4.5}>
                    <RatingBox>
                      {el.star}
                      <ReviewRating
                        name="read-only"
                        value={el.star}
                        size="small"
                        readOnly
                      />
                    </RatingBox>
                  </GridItem>
                  <Grid item xs={3}>
                    <BootCampImg
                      src={findBootCampImg(el.bootCamp)}
                      alt="부트캠프 이미지"
                    />
                  </Grid>
                  <GridItem item xs={4.5}>
                    <RatingDate>
                      {moment(el.updatedAt).format('YYYY년 MM월 DD일')}
                    </RatingDate>
                    <RatingName>{findBootcampName(el.bootCamp)}</RatingName>
                  </GridItem>
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

const GridItem = styled(Grid)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
`;
