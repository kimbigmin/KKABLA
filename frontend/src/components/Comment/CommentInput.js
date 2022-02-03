import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';

CommentInput.defaultProps = {
  author: 'default',
  content: '',
  data: {
    like: 0,
    're-comment': 0,
  },
};

function CommentInput({ onCreate, author }) {
  const [inputVal, setInputVal] = useState(null);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    const newComment = {
      author,
      content: inputVal,
      data: {
        like: 0,
        're-comment': 0,
      },
    };
    onCreate(newComment);
    setInputVal('');
  };

  return (
    <Container>
      <TextField
        value={inputVal}
        onChange={handleChange}
        id="outlined-basic"
        label="댓글을 입력해주세요."
        variant="outlined"
        sx={{
          width: '80%',
        }}
      />
      <Button
        onClick={handleClick}
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
