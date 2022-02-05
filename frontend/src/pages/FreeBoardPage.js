import { Grid } from '@mui/material';
import React from 'react';
import CommonBoard from '../components/Board/CommonBoard/CommonBoard';
import { Container } from '@mui/material';

function FreeBoardPage() {
  return (
    <Container sx={{ marginBottom: '5rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CommonBoard />
        </Grid>
        <Grid item xs={6}>
          <CommonBoard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default FreeBoardPage;
