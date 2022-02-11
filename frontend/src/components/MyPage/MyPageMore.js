import React from 'react';
import styled from 'styled-components';
import { Box, Rating, Grid, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import MyPageGrid from './MyPageGrid';

function MyPageMore() {
  return (
    <Container>
      <MyPageGrid></MyPageGrid>
    </Container>
  );
}

export default MyPageMore;
