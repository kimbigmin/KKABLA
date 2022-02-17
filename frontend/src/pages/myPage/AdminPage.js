import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';

import MyPageGrid from '../../components/MyPage/MyPageGrid';
import AdminAdd from '../../components/AdminPage/AdminAdd';
import axios from 'axios';
import AdminPageReport from 'components/AdminPage/AdminPageReport';
import { useNavigate } from 'react-router-dom';

function AdminPage({ isAdmin }) {
  const navigate = useNavigate();

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
              <MyPageGrid
                title={`신고당한 글 ${
                  reportBoard === undefined || reportBoard === null
                    ? 0
                    : reportBoard.length
                }개`}
                children={
                  <AdminPageReport
                    content={
                      reportBoard === undefined || reportBoard === null
                        ? reportBoard
                        : reportBoard.slice(0, 4)
                    }
                  />
                }
                length={
                  reportBoard === undefined || reportBoard === null
                    ? 0
                    : reportBoard.length
                }
                content={reportBoard}
                board="/admin/board"
              />
            </Grid>
            <Grid item xs={6}>
              <MyPageGrid
                title={`신고당한 댓글 ${
                  reportComment === undefined || reportComment === null
                    ? 0
                    : reportComment.length
                }개`}
                children={
                  <AdminPageReport
                    content={
                      reportComment === undefined || reportComment === null
                        ? reportComment
                        : reportComment.slice(0, 5)
                    }
                  />
                }
                length={
                  reportComment === undefined || reportComment === null
                    ? 0
                    : reportComment.length
                }
                content={reportComment}
                board="/admin/comment"
              />
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
