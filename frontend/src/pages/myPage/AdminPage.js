import React from 'react';
import { Container, Grid } from '@mui/material';

import MyPageGrid from '../../components/MyPage/MyPageGrid';
import AdminAdd from '../../components/AdminPage/AdminAdd';

function AdminPage() {
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <MyPageGrid title={'인증 요청'} />
        </Grid>
        <Grid item xs={6}>
          <MyPageGrid title={'기관 등록'} children={<AdminAdd />} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminPage;
