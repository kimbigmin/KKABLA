import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import icon1 from '../../images/google.jpg';
import icon2 from '../../images/kakao.png';
import axios from 'axios';

const LoginContainer = styled.header`
  margin: 200px auto;

  border-bottom-left: none;
  border-radius: 5px;
  width: 22%;
  height: 150px;
  background-color: white;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 255, 0.2);
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
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 255, 0.2);
  border-radius: 5px;
`;

function Login({ isLogin }) {
  let navigate = useNavigate();
  // const [kakao, setKakao] = useState(false);

  // useEffect(() => {
  //   if (isLogin) {
  //     return navigate('/');
  //   }
  // }, [isLogin]);

  useEffect(() => {
    if (isLogin) {
      return navigate('/');
    }
    const getAccessToken = async (authorizationCode) => {
      await axios
        .post('http://localhost:5000/auth/kakao', {
          authorizationCode,
        })
        .then((res) => {
          let accessToken = res.data.accessToken;
          let refreshToken = res.headers['refresh-token'];
          localStorage.setItem('CC_Token', accessToken);
          localStorage.setItem('RF_Token', refreshToken);
          navigate(`/`);
        });
    };
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get('code');
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
  }, []);

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
          src={icon1}
          alt="google"
        />
        <Font>구글 로그인하기</Font>
      </Google>
      <Google
        onClick={(e) => {
          function kakaoLogin() {
            window.Kakao.Auth.login({
              success: function (authObj) {
                alert(JSON.stringify(authObj));
              },
              fail: function (err) {
                alert(JSON.stringify(err));
              },
            });
          }
          window.Kakao.init('c803fcf2490f48b2bfb82da80bb7b39a');
          kakaoLogin();
          // window.location.href = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=ca25925040f30318f70fb3c066f9444d&redirect_uri=http://localhost:3000/login`;
        }}
      >
        <img
          style={{ width: '20px', float: 'left', marginRight: '10px' }}
          src={icon2}
          alt="kakao"
        />
        <Font>카카오 로그인하기</Font>
      </Google>
    </LoginContainer>
  );
}

export default Login;
