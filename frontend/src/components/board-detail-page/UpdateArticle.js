import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//style
import styled from 'styled-components';
import { Button, Box, TextField, Container } from '@mui/material';
//Toast UI Editor
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
//Toast Ui Plugin
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
//Toast Ui code Plugin
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight';

function UpdateArticle({ data }) {
  const navigate = useNavigate();

  const editorRef = React.createRef();

  const [title, setTitle] = useState(data.title);
  const [contents, setContents] = useState(data.contents);
  const [images, setImages] = useState(data.images);

  const onUpdateHandler = async () => {
    await axios
      .patch(
        `/post/board/${data._id}`,
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
          navigate(`/board/${data.type}/`, { replace: true });
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

            await axios.post(`/post/upload`, formData, {
              header: { 'content-type': 'multipart/formdata' },
              withCredentials: true,
            });

            const imageUrl =
              'https://kabbla.s3.ap-northeast-2.amazonaws.com/' + blob.name;

            setImages([...images, imageUrl]);
            callback(imageUrl, 'image');
          })();

          return false;
        });
    }

    return () => {};
  }, [editorRef]);

  return (
    <Container>
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
            initialValue={data.contents}
          />
        </ContentsWrapper>

        <SubmitButton onClick={onUpdateHandler} variant="contained">
          등록
        </SubmitButton>
      </form>
    </Container>
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

const SubmitButton = styled(Button)`
  background-color: #a2d2ff;
  position: relative;
  float: right;
  font-weight: bold;
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
