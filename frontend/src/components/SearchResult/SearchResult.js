import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Divider} from '@mui/material';
import { useLocation,Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import CardForReviewPage from '../review-page/CardsForReviewPage';

export default function SearchResult({isLogin}){
  const location=useLocation();
  const search=location.search;
  const params=new URLSearchParams(search);
  const keyword=params.get(`keyword`);

  const [bootCampResults,setBootCampResults]=useState([]);
  const [freeBoardResults,setFreeBoardResults]=useState([]);
  const [developBoardResults,setDevelopBoardResults]=useState([]);
  
  useEffect(()=>{
    const searchReq = async ()=>{
      axios.get(`http://localhost:5000/search/${keyword}`, {
      withCredentials: true, 
      })
      .then((res) => {
        console.log(res.data)
        setFreeBoardResults((prevState)=>{      
          const freeBoardPosts=res.data.boards
            .filter((post)=>post.type==="free")
          return [...freeBoardPosts]
        });
        setDevelopBoardResults((prevState)=>{      
          const developBoardPosts=res.data.boards
            .filter((post)=>post.type==="develop")
          return [...developBoardPosts]
        })
        setBootCampResults((prevState)=>{
        return [res.data.bootCamp];  
        });              
      })
      .catch((err) => console.log(err)); 
    }
    searchReq();
  },[keyword])
  
  const setBootCampLists=(bootCamps)=>{
    return bootCamps.map((item) => {
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
            <CardForReviewPage
              key={item.name}
              item={item}
              reviews={item.review}
            ></CardForReviewPage>
          </Link>
        </Grid>
      );
    });  
  }

  const setResultLists = (results)=>{
    return results
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
  }
  
  const boardsResults= (boardTitle,SearchedPostTitles)=>{
    return(
      <>
        <SearchResultBoardHeader>
          {`${boardTitle} 검색 결과`}
        </SearchResultBoardHeader>  
        <Divider style={{
          marginBottom: "2rem",
        }}/>
        {boardTitle ==="부트캠프" ?  setBootCampLists(SearchedPostTitles) 
          : setResultLists(SearchedPostTitles)}
      </>    
    );
  }

  return(
    <Container>
      <SearchResultBoard>
        {boardsResults("부트캠프",bootCampResults)}
        {boardsResults("자유게시판",freeBoardResults)}
        {boardsResults("개발게시판",developBoardResults)}
      </SearchResultBoard>
    </Container>
  );
};

const BoardTitle=styled.h2`
  font-weight : bold;
  font-size : 1.7rem;
  line-height : 1rem;
  color : #151618;
`
const SearchResultBoardHeader = styled.div`
  margin: 3.5rem 0 1rem 0;
`;
const SearchResultBoard=styled.div`
  font-weight : bold;
  font-size : 1.3rem;
  line-height : 1rem;

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