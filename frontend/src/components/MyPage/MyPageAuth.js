import React, { Children } from 'react';
//style
import styled from 'styled-components';
import { Box, Container, Grid } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function MyPageAuth({ content }) {
  return (
    <AuthContainer>
      {content && (
        <>
          {Children.toArray(
            content.map((el) => (
              <AuthBox>
                <Grid container>
                  <GridPart item xs={10}>
                    {el} 수료생
                  </GridPart>
                  <GridIcon item xs={2}>
                    <EmojiEventsIcon />
                  </GridIcon>
                </Grid>
              </AuthBox>
            )),
          )}
        </>
      )}
    </AuthContainer>
  );
}

export default MyPageAuth;

const AuthContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const GridPart = styled(Grid)`
  line-height: 30px;
  font-weight: bold;
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
