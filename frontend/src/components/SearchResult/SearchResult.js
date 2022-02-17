import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Divider} from '@mui/material';
import { useLocation,Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import SearchResultCard from 'components/SearchResult/SearchResultCard';
import isTitleLinks from 'components/isTitleLinks/isTitleLinks';
import DefaultData from 'components/defaultData';

export default function SearchResult({isLogin}){
  const location=useLocation();
  const search=location.search;
  const params=new URLSearchParams(search);
  const keyword=params.get(`keyword`);
  
  const [searchResult,setSearchResult]=useState(DefaultData);

  useEffect(()=>{
    const searchReq = ()=>{
      axios.get(`http://localhost:5000/search/${keyword}`, {
      withCredentials: true, 
      })
      .then((res) => {
        console.log(res.data.bootCamp)        
        setSearchResult(res.data)
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
      developBoardResult=[...freeBoardResult,post]  
    }
  })

  const isResultBootCamps=((bootCamp)=>{
    const resultBootCamps = bootCamp.length===0 ? 
    <NoResultFound>검색 결과가 없습니다.</NoResultFound> 
    : bootCamp.map((item) => {
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
          <Grid container spacing={bootCamp.length===0 ? 0 : 3}>
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
        return(
          isTitleLinks(isLogin,post,'searchResultBoard')
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
        {/* {searchResult} */}
        {isResultBootCamps(searchResult.bootCamp)}
        {isResultTitleLists("개발게시판",developBoardResult)}
        {isResultTitleLists("자유게시판",freeBoardResult)}
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