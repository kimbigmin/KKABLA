import React from 'react';
import styled from 'styled-components';
import { Container, Button, Box, TextField } from '@mui/material';

function PostFree() {
  return (
    <Container maxWidth="md">
      <form>
        <TitleWrapper>
          <Box
            sx={{
              width: 200,
              height: 40,
              bgcolor: '#A2D2FF',
              color: 'white',
              textAlign: 'center',
              lineHeight: '40px',
              margin: '10px',
              borderRadius: '8px',
            }}
          >
            자유게시판
          </Box>
          <TitleTextField
            type="text"
            size="small"
            fullWidth={true}
            placeholder="제목을 입력하세요."
          />
        </TitleWrapper>
        <div className="contentWrapper">
          <ContentsTextField type="text" />
          <SubmitButton variant="contained">등록</SubmitButton>
        </div>
      </form>
    </Container>
  );
}

export default PostFree;

const SubmitButton = styled(Button)`
  && {
    background-color: #a2d2ff;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const TitleTextField = styled(TextField)`
  margin: 10px;
`;

const ContentsTextField = styled(TextField)``;
