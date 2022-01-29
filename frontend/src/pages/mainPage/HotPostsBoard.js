import React from 'react';
import { Typography, Container } from "@material-ui/core";
import { Divider,Box } from '@mui/material';
import dummy from './dummyData';

export default function HotPostsBoard(){
    return(
    <Container 
        maxWidth="lg"
        style={{ 
            border: "1px dashed blue",
            height: "370px",
            marginTop: "5%",
            marginBottom: "5%",
        }}
    >   
        <Box display='flex'
        flexDirection="row"               
        >
            <Box order={1}
                flexGrow={1}
                sx={{mt:1}}
                >        
                <Typography variant="h6" >인기 게시판</Typography>
            </Box>
            
            <Box order={2}
                sx={{mt:1.75}}
            >        
                <Typography variant="h7">더보기</Typography>
            </Box>
        </Box>  
        <Box sx={{mt:1,mb:1}}>
          <Divider></Divider>
        </Box>
        {dummy.map((item,idx)=>{
            return (
                <Box order={idx} display="flex" sx={{mb:0.8}}>
                    <Typography variant='h6'>{item.title}</Typography>
                </Box>
            );
        })}
    </Container>
    );
}