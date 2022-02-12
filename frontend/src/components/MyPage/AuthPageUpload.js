import React, { useState } from 'react';
import { Box, ImageListItemBar } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import styled from 'styled-components';
import axios from 'axios';

function AuthPageUpload() {
  const onHandleUploadAuth = (e) => {
    e.preventDefault();
    onImagAuth(e.target.files[0]);
  };

  const onImagAuth = async (img) => {
    const formData = new FormData();
    formData.append('image', img);

    try {
      await axios({
        method: 'post',
        url: 'http://localhost:5000/mypage/auth',
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UploadBox>
      <label for="imgfile">
        <FileUploadOutlinedIcon
          iconStyle={{ width: '48px', height: '48px' }}
          style={{ width: '120px', height: '120px', padding: '90px' }}
          touch={true}
        />
      </label>
      <UploadInput
        onChange={onHandleUploadAuth}
        type="file"
        id="imgfile"
        className="file-select"
        name="logoImage"
        accept="image/png"
      ></UploadInput>
    </UploadBox>
  );
}

export default AuthPageUpload;

const UploadBox = styled(Box)`
  text-align: center;
  margin: 40px auto;
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 10px,
    #ccc 0,
    #ccc 20px
  );
`;

const UploadInput = styled.input`
  display: none;
`;
