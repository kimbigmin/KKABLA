import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddAcademy({ setIsAdminBtn }) {
  const closeAdminHandler = () => {
    setIsAdminBtn(false);
  };

  const navigator = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState(null);
  const [location, setlocation] = useState(null);
  const [homePage, setHomePage] = useState(null);
  const [session, setSession] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('name', name);
    formData.append('loca', location);
    formData.append('homePage', homePage);
    formData.append('system', session);

    try {
      await axios({
        method: 'post',
        url: 'http://localhost:5000/post/bootcamp',
        withCredentials: true,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileSelect = (event) => {
    setImage(event.target.files[0]);
    console.log(image);
  };

  return (
    <>
      <Overlay>
        <Box>
          <h2>기관등록</h2>
          <TextField
            onChange={(e) => setName(e.target.value)}
            label="기관명"
            variant="outlined"
            sx={{ margin: '1rem 0rem 1rem 0rem' }}
          />
          <TextField
            onChange={(e) => setlocation(e.target.value)}
            label="기관위치"
            variant="outlined"
            sx={{ margin: '1rem 0rem 1rem 0rem' }}
          />
          <TextField
            onChange={(e) => setHomePage(e.target.value)}
            label="홈페이지 URL"
            variant="outlined"
            sx={{ margin: '1rem 0rem 1rem 0rem' }}
          />
          <LogoBox>
            <h3>로고 업로드:</h3>
            <div>
              <button className="upload-btn">
                <label for="imgfile">이미지업로드</label>
              </button>
              <input
                onChange={handleFileSelect}
                type="file"
                id="imgfile"
                className="file-select"
                name="logoImage"
                accept="image/png"
              ></input>
            </div>
          </LogoBox>
          <RadioBox onChange={(e) => setSession(e.target.value)}>
            <h3>강의방식:</h3>
            <input
              type="radio"
              id="online"
              name="session"
              value="온라인"
              required="required"
            />
            <label>온라인</label>
            <input
              type="radio"
              id="offline"
              name="session"
              value="오프라인"
              required="required"
            />
            <label>오프라인</label>
            <input
              type="radio"
              id="onOffline"
              name="session"
              value="온라인 + 오프라인"
              required="required"
            />
            <label>온라인 + 오프라인</label>
          </RadioBox>
          <ButtonBox>
            <button className="close" onClick={closeAdminHandler}>
              닫기
            </button>
            <button onClick={handleSubmit} className="submit">
              등록하기
            </button>
          </ButtonBox>
        </Box>
      </Overlay>
    </>
  );
}
const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  position: fixed;
  padding: 2rem;
  background-color: white;
  z-index: 5;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    border-bottom: solid 1px gray;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem 1rem 0rem;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  .file-select {
    opacity: 0;
  }

  .upload-btn {
    border: none;
    padding: 0.5rem;
    margin-left: 2rem;
  }
`;

const RadioBox = styled.div`
  margin: 1rem 0rem 1rem 0rem;

  h3 {
    margin-bottom: 0.5rem;
    font-weight: bold;
  }

  input {
    margin-left: 2rem;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  margin: 1rem 0rem 1rem 0rem;
  justify-content: flex-end;

  .close {
    margin-right: 1rem;
    border: none;
    padding: 0.8rem;
    border-radius: 5px;
    font-weight: bold;
    width: 7rem;
    cursor: pointer;
  }

  .submit {
    border: none;
    padding: 0.8rem;
    border-radius: 5px;
    font-weight: bold;
    width: 15rem;
    cursor: pointer;
    background-color: rgba(127, 170, 255, 0.8);
    color: white;

    &:hover {
      background-color: rgba(127, 170, 255, 1);
      transition-duration: 0.4s;
    }
  }
`;

export default AddAcademy;
