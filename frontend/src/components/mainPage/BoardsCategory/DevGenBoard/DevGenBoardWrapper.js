import React from 'react';
import {Grid} from '@mui/material';
import DevelopBoard from 'components/mainPage/BoardsCategory/DevGenBoard/DevelopBoard';
import FreeBoard from 'components/mainPage/BoardsCategory/DevGenBoard/FreeBoard';

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
