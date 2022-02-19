import React from 'react';
import { useNavigate } from 'react-router-dom';
//style
import styled from 'styled-components';
import { Divider, Box, Button } from '@mui/material';

function MyPageGrid({ title, children, length, board, content }) {
  const navigate = useNavigate();

  const MoveToMoreHandler = () => {
    navigate(board, {
      state: content,
    });
  };

  const onHandleAuth = () => {
    navigate('/mypage/auth');
  };

  return (
    <GridBox>
      <GridSection>
        <GridTop>
          <GridTitle>{title}</GridTitle>
          {board === '/mypage/auth' && (
            <Button onClick={onHandleAuth} variant="outlined">
              인증하기
            </Button>
          )}
          {length >= 5 && (
            <Button onClick={MoveToMoreHandler} variant="outlined">
              더 보기
            </Button>
          )}
        </GridTop>
        <Divider></Divider>
        <GridDetail>{children}</GridDetail>
      </GridSection>
    </GridBox>
  );
}

export default MyPageGrid;

const GridBox = styled(Box)`
  background-color: white;
  border-radius: 15px;
  margin: 10px;
`;

const GridSection = styled(Box)`
  padding: 10px;
`;

const GridTop = styled(Box)`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
  button {
    margin-bottom: 10px;
  }
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;

const GridDetail = styled(Box)`
  margin-top: 10px;
  min-height: 100px;
`;
