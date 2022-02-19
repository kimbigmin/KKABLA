import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//style
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
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [homePage, setHomePage] = useState('');
  const [system, setSystem] = useState('온라인');
  const [image, setImage] = useState();

  const handleRadioChange = (event) => {
    setSystem(event.target.value);
  };

  const handleFileSelect = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    await axios.post('/post/upload', formData, {
      header: { 'content-type': 'multipart/formdata' },
      withCredentials: true,
    });

    const imageUrl =
      'https://kabbla.s3.ap-northeast-2.amazonaws.com/' +
      e.target.files[0].name;
    setImage(imageUrl);
  };

  const onPostBootcampHandler = async () => {
    await axios
      .post(
        '/post/bootcamp',
        {
          name,
          location,
          image,
          homePage,
          system,
        },
        {
          withCredentials: true,
        },
      )
      .then(alert('부트캠프 등록이 완료되었습니다 !'))
      .navigate('/admin', { replace: true });
  };

  return (
    <Container>
      <AddForm>
        <AddTextField
          margin="dense"
          label="기관명"
          variant="outlined"
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <AddTextField
          margin="dense"
          label="기관위치"
          variant="outlined"
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <AddTextField
          margin="dense"
          label="홈페이지 url"
          variant="outlined"
          required
          onChange={(e) => {
            setHomePage(e.target.value);
          }}
        />

        <Label>강의 방식</Label>
        <RadioBox>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={system}
            onChange={handleRadioChange}
          >
            <FormControlLabel
              value="온라인"
              control={<Radio />}
              label="온라인"
            />
            <FormControlLabel
              value="오프라인"
              control={<Radio />}
              label="오프라인"
            />
            <FormControlLabel
              value="온라인+오프라인"
              control={<Radio />}
              label="온라인+오프라인"
            />
          </RadioGroup>
        </RadioBox>
        <Label>로고 업로드</Label>
        <LogoBox>
          <LogoInput
            onChange={(e) => handleFileSelect(e)}
            type="file"
            id="imgfile"
            className="file-select"
            name="logoImage"
            accept="image/*"
          ></LogoInput>
          <ImgBox>
            <img src={image} alt="로고 미리보기" />
          </ImgBox>
        </LogoBox>
        <ButtonBox>
          <Buttons variant="contained">
            <label htmlFor="imgfile">이미지 업로드</label>
          </Buttons>
          <Buttons variant="contained" onClick={onPostBootcampHandler}>
            등록하기
          </Buttons>
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

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
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
