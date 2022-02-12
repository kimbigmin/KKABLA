import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Box, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Post({ isLogin, name }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [images, setImages] = useState([]);

  const navigate = useNavigate();

  const onPostFreeHandler = async () => {
    await axios
      .post(`http://localhost:5000/post/${name}`, {
        title,
        type: name,
        contents,
        images,
        creator: isLogin,
      })
      .then(navigate(`/board/${name}`, { replace: true }));
  };

  const onHandleUploadImg = (e) => {
    e.preventDefault();
    console.log('왜안대!!');
  };

  return (
    <form>
      <TitleWrapper>
        <TitleBox>{name === 'free' ? '자유게시판' : '개발게시판'}</TitleBox>
        <TitleTextField
          margin="dense"
          required
          type="text"
          size="small"
          fullWidth={true}
          placeholder="제목을 입력하세요."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </TitleWrapper>
      <ContentsWrapper>
        <ContentsTextField
          required
          type="text"
          fullWidth={true}
          multiline={true}
          minRows={10}
          placeholder="내용을 입력하세요."
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
      </ContentsWrapper>
      <label for="imgfile">
        <SubmitButton variant="contained">사진 첨부</SubmitButton>
      </label>
      <UploadInput
        onChange={onHandleUploadImg}
        type="file"
        id="imgfile"
        name="logoImage"
        accept="image/png"
      ></UploadInput>
      <SubmitButton
        onClick={() => {
          onPostFreeHandler();
        }}
        variant="contained"
      >
        등록
      </SubmitButton>
    </form>
  );
}

export default Post;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleTextField = styled(TextField)`
  margin: 10px;
`;

const ContentsWrapper = styled.div`
  margin: 10px;
`;

const ContentsTextField = styled(TextField)`
  display: block;
`;

const SubmitButton = styled(Button)`
  background-color: #a2d2ff;
  position: relative;
  left: 85%;
  font-weight: bold;
  margin-left: 10px;
`;

const TitleBox = styled(Box)`
  width: 200px;
  height: 40px;
  background-color: #a2d2ff;
  color: black;
  text-align: center;
  line-height: 40px;
  margin: 10px;
  border-radius: 8px;
  font-weight: bold;
`;

const UploadInput = styled.input`
  display: none;
`;
