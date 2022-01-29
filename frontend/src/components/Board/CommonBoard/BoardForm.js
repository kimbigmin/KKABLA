import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

function BoardForm({  }) {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
        <Grid container spacing={2} direction="row">
            <Grid item xs={12} sm container>
              <Grid item xs>
                <Typography gutterBottom variant='h4' component='div'>
                  제목 내용 입니다.
                </Typography>
                <Typography variant="body1" gutterBottom>
                  본문 내용 입니다.
                </Typography>
                <Typography variant='h6'>
                  작성자
                </Typography>
                <Typography variant='caption'>
                  조회수
                </Typography>
                <Typography variant='caption'>
                  좋아요
                </Typography>
                <Typography variant='caption'>
                  댓글
                </Typography>
              </Grid>
              <Grid Item xs>
                <ButtonBase sx={{ width: 128, height: 128}}>
                    <p>이미지</p>
                </ButtonBase>
            </Grid>
            </Grid>
          </Grid>


    </Paper>
  );
}

export default BoardForm;
