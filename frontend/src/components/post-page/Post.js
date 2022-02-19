import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//Style
import styled from 'styled-components';
import { Button, Box, TextField } from '@mui/material';

//Toast UI Editor
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

//Toast Ui color Plugin
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

//Toast Ui code Plugin
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

function Post({ isLogin, name }) {
  const navigate = useNavigate();

  const editorRef = React.createRef();

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [images, setImages] = useState([]);

  const onPostFreeHandler = async () => {
    await axios
      .post(
        `/post/${name}`,
        {
          title,
          type: name,
          contents,
          images,
          creator: isLogin,
        },
        {
          withCredentials: true,
        },
      )
      .then(
        setTimeout(() => {
          navigate(`/board/${name}`, { replace: true });
        }, 1000),
      );
  };

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.getInstance().removeHook('addImageBlobHook');

      editorRef.current
        .getInstance()
        .addHook('addImageBlobHook', (blob, callback) => {
          (async () => {
            let formData = new FormData();
            formData.append('image', blob);

            console.log('이미지가 업로드 됐습니다.');

            const res = await axios.post(`/post/upload`, formData, {
              header: { 'content-type': 'multipart/formdata' },
              withCredentials: true,
            });

            const imageUrl =
              'https://kabbla.s3.ap-northeast-2.amazonaws.com/' + blob.name;
            console.log(blob);
            setImages([...images, imageUrl]);
            callback(imageUrl, 'image');
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

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
        <Editor
          previewStyle="vertical"
          initialEditType="wysiwyg"
          placeholder="글을 작성해 주세요"
          onChange={() =>
            setContents(editorRef.current.getInstance().getHTML())
          }
          ref={editorRef}
          height="450px"
          toolbarItems={[
            ['bold', 'italic', 'strike'],
            ['hr'],
            ['image', 'link'],
            ['ul', 'ol'],
            ['code', 'codeblock'],
          ]}
          plugins={[
            [colorSyntax],
            [codeSyntaxHighlight, { highlighter: Prism }],
          ]}
        />
      </ContentsWrapper>
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

const SubmitButton = styled(Button)`
  background-color: #a2d2ff;
  position: relative;
  float: right;
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
