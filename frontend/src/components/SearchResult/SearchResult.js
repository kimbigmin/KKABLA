import { Container } from '@mui/material';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Divider} from '@mui/material';

export default function SearchResult(){
  
  return(
    <Container>
      <h2>자유 게시판 검색 결과</h2>
      <Divider/>
      <h2>개발 게시판 검색 결과</h2>
      <Divider/>
      <h2>리뷰 게시판 검색 결과</h2>
      <Divider/>
      
    </Container>
  );
};

