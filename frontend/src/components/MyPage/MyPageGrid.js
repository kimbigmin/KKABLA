import React from 'react';
import styled from 'styled-components';
import { Divider, Box } from '@mui/material';

function MyPageGrid({ title, children }) {
  return (
    <GridBox>
      <GridSection>
        <GridTitle>{title}</GridTitle>
        <Divider></Divider>
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

const GridDetail = styled(Box)`
  min-height: 100px;
`;
const GridSection = styled.div`
  padding: 10px;
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;
