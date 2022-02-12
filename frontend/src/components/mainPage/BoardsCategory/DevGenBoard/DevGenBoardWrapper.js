import React from 'react';
import {Grid} from '@mui/material';
import DevelopBoard from './DevelopBoard';
import FreeBoard from './FreeBoard';

export default function DevGenBoardWrapper({freeBoard, developBoard}) {
   return (
      <Grid item xs={6}>
        <Grid container direction="column" rowSpacing={4.5}>
          <DevelopBoard developBoard={developBoard}/>
          <FreeBoard freeBoard={freeBoard}/>
        </Grid>
      </Grid>
  );
}
