import React from 'react';
import { Typography, Container } from "@material-ui/core";
import { Divider,Box } from '@mui/material';

export default function ReviewedCamp(){
    return(
    <Container
        maxWidth="lg"
        style={{ 
            border: "1px dashed blue",
            height: "250px",
            marginBottom: "5%", 
        }}   
    >   
      <Box display='flex' 
        flexDirection="row"
        style={{ 
          border: "1px dashed green",
        }}
      >
        <Box order={1}
            flexGrow={1}
            sx={{mt:1}}
            >        
            <Typography variant="h6" >리뷰가 등록된 기관</Typography>
        </Box>

        <Box order={2} 
          sx={{mt:1.7}}
        >        
          <Typography variant="h7">더보기</Typography>
        </Box>         
      </Box>
      <Box sx={{mt:1,mb:1}}>
          <Divider></Divider>
      </Box>              
    </Container>
    );
}


