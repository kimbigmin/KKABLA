import { Container, Divider, Grid, Box, Rating } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
function MyPage() {
  return (
    <Container
      sx={{
        bgcolor: '#F7F7F7',
      }}
      maxWidth="md"
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <GridBox>
            <GridSection>
              <GridTitle>닉네임123 님</GridTitle>
              <Divider></Divider>
              <GridDetail></GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
        <Grid item xs={3.5}>
          <GridBox>
            <GridSection>
              <GridTitle>작성한 글 n개</GridTitle>
              <Divider></Divider>
              <GridDetail>
                <GridDetailBox>
                  <GridDetailTitle>
                    글제목.....
                    <Divider
                      sx={{
                        margin: '10px 0',
                      }}
                    ></Divider>
                    글 내용 ...
                  </GridDetailTitle>
                </GridDetailBox>
                <GridDetailBox>
                  <GridDetailTitle>
                    글제목.....
                    <Divider
                      sx={{
                        margin: '10px 0',
                      }}
                    ></Divider>
                    글 내용 ...
                  </GridDetailTitle>
                </GridDetailBox>
                <GridDetailBox>
                  <GridDetailTitle>
                    글제목.....
                    <Divider
                      sx={{
                        margin: '10px 0',
                      }}
                    ></Divider>
                    글 내용 ...
                  </GridDetailTitle>
                </GridDetailBox>
              </GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
        <Grid item xs={4.5}>
          <GridBox>
            <GridSection>
              <GridTitle>작성한 리뷰 n개</GridTitle>
              <Divider
                sx={{
                  margin: '10px 0',
                }}
              ></Divider>
              <GridDetail>
                <GridDetailBox>
                  <Grid container>
                    <Grid item xs={4}>
                      <RatingBox>
                        3.0
                        <Rating
                          name="read-only"
                          value={3}
                          size="small"
                          readOnly
                        />
                      </RatingBox>
                    </Grid>
                    <Grid item xs={8}>
                      <RatingDate>2022-02-03</RatingDate>
                      <RatingName>Elice SW Engineer Track 1기</RatingName>
                    </Grid>
                  </Grid>
                </GridDetailBox>
              </GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
        <Grid item xs={4}>
          <GridBox>
            <GridSection>
              <GridTitle>좋아요</GridTitle>
              <Divider></Divider>
              <GridDetail></GridDetail>
            </GridSection>
          </GridBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default MyPage;

const GridSection = styled.div`
  padding: 10px;
`;

const GridTitle = styled(Box)`
  padding: 10px;
  font-weight: 700;
`;

const GridBox = styled(Box)`
  background-color: white;
  border-radius: 15px;
  margin: 10px;
`;

const GridDetail = styled(Box)`
  min-height: 100px;
`;

const GridDetailBox = styled(Box)`
  background-color: #f7f7f7;
  border-radius: 10px;
  position: relative;
`;

const GridDetailTitle = styled(Box)`
  margin: 10px;
  font-size: 16px;
  padding: 10px;
  font-weight: 500;
`;

const RatingBox = styled(Box)`
  text-align: center;
  margin: 26px 0;
`;

const RatingDate = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  font-size: 12px;
`;

const RatingName = styled(Box)`
  padding: 26px 10px;
  text-align: justify;
`;
