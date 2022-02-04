import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import icon from '../../images/google.jpg';

const LoginContainer = styled.header`
  margin: 200px auto;

  border-bottom-left: none;
  border-radius: 5px;
  width: 33%;
`;

const H1 = styled.header`
  font-size: 22px;
  font-weight: 500;
  margin: 20px auto;
  display: block;
  text-align: center;
`;

const Font = styled.header`
  font-size: 16px;
  font-weight: 600;
  font-family: 'Pretendard-Thin';
`;

const Google = styled.header`
  margin: 20px auto;
  display: block;
  text-align: center;
  cursor: pointer;
  width: 60%;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 3px 3px 2px 1px rgba(0, 0, 255, 0.2);
  border-radius: 5px;
`;

function Login({ isLogin }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      return navigate('/');
    }
  }, [isLogin]);

  return (
    <LoginContainer>
      <Google
        onClick={(e) => {
          window.location.href =
            'https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fauth%2Fgoogle&client_id=5970793349-7o1h48vm750nn8lp9fgj4sskjc8fnfct.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&flowName=GeneralOAuthFlow';
        }}
      >
        <img
          style={{ width: '20px', float: 'left', marginRight: '10px' }}
          src={icon}
          alt="google"
        />
        <Font>구글 로그인하기</Font>
      </Google>
    </LoginContainer>
  );
}

export default Login;
