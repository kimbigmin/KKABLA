import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import styled from 'styled-components';
import { style } from './InputStyle.js';
import './styles.scss';

function CommentInput({ onCreate, type }) {
  const [inputVal, setInputVal] = useState('');

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    const newComment = {
      contents: inputVal,
    };
    onCreate(newComment);
    setInputVal('');
  };
  // 댓글 공백 검증
  const inputCheck = inputVal.match(/^\s+/g) !== null || inputVal === '';

  return (
    <Container>
      <TextField
        value={inputVal}
        onChange={handleChange}
        autoComplete="off"
        id="outlined-basic"
        label="댓글을 입력해주세요."
        variant="outlined"
        size={style[type].size}
        sx={{
          width: '100%',
          backgroundColor: 'white',
        }}
      />
      <Button
        id={`${type}-btn`}
        onClick={handleClick}
        variant="contained"
        disabled={inputCheck ? true : false}
        sx={{
          width: '10%',
          marginLeft: '1rem',
          height: style[type].height,
          backgroundColor: style[type].color,
          fontSize: '15px',
          padding: 2,
        }}
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
