import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Grid,Divider} from '@mui/material';

export default function FreeBoard({isLogin, freeBoard}) {
  console.log(freeBoard)
  const titleList=[...freeBoard]
    .slice(0,9)
    .map((post)=>{
      //17글자가 넘는 제목은 17글자까지만 자르고 '...' 추가
      const limitLen=17;
      const tailTxt=" ...";
      
      //날짜 YY-DD 식으로 출력
      const createdTime=new Date(post.createdAt)
      const month=(createdTime.getMonth()+1).toString();
      const date=createdTime.getDate().toString();
      const fillZeroMonth = month.length<2 ? '0'+month: month;
      const fillZeroDate = date.length<2 ? '0'+date: date;
      return(
        <TitleWrapper key={post._id}>
          <Link
              to={`/board/free/${post._id}`}
              state={{ 
                isLogin: isLogin,
                dataFromBoard: post,
              }}
              style={{ textDecoration: 'none', color: 'black' }}
          >
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
            <BoardTitle>{"자유 게시판"}</BoardTitle>
            <SeeMore>
              <Link 
                to={"/board/free"}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {"더보기"}
              </Link>
            </SeeMore>
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
    font-size: 0.9rem;
  }


`;

const SeeMore=styled.div`
  margin-bottom:auto;
`