import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  Button,
  Box,
  TextField,
  Divider,
  Typography,
} from '@mui/material';
import axios from 'axios';

function PostFree({ name, isLogin }) {
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [images, setImages] = useState([]);

  const onPostFreeHandler = async () => {
    await axios.post('http://localhost:5000/post/free', {
      title,
      type: 'free',
      contents,
      images,
      creator: isLogin,
    });
  };

  const onHandleUploadImg = (e) => {
    e.preventDefault();
    console.log('왜안대!!');
  };

  return (
    <PostContainer>
      <TopTypography variant="h5">글 작성하기</TopTypography>
      <Divider></Divider>
      <form>
        <TitleWrapper>
          <TitleBox>{name}게시판</TitleBox>
          <TitleTextField
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
            maxRows={10}
            rows={10}
            placeholder="내용을 입력하세요."
            onChange={(e) => {
              setContents(e.target.value);
            }}
          />
        </ContentsWrapper>
        <label htmlFor="imgfiles">
          <SubmitButton variant="contained">사진 첨부</SubmitButton>
        </label>
        <UploadInput
          onChange={onHandleUploadImg}
          type="file"
          id="imgfiles"
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
    </PostContainer>
  );
}

export default PostFree;

const TopTypography = styled(Typography)`
  margin: 0 0 10px 10px;
  font-weight: bold;
`;

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

const PostContainer = styled(Container)`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`;

const UploadInput = styled.input`
  display: none;
`;
