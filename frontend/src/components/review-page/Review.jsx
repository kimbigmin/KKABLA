import React from 'react';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import ReviewBox from './ReviewBox';
import { Container } from '@mui/material';

function Review() {
  return (
    <Container>
      <Header />
      <ReviewBox />
      <Footer />
    </Container>
  );
}

export default Review;
