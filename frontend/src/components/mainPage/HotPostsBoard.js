import React from 'react';
import dummy from './dummyData';
import styled from 'styled-components';
import eliceLogo from '../../images/eliceLogo.png';
import star from '../../images/star.png';
import BootCampCard from './BootCampCard';

HotPostsBoard.defaultProps={
  headTitle:"현재 인기있는 부트 캠프",
}

export default function HotPostsBoard({
  headTitle,
}){
    return(
    <Container>   
      <HeadTitle>{headTitle}</HeadTitle>
      <BootCampContainer>
        <BootCampCard/>   
      </BootCampContainer>      
    </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: lightgreen;
  height: 30vh;
  width: 100%;
  // margin: auto;
  padding: 3% 3%;  
  `;

  const HeadTitle=styled.h2`
    font-weight : bold;
    font-size : 1.5rem;
    line-height : 1rem;
    color : #151618;
    margin-bottom : 2.5%;
  `
const BootCampContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100%);
  grid-column-gap: 20px;
`;



const SeeMore=styled.div`

`


