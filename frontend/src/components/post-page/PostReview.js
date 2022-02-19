import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
//Style
import styled from 'styled-components';
import { Button, Box, TextField, Typography, Rating } from '@mui/material';
//Toast UI
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

function PostReview({ isLogin }) {
  const navigate = useNavigate();

  const location = useLocation();
  const { data } = location.state;

  const editorPosRef = React.createRef();
  const editorNegRef = React.createRef();

  const param = useParams();
  const id = param.id; // 부트캠프 ID

  const [title, setTitle] = useState('');
  const [pros, setPros] = useState(''); //장점
  const [cons, setCons] = useState(''); // 단점
  const [star, setStar] = useState(0); //별점

  const onPostReviewHandler = async () => {
    await axios
      .post(
        `/post/review/${id}`,
        {
          title,
          bootCamp: id,
          pros,
          cons,
          star,
          creator: isLogin,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        if (res.data.message) {
          alert(res.data.message);
        } else {
          setTimeout(() => {
            navigate(`/board/review/detail/${id}`, {
              state: { data },
              replace: true,
            });
          }, 1000);
        }
      });
  };

  return (
    <form>
      <TitleWrapper>
        <TitleBox>리뷰게시판</TitleBox>
        <TitleTextField
          margin="dense"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
          type="text"
          size="small"
          fullWidth={true}
          placeholder="제목을 입력하세요."
        />
      </TitleWrapper>
      <ReviewPart>
        <ReviewBox>
          <ReviewImg src={data.image} alt="academyImage" />
        </ReviewBox>
        <Typography>{data.name}</Typography>
        <Rating
          name="reviewPoint"
          value={star}
          onChange={(e) => {
            setStar(Number(e.target.value));
          }}
          size="large"
        />
        <Typography>별점을 선택해 주세요</Typography>
      </ReviewPart>
      <ContentsWrapper>
        <ContentLabel>장점</ContentLabel>
        <Editor
          previewStyle="vertical"
          initialEditType="wysiwyg"
          placeholder="장점을 입력하세요"
          onChange={() => setPros(editorPosRef.current.getInstance().getHTML())}
          ref={editorPosRef}
          height="250px"
          toolbarItems={[
            ['bold', 'italic', 'strike'],
            ['hr'],
            ['link'],
            ['ul', 'ol'],
          ]}
          plugins={[
            [colorSyntax],
            [codeSyntaxHighlight, { highlighter: Prism }],
          ]}
        />
      </ContentsWrapper>
      <ContentsWrapper>
        <ContentLabel>단점</ContentLabel>
        <Editor
          previewStyle="vertical"
          initialEditType="wysiwyg"
          placeholder="단점을 입력하세요"
          onChange={() => setCons(editorNegRef.current.getInstance().getHTML())}
          ref={editorNegRef}
          height="250px"
          toolbarItems={[
            ['bold', 'italic', 'strike'],
            ['hr'],
            ['link'],
            ['ul', 'ol'],
          ]}
        />
      </ContentsWrapper>
      <SubmitButton onClick={onPostReviewHandler} variant="contained">
        등록
      </SubmitButton>
    </form>
  );
}

export default PostReview;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const TitleTextField = styled(TextField)`
  margin: 10px;
`;

const ReviewPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentsWrapper = styled.div`
  margin: 40px 10px 10px 10px;
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

const ReviewBox = styled(Box)`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  line-height: 200px;
  text-align: center;
  position: relative;
`;

const ReviewImg = styled.img`
  text-align: center;

  width: 200px;
  height: 200px;
  objet-fit: contain;
`;

const ContentLabel = styled(Box)`
  font-weight: bold;
  margin: 5px;
`;
