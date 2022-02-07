import React from 'react';
import { Box } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import styled from 'styled-components';

function AuthPageUpload() {
  const onHandleUploadAuth = (e) => {
    e.preventDefault();
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
