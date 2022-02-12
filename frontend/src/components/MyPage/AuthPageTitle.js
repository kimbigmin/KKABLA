import React from 'react';
import { Box, TextField } from '@mui/material';
import styled from 'styled-components';

function AuthPageTitle() {
  return (
    <>
      <NameInputBox>
        <NameBox>부트캠프 이름</NameBox>
        <TitleTextField
          required
          type="text"
          size="small"
          fullWidth={true}
          placeholder="제목을 입력하세요."
        />
      </NameInputBox>
      <TitleBox>수료증을 업로드해 주세요 !</TitleBox>
    </>
  );
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

const TitleTextField = styled(TextField)`
  margin: 10px;
`;

const NameInputBox = styled(Box)`
  display: flex;
  width: 60%;
  margin: auto;
`;

const NameBox = styled(Box)`
  width: 200px;
  height: 40px;
  background-color: #a2d2ff;
  color: black;
  text-align: center;
  line-height: 40px;
  margin: 10px;
  border-radius: 8px;
  font-weight: bold;
  margin-bottom: 40px;
`;
