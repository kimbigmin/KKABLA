import isResultBoard from "components/SearchResult/isResultBoard";
import styled from "styled-components";
import { Container } from '@mui/material';
import { useLocation } from 'react-router-dom';

export default function SearchResultSeeMore(){
  const location=useLocation();
  const {keyword, isLogin, results, boardTitle, seemore}= location.state;
  // console.log(location.state)
  return(
    <Container>
      <SearchResultWrapper>
        {isResultBoard(keyword, isLogin, `${boardTitle}` , results, seemore)}
      </SearchResultWrapper>
    </Container>
  );
}


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

const SeeMore=styled.div`
  margin-bottom:auto;
`