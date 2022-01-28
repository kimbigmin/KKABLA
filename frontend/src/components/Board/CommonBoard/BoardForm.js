import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

function BoardForm({  }) {
  return (
    <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1}}>
        <Grid container spacing={2}>
            <Grid Item>
                <ButtonBase sx={{ width: 128, height: 128}}>
                    <p>이미지</p>
                </ButtonBase>
            </Grid>
            <Grid></Grid>

        </Grid>

    </Paper>
  );
}

export default BoardForm;
