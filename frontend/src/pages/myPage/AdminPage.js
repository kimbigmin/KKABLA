import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import MyPageGrid from '../../components/MyPage/MyPageGrid';
import AdminAdd from '../../components/AdminPage/AdminAdd';
import axios from 'axios';

function AdminPage({ isLogin }) {
  const [reportBoard, setReportBoard] = useState();
  const [reportComment, setReportComment] = useState();

  const getReportData = async () => {
    await axios
      .get('http://localhost:5000/mypage', {
        withCredentials: true,
      })
      .then((res) => {
        setReportBoard(res.data.reportBoard);
        setReportComment(res.data.reportComment);
      });
  };

  useEffect(() => {
    getReportData();
  }, []);

  console.log(reportBoard);
  console.log(reportComment);
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Grid container direction="column">
            <Grid item xs={6}>
              <MyPageGrid title={'글 신고'} />
            </Grid>
            <Grid item xs={6}>
              <MyPageGrid title={'댓글 신고'} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <MyPageGrid title={'기관 등록'} children={<AdminAdd />} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminPage;
