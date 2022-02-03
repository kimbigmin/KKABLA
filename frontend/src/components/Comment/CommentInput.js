import React from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

function CommentInput() {
  return (
    <Container>
      <TextField
        id="outlined-basic"
        label="댓글을 입력해주세요."
        variant="outlined"
        sx={{
          width: '80%',
        }}
      />
      <Button
        variant="contained"
        size="large"
        sx={{ width: '8%', marginLeft: '1rem', height: 55 }}
      >
        등록
      </Button>
    </Container>
  );
}

const Container = styled.div`
  margin: 40px 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CommentInput;
