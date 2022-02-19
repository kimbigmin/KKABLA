import {Divider} from '@mui/material';
import {Link } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import SearchResultCard from 'components/SearchResult/SearchResultCard';

export default function isResultBootCamps(isLogin, bootCamp){
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
  )
};    

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

const SearchResultBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;  
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

