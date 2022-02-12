import React from 'react';
import { Box } from '@mui/material';
import styled from 'styled-components';

function AuthPageTitle() {
  return <TitleBox>수료증을 업로드해 주세요 !</TitleBox>;
}
export default AuthPageTitle;

const TitleBox = styled(Box)`
  text-align: center;
  font-size: 32px;
  border-radius: 22px;
  width: 60%;
  padding: 10px;
  background-color: #e8e8e8;
  font-weight: bold;
  margin: auto;
`;
