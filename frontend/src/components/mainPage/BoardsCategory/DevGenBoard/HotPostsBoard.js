import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Grid,Divider} from '@mui/material';

export default function HotPostsBoard({isLogin,developBoard,freeBoard}) {
  const titleList=[...freeBoard, ...developBoard]
    .slice(0,19)
    .map((post)=>{
      //17글자가 넘는 제목은 17글자까지만 자르고 '...' 추가
      const limitLen=15;
      const tailTxt=" ...";

      //날짜 YY-DD 식으로 출력
      const createdTime=new Date(post.createdAt)
      const month=(createdTime.getMonth()+1).toString();
      const date=createdTime.getDate().toString();
      const fillZeroMonth = month.length<2 ? '0'+month: month;
      const fillZeroDate = date.length<2 ? '0'+date: date;
      
      const boardType = post.type === 'free' ? "자유" : 
      post.type === "develop" ? "개발" : "BoardType"
      
      return(
        <TitleWrapper key={post._id}> 
          
          <Link
              to={"/board/detail/"}
              state={{ isLogin: isLogin }}
              style={{
                display:'flex',
                justifyContent: 'space-between',
                
                textDecoration: 'none',
                color: 'black',
               }}
          > 
            <BoardType>{boardType}</BoardType>
            <h2>{post.title.length<limitLen ? 
            post.title : (post.title.substr(0,limitLen)+tailTxt)}</h2>
              
          </Link>
          <span>{`${fillZeroMonth}-${fillZeroDate}`}</span>
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
  height: 100%;
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
    display: flex;
    font-size: 1rem;
    line-height:0.8rem;
    align-items: center;
  }

  span {
    font-size: 0.9rem;
  }
`;

const BoardType= styled.div`
  color: #6a9eff;
  border: 1px solid #6a9eff;
  line-height:0.8rem;
  margin-right: 0.5rem;
  border-radius:1px;
  padding:0.2rem 0.3rem;
`