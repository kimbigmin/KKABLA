import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Grid, Divider } from '@mui/material';
import isTitleLinks from 'components/isTitleLinks/isTitleLinks';

export default function FreeBoard({ isLogin, freeBoard }) {
  const titleList = [...freeBoard]
    .map((post) => {
      return(
        isTitleLinks(isLogin, post, "freeBoard")
      );
    });
  
  return (
    <Grid item xs={6}>
      <Box>
        <BoardHeader>
          <BoardTitle>{'자유 게시판'}</BoardTitle>
          <SeeMore>
            <Link
              to={'/board/free'}
              style={{ textDecoration: 'none', color: 'black' }}
            >
              {'더보기'}
            </Link>
          </SeeMore>
        </BoardHeader>
        <Divider />
        {titleList}
      </Box>
    </Grid>
  );
}
const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  background-color: white;
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
const BoardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.3rem;
  line-height: 1rem;
  color: #151618;
  margin-bottom: 1.5rem;
`;

const SeeMore=styled.div`
  margin-bottom:auto;
`
