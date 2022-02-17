import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../images/google.jpg';
import icon2 from '../../images/kakao.png';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Login({ isLogin }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      return navigate('/');
    }
  }, []);

  return (
    <LoginContainer>
      <Header>L O G I N</Header>
      <LockOpenIcon sx={{ fontSize: '8rem', color: '#4586ff' }}></LockOpenIcon>
      <h2> 반갑습니다. 로그인을 해주세요 :)</h2>
      <LoginBox>
        <LoginButton
          onClick={(e) => {
            window.location.href =
              'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle&client_id=5970793349-7o1h48vm750nn8lp9fgj4sskjc8fnfct.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&flowName=GeneralOAuthFlow';
          }}
        >
          <img
            style={{ width: '20px', float: 'left', marginRight: '10px' }}
            src={icon1}
            alt="google"
          />
          <h3>구글 로그인하기</h3>
        </LoginButton>
        <LoginButton
          style={{ backgroundColor: 'rgb(250,225,0)' }}
          onClick={(e) => {
            window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=ca25925040f30318f70fb3c066f9444d&redirect_uri=http://localhost:5000/auth/kakao&response_type=code`;
          }}
        >
          <img
            style={{ width: '20px', float: 'left', marginRight: '10px' }}
            src={icon2}
            alt="kakao"
          />
          <h3>카카오 로그인하기</h3>
        </LoginButton>
      </LoginBox>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
  margin: 100px auto;

  display: flex;
  justify-content: space-around;
  align-items: center;

  flex-direction: column;
  color: #575757;
  border-radius: 5px;
  width: 30%;
  height: 40rem;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  h2 {
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 1rem;
  }
`;

const Header = styled.header`
  font-size: 1.5rem;
  font-weight: bold;
`;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LoginButton = styled.div`
  margin: 10px auto;
  display: block;
  padding: 0.8rem;
  text-align: center;
  cursor: pointer;
  width: 70%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  color: black;
  border-radius: 5px;
`;

export default Login;
