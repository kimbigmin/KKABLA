import styled from 'styled-components';

export default function Banner(){
  return(
    <BannerWrapper>
      <video autoPlay muted loop
        style={{
          width:"100%",
          position:"relative",
          marginBottom: "-18%",
        }}
      >
        <source src={require("videos/kkablaBanner.mp4")} type="video/mp4"/>
        이 문구를 보셨다면 비디오가 안나온다는 것을 알 수 있읍니다.
      </video>
    </BannerWrapper>  
  );
}
const BannerWrapper=styled.div`
  overflow: hidden;
`