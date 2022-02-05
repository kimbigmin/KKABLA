import React from 'react';
import styled from 'styled-components';
import {Grid,Divider} from '@mui/material';
import DevelopmentPostsBoard from './postBoards/DevelopmentPostsBoard';
import GeneralPostsBoard from './postBoards/GeneralPostsBoard';

export default function DevelopAndGeneralBoard() {
   return (
      <Grid item xs={6}>
        <Grid container direction="column" rowSpacing={4.5}>
          <DevelopmentPostsBoard/>
          <GeneralPostsBoard/>
        </Grid>
      </Grid>
  );
}
