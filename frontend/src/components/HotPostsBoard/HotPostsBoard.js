import React from 'react';
import { Typography, Container } from "@material-ui/core";
import { border,borderColor, } from '@mui/system';
import { Divider } from '@mui/material';

const dummy={
    0:{
        title:"test title0",
        author:"testMan0",
        name:"testName",
        hit: 18,
    },
    1:{
        title:"test title1",
        author:"testMan1",
        name:"testName",
        hit: 11,
    },
    2:{
        title:"test title2",
        author:"testMan2",
        name:"testName",
        hit: 16,
    },
    3:{
        title:"test title3",
        author:"testMan3",
        name:"testName",
        hit: 3,
    },
    4:{
        title:"test title4",
        author:"testMan4",
        name:"testName",
        hit: 7,
    },
    5:{
        title:"test title5",
        author:"testMan5",
        name:"testName",
        hit: 7,
    },
    6:{
        title:"test title6",
        author:"testMan6",
        name:"testName",
        hit: 12,
    },
    7:{
        title:"test title7",
        author:"testMan7",
        name:"testName",
        hit: 11,
    },
};

function HotPostsBoard(){
    return(
    <Container 
        maxWidth="lg"
        style={{ 
            border: "1px dashed red",
            height: "400px",
        }}
    >
        <Typography variant="h6">추천 게시판</Typography>
        <Divider></Divider>
        <Typography>test title</Typography>

        <Typography >더보기</Typography>

    </Container>
    );
}


export default HotPostsBoard