import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../../Card/Card';
import {data} from '../../../reviewDummy';

export default function HotBootCampBoard({ isLogin}){
  const [dummy, setDummy]= useState(data);
  
  //상위 4개 HotBootCampList 생성
  const sortedDummy=dummy.sort(function (a, b) {
    if (a.star > b.star) {
      return -1;
    }
    if (a.star < b.star) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
  .slice(0,4);

  // 1~4번째로 별점이 높은 기관 보여주기
  const HotBootCamps=sortedDummy.map((item,idx)=>{
    if (item) {
      return (
        <Grid item xs={3} key={idx}>
          <Link
            to={`/review/detail/${item.id}`}
            state={{ isLogin: isLogin, data: item }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Card item={item}  key={idx}></Card>
          </Link>
        </Grid>
      );
    }
  });

  return(
    <Container>
      <BoardHeader>
      <BoardTitle>{"현재 인기있는 부트 캠프"}</BoardTitle>
      </BoardHeader>
      <Grid container spacing={5}>
        {HotBootCamps}      
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;  
  display: flex;
  flex-direction: column;
  justify-contents:center;
  height: 30%;
  width: 100%;
  margin: 4rem 0;
  padding:0 2rem;
`;
const BoardHeader = styled.div`
  margin-bottom: 3.5rem;
`;
const BoardTitle=styled.h2`
  font-weight : bold;
  font-size : 1.7rem;
  line-height : 1rem;
  color : #151618;
`


