import React from 'react';
import styled from 'styled-components';
import {
  Container,
  Button,
  Box,
  TextField,
  Divider,
  Typography,
} from '@mui/material';

function PostFree({ name }) {
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
            }}
          >
            {name}게시판
          </Box>
          <TitleTextField
            required
            type="text"
            size="small"
            fullWidth={true}
            placeholder="제목을 입력하세요."
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
  left: 91.5%;
  font-weight: bold;
`;
