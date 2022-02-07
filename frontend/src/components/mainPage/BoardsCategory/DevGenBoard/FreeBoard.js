import React from 'react';
import styled from 'styled-components';
import {Grid,Divider} from '@mui/material';

export default function FreeBoard({freeBoard}) {
  const titleList=freeBoard
  .slice(0,9)
  .map((post)=>{
    const limitLen=17;
    const tailTxt=" ...";
    return(
      <TitleWrapper>
        <h2>{post.title.length<limitLen ? 
        post.title : (post.title.substr(0,limitLen)+tailTxt)}</h2>
        {/* <span>{post.createdAt}</span> */}
    </TitleWrapper>
    );
  });
  
  return (
      <Grid item xs={6}>
        <Box>
          <BoardHeader>
            <BoardTitle>{"자유 게시판"}</BoardTitle>
            <SeeMore>{"더보기"}</SeeMore>
          </BoardHeader>
          <Divider/>
          {titleList}
        </Box>
      </Grid>
  );
}
const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color:white;
  flex-direction: column;
  padding: 2rem;

  width: 100%;
  height: 370px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-align: center;
  text-decoration: none;
`;

const BoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
`;
const BoardTitle=styled.h2`
  font-weight : bold;
  font-size : 1.5rem;
  line-height : 1rem;
  color : #151618;
  margin-bottom: 1.5rem;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  align-items: center;
  cursor: pointer;

  h2 {
    font-size: 1rem;
    line-height: 0.8rem;
  }

  span {
    font-size: 1rem;
  }


`;

const SeeMore=styled.div`
  margin-bottom:auto;
`