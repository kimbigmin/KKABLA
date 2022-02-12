import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import styled from 'styled-components';

function AdminAdd() {
  const [value, setValue] = useState('online');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleFileSelect = () => {
    console.log('ok');
  };
  return (
    <Container>
      <AddForm>
        <AddTextField margin="dense" label="기관명" variant="outlined" />
        <AddTextField margin="dense" label="기관위치" variant="outlined" />
        <AddTextField margin="dense" label="홈페이지 url" variant="outlined" />

        <Label>강의 방식</Label>
        <RadioBox>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="online"
              control={<Radio />}
              label="온라인"
            />
            <FormControlLabel
              value="offline"
              control={<Radio />}
              label="오프라인"
            />
            <FormControlLabel
              value="both"
              control={<Radio />}
              label="온라인+오프라인"
            />
          </RadioGroup>
        </RadioBox>
        <Label>로고 업로드</Label>
        <LogoBox>
          <LogoInput
            onChange={handleFileSelect}
            type="file"
            id="imgfile"
            className="file-select"
            name="logoImage"
            accept="image/png"
          ></LogoInput>
          <ImgBox>이미지가 들어갈 자리입니다.</ImgBox>
        </LogoBox>
        <ButtonBox>
          <Buttons variant="contained">
            <label htmlFor="imgfile">이미지 업로드</label>
          </Buttons>
          <Buttons variant="contained">등록하기</Buttons>
        </ButtonBox>
      </AddForm>
    </Container>
  );
}

export default AdminAdd;

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const AddTextField = styled(TextField)`
  margin: 10px;
`;

const Label = styled.label`
  margin: 10px;
  font-weight: bold;
`;

const LogoBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoDetailBox = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const LogoInput = styled.input`
  display: none;
`;

const ImgBox = styled(Box)`
  border: 1px solid black;
  width: 200px;
  height: 200px;
  margin: 10px;
`;

const RadioBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 0 10px;
`;

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const Buttons = styled(Button)`
  margin-left: 10px;
  height: 40px;
`;
