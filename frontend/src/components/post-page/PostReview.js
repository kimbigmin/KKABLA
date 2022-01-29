import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Button,
  Box,
  TextField,
  Divider,
  Typography,
  Rating,
} from '@mui/material';

function PostFree() {
  return (
    <Container maxWidth="md">
      <TopTypography variant="h5">글 작성하기</TopTypography>
      <Divider></Divider>
      <form>
        <TitleWrapper>
          <Box
            sx={{
              width: 200,
              height: 40,
              bgcolor: '#A2D2FF',
              color: 'black',
              textAlign: 'center',
              lineHeight: '40px',
              margin: '10px',
              borderRadius: '8px',
              fontWeight: 'bold',
              border: '1px solid black',
            }}
          >
            리뷰게시판
          </Box>
          <TitleTextField
            required
            type="text"
            size="small"
            fullWidth={true}
            placeholder="제목을 입력하세요."
          />
        </TitleWrapper>
        <ReviewPart>
          <Box
            sx={{
              width: 200,
              height: 200,
              border: '1px solid black',
              borderRadius: '8px',
              lineHeight: '200px',
              textAlign: 'center',
            }}
          >
            이미지 공간
          </Box>
          <Typography>엘리스 : SW 엔지니어 트랙 1기</Typography>
          <Rating name="reviewPoint" size="large" />
          <Typography>별점을 선택해 주세요</Typography>
        </ReviewPart>
        <ContentsWrapper>
          <ContentsTextField
            required
            type="text"
            fullWidth={true}
            multiline={true}
            maxRows={5}
            rows={3}
            placeholder="장점을 입력하세요."
          />
        </ContentsWrapper>
        <ContentsWrapper>
          <ContentsTextField
            required
            type="text"
            fullWidth={true}
            multiline={true}
            maxRows={5}
            rows={3}
            placeholder="단점을 입력하세요."
          />
        </ContentsWrapper>
        <SubmitButton variant="contained">등록</SubmitButton>
      </form>
    </Container>
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
  left: 91.5%;
  font-weight: bold;
`;
