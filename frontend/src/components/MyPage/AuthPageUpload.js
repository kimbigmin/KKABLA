import React, { useEffect, useRef, useState } from 'react';
import { Box, ImageListItemBar } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import styled from 'styled-components';
import axios from 'axios';

function AuthPageUpload({ word, setTwo, two }) {
  const [image, setImage] = useState(false);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const img = useRef(null);

  const onImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      img.current.src = e.target.result;
    };

    reader.readAsDataURL(file);
    setImage(file);
  };

  const onHandleUploadAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append('image', image);
    formData.append('word', word);

    try {
      await axios({
        method: 'post',
        url: '/mypage/auth',
        data: formData,
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then((res) => {
        setData(res.data);
        setLoading(false);
        setTwo(res.data.ok);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="two">
      <h3 className="text">부트캠프 수료증을 제출 해주세요</h3>
      <small>
        타인의 수료증을 제출하거나 수료증 위조 시 활동이 제한 될 수 있습니다.
      </small>
      {data && !data.ok && <div className="alert msg">{data.msg}</div>}
      {image ? (
        <>
          <div className="img_auth">
            {loading && <div className="loadingspinner"></div>}
            <img
              className={data && data.ok && 'disable'}
              ref={img}
              alt="인증사진"
              onClick={(e) => {
                setImage(null);
                setTwo(false);
              }}
            />
          </div>
          <button
            disabled={data && data.ok}
            className="img_btn"
            onClick={onHandleUploadAuth}
          >
            {data && data.ok ? '인증완료' : '제출하기'}
          </button>
        </>
      ) : (
        <UploadBox className="input_icon">
          <label for="imgfile">
            <FileUploadOutlinedIcon
              style={{
                width: '120px',
                height: '120px',
                padding: '90px',
              }}
              touch={true}
            />
          </label>
          <UploadInput
            onChange={onImageHandler}
            type="file"
            id="imgfile"
            className="file-select"
            name="logoImage"
            accept="image/png"
          ></UploadInput>
        </UploadBox>
      )}

      {/* {image.type !== 'image/png' && (
        <div className="alert">제출한 파일이 이미지가 아닙니다.</div>
      )} */}
    </div>
  );
}

export default AuthPageUpload;

const UploadBox = styled(Box)`
  text-align: center;
  z-index: 10;
  margin: 0px auto;
  width: 300px;
  height: 300px;
  background: repeating-linear-gradient(
    -45deg,
    #fff,
    #fff 10px,
    #ccc 10px,
    #ccc 20px
  );
`;

const UploadInput = styled.input`
  display: none;
`;
