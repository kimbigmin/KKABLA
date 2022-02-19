import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import searchPageDefaultData from 'components/defaultData/searchPageDefaultData';
import isResultBoard from "components/SearchResult/isResultBoard";
import isResultBootCamps from 'components/SearchResult/isResultBootCamps';

export default function SearchResult({isLogin}){
  const location=useLocation();
  const search=location.search;
  const params=new URLSearchParams(search);
  const keyword=params.get(`keyword`);
  
  const [searchResult,setSearchResult]=useState(searchPageDefaultData);
  useEffect(()=>{
    const searchReq = ()=>{
      axios.get(`/search/${keyword}`, {
      withCredentials: true, 
      })
      .then((res) => {       
        setSearchResult(res.data);
      })
      .catch((err) => console.log(err)); 
    }
    searchReq();
  },[keyword])

  let freeBoardResult=[]
  let developBoardResult=[]
  
  searchResult.boards
    .map((post)=>{
    if(post.type==="free"){
      freeBoardResult=[...freeBoardResult,post]  
    }
    else if(post.type==="develop"){
      developBoardResult=[...developBoardResult,post]  
    }
    else if(post.type==="default"){
      freeBoardResult=[...freeBoardResult,post]  
      developBoardResult=[...developBoardResult,post]  
    }
  })

return(
    <Container>
      <SearchResultWrapper>
        {isResultBootCamps(isLogin, searchResult.bootCamp)}
        {isResultBoard(isLogin, keyword, "개발게시판", developBoardResult, false)}
        {isResultBoard(isLogin, keyword, "자유게시판", freeBoardResult, false)}
      </SearchResultWrapper>
    </Container>
  );
};

const SearchResultWrapper=styled.div`
  width:100%;
  height:100%;
  font-size : 1.3rem;
  line-height : 1rem;

  margin: 3rem 0;
`;
