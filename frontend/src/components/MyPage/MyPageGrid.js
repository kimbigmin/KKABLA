import React from 'react';
import styled from 'styled-components';
import { Divider, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function MyPageGrid({ title, children, length }) {
  return (
    <GridBox>
      <GridSection>
        <GridTop>
          <GridTitle>{title}</GridTitle>
          {length >= 3 && (
            <Link to="/mypage/more">
              <Button variant="outlined">더 보기</Button>
            </Link>
          )}
        </GridTop>
        <GridDivider></GridDivider>
        <GridDetail>{children}</GridDetail>
      </GridSection>
    </GridBox>
  );
}

export default MyPageGrid;

const GridBox = styled(Box)`
  background-color: white;
  border-radius: 15px;
  margin: 10px;
`;

const GridSection = styled(Box)`
  padding: 10px;
`;

const GridTop = styled(Box)`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
  button {
    margin-bottom: 10px;
  }
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;

const GridDivider = styled(Divider)`
  margin-bottom: 10px;
`;

const GridDetail = styled(Box)`
  min-height: 100px;
`;
