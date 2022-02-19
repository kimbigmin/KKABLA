import isTitleLinks from 'components/isTitleLinks/isTitleLinks';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {Divider} from '@mui/material';

export default function isResultBoard(isLogin, keyword, boardTitle, results, seemore){
  console.log(results)
  const titleNumLimit =  (seemore !==true && results.length > 10) ? 10 : results.length
  
  const resultTitleLists = results.length === 0 ? 
  <NoResultFound>검색 결과가 없습니다.</NoResultFound> 
  : results.slice(0,titleNumLimit)
      .map((post)=>{
        return(
          isTitleLinks(isLogin,post,'searchResultBoard')
        );
      })
  return(
    <SearchResultBoard>
      <SearchResultBoardHeader>
          {`${boardTitle} 검색 결과`}
        <SeeMore>
          {results.length<=10 || seemore=== true ? "" : <Link
            to={`/search/seemore/?keyword=${keyword}`}
            state= {{
              keyword:keyword,
              results:results,
              isLogin:isLogin,
              boardTitle: boardTitle,
              seemore: true,
            }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            {'더보기'}
          </Link>}
        </SeeMore>    
      </SearchResultBoardHeader>  
      <Divider style={{
        marginBottom: "2rem",
      }}/>
      {resultTitleLists}
    </SearchResultBoard>
  )    
}

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
  display: flex;
  justify-content: space-between;  
  font-weight : bold;
  margin: 0 0 2rem 0;
  
`;

const NoResultFound= styled.h4`
 color:  #969696;
`

const SeeMore=styled.div`
  margin-bottom:auto;
`