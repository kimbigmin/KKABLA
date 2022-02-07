import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Grid,Divider} from '@mui/material';

export default function HotPostsBoard({isLogin,freeBoard,developBoard}) {
  const titleList=[...developBoard, ...freeBoard]
    .slice(0,20)
    .map((post)=>{
      const limitLen=17;
      const tailTxt=" ...";
      return(
        <TitleWrapper key={post._id}> 
          <Link
              to={"/"}
              state={{ isLogin: isLogin }}
              style={{ textDecoration: 'none', color: 'black' }}
          >
              <h2>{post.title.length<limitLen ? 
              post.title : (post.title.substr(0,limitLen)+tailTxt)}</h2>
              {/* <span>{post.createdAt}</span> */}
          </Link>
        </TitleWrapper>
      );
    });
   
  return (
      <Grid item xs={6}>
        <Box>
          <BoardHeader>
            <BoardTitle>{"인기 게시물"}</BoardTitle>
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
  height: 775px;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-decoration: none;

  img {
    width: auto;
    height: 80%;
    // overflow: hidden;
  }

  .info {
    margin-top: 1.5rem;
    p {
      font-weight: bold;
    }
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
    color: rgba(50, 50, 50, 0.961);
  }
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
    line-height:0.8rem;
  }

  span {
    font-size: 1rem;
  }
`;
