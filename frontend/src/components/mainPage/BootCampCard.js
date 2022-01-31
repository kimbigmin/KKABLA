import styled from 'styled-components';
import eliceLogo from '../../images/eliceLogo.png';
import star from '../../images/star.png';

export default function BootCampCard (){
  return(
    <Container>
      <LogoImage src={eliceLogo} alt={"logo"}/>
      <TextWrapper>
        <BootCampName>{"엘리스 코딩"}</BootCampName>
      </TextWrapper>
      <TextWrapper>
        <StartImage src={star}/>        
        <StarRating>{":"}</StarRating>
      </TextWrapper>        
    </Container>
  );
}

const Container=styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  background-Color: white;
  align-items: center;  
  border: 1px solid #f0f1f3; 
  border-radius:8px;
  width: 18%;
  height: 65%;
  box-sizing: border-box;
  padding:1rem 1rem;
  box-shadow: 0 0.5rem 1rem -1rem #c2c2c2;
  justify-content: center;
  `

const LogoImage=styled.img`
  width: 70%;
`
const TextWrapper=styled.div`
  display: flex;
  align-items: center;
  z-index:10;
  margin: 1%;
  justify-content:center;
`
const BootCampName=styled.p`
  font-weight : bold;
  font-size : 1rem;
  line-height : 1rem;
`
const StarRating=styled.p`
  font-weight : bold;
  font-size : 1rem;
  line-height : 1rem;
`
const StartImage=styled.img`    
  width: 10%;
  margin-right:3%;

`