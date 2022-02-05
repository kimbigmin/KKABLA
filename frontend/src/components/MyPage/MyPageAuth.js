import React, { useState, Children } from 'react';
import { Box, Container, Grid } from '@mui/material';
import styled from 'styled-components';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function MyPageAuth({ content }) {
  const [auth, setAuth] = useState(true);

  return (
    <AuthContainer>
      {auth === true ? (
        <>
          {Children.toArray(
            content.map((el) => (
              <AuthBox>
                <Grid container>
                  <GridPart item xs={10}>
                    {el.part} 수료생
                  </GridPart>
                  <GridIcon item xs={2}>
                    <EmojiEventsIcon />
                  </GridIcon>
                </Grid>
              </AuthBox>
            )),
          )}
        </>
      ) : (
        <AuthNeedBox>인증하기</AuthNeedBox>
      )}
    </AuthContainer>
  );
}

// 데이터가 여러개로 들어오면 map으로 구성하는 방법을 고려,

export default MyPageAuth;

const AuthContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
`;

const GridPart = styled(Grid)`
  line-height: 30px;
`;

const GridIcon = styled(Grid)`
  line-height: 100px;
`;

const AuthBox = styled(Box)`
  margin: 10px;
  background-color: #bde7ff;
  width: 180px;
  height: 60px;
  padding: 10px;
  border-radius: 20px;
  text-align: justify;
`;

const AuthNeedBox = styled(Box)`
  margin: 10px;
  background-color: #bde7ff;
  width: 180px;
  height: 60px;
  padding: 10px;
  border-radius: 20px;
  text-align: center;
  line-height: 60px;
  font-size: 20px;
`;
