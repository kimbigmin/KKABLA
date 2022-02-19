import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//style
import { Container, Grid } from '@mui/material';
//component
import MyPageGrid from 'components/MyPage/MyPageGrid';
import AdminPageReportComment from 'components/AdminPage/AdminPageReportComment';

function AdminPageMoreComment() {
  const location = useLocation();
  const content = location.state;

  const [free, setFree] = useState(null);
  const [develop, setDevelop] = useState(null);

  useEffect(() => {
    setFree(content.filter((el) => el.boardType === 'free'));
    setDevelop(content.filter((el) => el.boardType === 'develop'));
  }, []);

  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <MyPageGrid
            title={`자유게시판 ${
              free === null || free === undefined ? 0 : free.length
            }개`}
            children={<AdminPageReportComment content={free} />}
          />
        </Grid>
        <Grid item xs={6}>
          <MyPageGrid
            title={`개발게시판 ${
              develop === null || develop === undefined ? 0 : develop.length
            }개`}
            children={<AdminPageReportComment content={develop} />}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminPageMoreComment;
