import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Divider} from '@mui/material';
import { useLocation,Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import SearchResultCard from 'components/SearchResult/SearchResultCard';
import isTitleLinks from 'components/isTitleLinks/isTitleLinks';
import searchPageDefaultData from 'components/defaultData/searchPageDefaultData';

export default function SearchResult({isLogin}){
  const location=useLocation();
  const search=location.search;
  const params=new URLSearchParams(search);
  const keyword=params.get(`keyword`);
  
  const [searchResult,setSearchResult]=useState(searchPageDefaultData);
  useEffect(()=>{
    const searchReq = ()=>{
      axios.get(`http://localhost:5000/search/${keyword}`, {
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
      <BootCampSearchResultBoard>
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
      </BootCampSearchResultBoard>  
    );    
  })

  const isResultTitleLists = (boardTitle, results)=>{
    const resultTitleLists = results.length === 0 ? 
    <NoResultFound>검색 결과가 없습니다.</NoResultFound> 
    : results
      .map((post,idx)=>{
        return(
          isTitleLinks(isLogin,post,'searchResultBoard')
        );
      })
    return(
      <>
        <SearchResultBoard>
          <SearchResultBoardHeader>
                {`${boardTitle} 검색 결과`}
          </SearchResultBoardHeader>  
          <Divider style={{
            marginBottom: "2rem",
          }}/>
          {resultTitleLists}
        </SearchResultBoard>
      </>
    )    
  }

return(
    <Container>
      <SearchResultWrapper>
        {isResultBootCamps(searchResult.bootCamp)}
        {isResultTitleLists("개발게시판",developBoardResult)}
        {isResultTitleLists("자유게시판",freeBoardResult)}
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

const BootCampSearchResultBoard = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  text-decoration: none;
  margin: 2rem 0;
  padding: 2rem;
`;

const SearchResultBoard = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color:white;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  text-decoration: none;
  margin: 2rem 0;
  padding: 2rem;
`;

const SearchResultBoardHeader = styled.div`
  font-weight : bold;
  margin: 0 0 2rem 0;
`;


const SearchResultCardBoard=styled.div`
  display: flex;
  justify-contents: space-between;
  box-sizing: border-box;
  margin-bottom: 3rem;
`
const NoResultFound= styled.h4`
 color:  #969696;
`

