import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Box, TextField } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
//Toast UI Editor
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

function UpdateArticle({ isLogin, data }) {
  const [title, setTitle] = useState(data.title);
  const [contents, setContents] = useState(data.contents);
  const [images, setImages] = useState([]);

  const editorRef = React.createRef();
  editorRef.current = data.contents;
  const navigate = useNavigate();
  console.log(contents);
  console.log(data);

  const onUpdateHandler = async () => {
    await axios
      .patch(
        `http://localhost:5000/post/board/${data._id}`,
        {
          title,
          contents,
        },
        {
          withCredentials: true,
        },
      )
      .then(
        setTimeout(() => {
          navigate(`/board/${data.type}`, { replace: true });
        }, 1000),
      );
  };

  const onHandleUploadImg = (e) => {
    e.preventDefault();
    console.log('왜안대!!');
  };

  return (
    <form>
      <TitleWrapper>
        <TitleBox>
          {data.type === 'free' ? '자유게시판' : '개발게시판'}
        </TitleBox>
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
          value={title}
        />
      </TitleWrapper>
      <ContentsWrapper>
        <Editor
          previewStyle="vertical"
          initialEditType="wysiwyg"
          placeholder="글을 작성해 주세요"
          onChange={() =>
            setContents(editorRef.current.getInstance().getHTML())
          }
          ref={editorRef}
          value={editorRef.current}
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
      <SubmitButton onClick={onUpdateHandler} variant="contained">
        등록
      </SubmitButton>
    </form>
  );
}

export default UpdateArticle;

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
