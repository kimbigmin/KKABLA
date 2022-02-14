import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Box, TextField, Typography, Rating } from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function PostReview({ isLogin, post }) {
  const navigate = useNavigate();

  const param = useParams();
  const id = param.id;
  const [title, setTitle] = useState('');
  const [pros, setPros] = useState(''); //장점
  const [cons, setCons] = useState(''); // 단점
  const [star, setStar] = useState(0); //별점

  const onPostReviewHandler = async () => {
    await axios
      .post(
        `http://localhost:5000/post/review/${id}`,
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
      .then(
        navigate(`/board/review/detail/${id}`, {
          state: { post },
          replace: true,
        }),
      );
  };

  console.log(post);
  console.log(star);

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
          <ReviewImg src={post.image} alt="academyImage" />
        </ReviewBox>
        <Typography>{post.name}</Typography>
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
        <ContentsTextField
          onChange={(e) => {
            setPros(e.target.value);
          }}
          required
          type="text"
          fullWidth={true}
          multiline={true}
          minRows={3}
          placeholder="장점을 입력하세요."
        />
      </ContentsWrapper>
      <ContentsWrapper>
        <ContentLabel>단점</ContentLabel>
        <ContentsTextField
          onChange={(e) => {
            setCons(e.target.value);
          }}
          required
          type="text"
          fullWidth={true}
          multiline={true}
          minRows={3}
          placeholder="단점을 입력하세요."
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

const ContentsTextField = styled(TextField)`
  display: block;
`;

const SubmitButton = styled(Button)`
  background-color: #a2d2ff;
  position: relative;
  left: 95%;
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
  width: 13rem;
  postion: absolute;
  margin-top: 1.4rem;
  text-align: center;
`;

const ContentLabel = styled(Box)`
  font-weight: bold;
  margin: 5px;
`;
