import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchResultCard from 'components/SearchResult/SearchResultCard';

export default function HotBootCampBoard({ isLogin, hotBootCamps }) {
  const HotBootCampList = hotBootCamps
    .sort((a, b) => a.star - b.star)
    .map((item, idx) => {
      return (
        <Grid item xs={3} key={item._id + idx}>
          <Link
            to={`/board/review/detail/${item._id}`}
            state={{
              isLogin: isLogin,
              data: item,
              review: item.review,
            }}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <SearchResultCard item={item} idx={idx}></SearchResultCard>
          </Link>
        </Grid>
      );
    });

  return (
    <Container>
      <BoardHeader>
        <BoardTitle>{'현재 인기있는 부트 캠프'}</BoardTitle>
      </BoardHeader>
      <Grid container spacing={5}>
        {HotBootCampList}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  height: 30%;
  width: 100%;
  margin-top: 7rem;
  padding: 0 2rem;
`;
const BoardHeader = styled.div`
  margin-bottom: 3.5rem;
`;
const BoardTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1rem;
  color: #151618;
`;
