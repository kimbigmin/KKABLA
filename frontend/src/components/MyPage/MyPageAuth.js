import React, { Children } from 'react';
//style
import styled from 'styled-components';
import { Box } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

function MyPageAuth({ content }) {
  return (
    <AuthContainer>
      {content && (
        <>
          {Children.toArray(
            content.map((el) => (
              <AuthBox>
                <TitleBox>{el} 수료생</TitleBox>
                <IconBox>
                  <StyledEmojiEventsOutlinedIcon fontSize="large" />
                </IconBox>
              </AuthBox>
            )),
          )}
        </>
      )}
    </AuthContainer>
  );
}

export default MyPageAuth;

const AuthContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const TitleBox = styled(Box)`
  font-weight: 600;
`;

const AuthBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  background-color: #4586ff;
  width: 180px;
  height: 60px;
  padding: 10px;
  border-radius: 20px;
`;

const IconBox = styled(Box)``;

const StyledEmojiEventsOutlinedIcon = styled(EmojiEventsOutlinedIcon)`
  color: yellow;
`;
