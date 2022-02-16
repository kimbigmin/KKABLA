import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Divider} from '@mui/material';
import { useLocation,Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import SearchResultCard from 'components/SearchResult/SearchResultCard';
import React from 'react';

export default function SearchResult({isLogin}){
  const location=useLocation();
  const search=location.search;
  const params=new URLSearchParams(search);
  const keyword=params.get(`keyword`);
  
  const [searchResult,setSearchResult]=useState([]);

  useEffect(()=>{
    const searchReq = async ()=>{
      axios.get(`http://localhost:5000/search/${keyword}`, {
      withCredentials: true, 
      })
      .then((res) => {
        let freeBoardResult=[]
        let developBoardResult=[]
        res.data.boards
          .map((post)=>{
            if(post.type==="free"){
              freeBoardResult=[...freeBoardResult,post]  
            }
            else if(post.type==="develop"){
              developBoardResult=[...freeBoardResult,post]  
            }
          })
        
        setSearchResult(
          <>
            {isResultBootCamps(res.data.bootCamp)}
            {isResultTitleLists("개발게시판",developBoardResult)}
            {isResultTitleLists("자유게시판",freeBoardResult)}
          </>
        )
      })
      .catch((err) => console.log(err)); 
    }
    searchReq();
  },[keyword])
  
  const isResultBootCamps=((bootCamps)=>{
    const resultBootCamps = bootCamps.length===0 ? 
    <NoResultFound>검색 결과가 없습니다.</NoResultFound> 
    : bootCamps.map((item) => {
        return (
          <Grid item xs={3} key={item.name}>
            <Link
              to={`/board/review/detail/${item._id}`}
              state={{
                isLogin: isLogin,
                data: item,
                review: item.review,
              }}
              style={{ textDecoration: 'none', color: 'black' }}
              >
              <SearchResultCard
                key={item.name}
                item={item}
                reviews={item.review}
                ></SearchResultCard>
            </Link>
          </Grid>
        );
      });
    return(
      <>
        <SearchResultBoardHeader>
          {`부트캠프 검색 결과`}
        </SearchResultBoardHeader>  
        <Divider style={{
          marginBottom: "2rem",
        }}/>
        <SearchResultCardBoard>
          <Grid container spacing={bootCamps.length===0 ? 0 : 2}>
            {resultBootCamps}
          </Grid>  
        </SearchResultCardBoard>
      </>  
    );    
  })

  const isResultTitleLists = (boardTitle,results)=>{
    const resultTitleLists = results.length===0 ? 
    <NoResultFound> 검색 결과가 없습니다.</NoResultFound> 
    : results
      .map((post,idx)=>{
        //30글자가 넘는 제목은 17글자까지만 자르고 '...' 추가
        const limitLen=30;
        const tailTxt=" ...";
        
        //날짜 YY-DD 식으로 출력
        const createdTime=new Date(post.createdAt)
        const month=(createdTime.getMonth()+1).toString();
        const date=createdTime.getDate().toString();
        const fillZeroMonth = month.length<2 ? '0'+month: month;
        const fillZeroDate = date.length<2 ? '0'+date: date;

        return(
          <TitleWrapper key={post._id+idx}>
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
      })
    return(
      <>
        <SearchResultBoardHeader>
              {`${boardTitle} 검색 결과`}
        </SearchResultBoardHeader>  
        <Divider style={{
          marginBottom: "2rem",
        }}/>
        {resultTitleLists}
      </>
    )    
  }

return(
    <Container>
      <SearchResultWrapper>
        {searchResult}
      </SearchResultWrapper>
    </Container>
  );
};

const NoResultFound= styled.h4`
 color:  #969696;
 
`

const SearchResultCardBoard=styled.div`
  // display: flex;
  // justify-contents: space-between;
  // box-sizing: border-box;

`

const SearchResultBoardHeader = styled.div`
  margin: 3.5rem 0 1rem 0;
`;
const SearchResultWrapper=styled.div`
  width:100%;
  height:100%;
  font-weight : bold;
  font-size : 1.3rem;
  line-height : 1rem;

  margin: 3rem 0;
`;
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