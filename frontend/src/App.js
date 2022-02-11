import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ReviewPage from './pages/ReviewPage';
import ReviewDetailPage from './pages/DetailPage';
import BoardDetailPage from './pages/BoardDetailPage';
import MainContents from './components/mainPage/MainContents';
import FreeBoardPage from './pages/FreeBoardPage';
import Login from './components/login-page/Login';
import Logout from './components/logout-page/Logout';
import MyPage from './pages/myPage/MyPage';
import DevelopBoardPage from './pages/DevelopBoardPage';
import AuthPage from './pages/myPage/AuthPage';
import PostPage from './pages/postPage/PostPage';
import AdminPage from './pages/myPage/AdminPage';
import PostReviewPage from './pages/postPage/PostReviewPage';

function App() {
  const [isLogin, setisLogin] = useState(false);
  console.log(isLogin);
  useEffect(() => {
    const getMe = async () => {
      await axios
        .get('http://localhost:5000/auth/user', {
          withCredentials: true,
        })
        .then((res) => setisLogin(res.data));
    };
    getMe();
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Header isLogin={isLogin} />
      <ContentContainer>
        <Routes>
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
          {/* <Route path="/board" element={<BoardForm />} /> */}
          <Route path="/" element={<MainContents isLogin={isLogin} />}></Route>
          <Route
            path="/board/review"
            element={<ReviewPage isLogin={isLogin} />}
          ></Route>
          <Route
            path="/board/review/detail/:id"
            element={<ReviewDetailPage isLogin={isLogin} />}
          />
          <Route
            path="/post/review/:id"
            element={<PostReviewPage isLogin={isLogin} />}
          />

          <Route path="/board/detail" element={<BoardDetailPage />} />
          <Route
            path="/login"
            element={<Login setisLogin={setisLogin} isLogin={isLogin} />}
          />
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
          <Route
            path="/board/free"
            element={<FreeBoardPage isLogin={isLogin} />}
          />
          <Route
            path="/board/develop"
            element={<DevelopBoardPage isLogin={isLogin} />}
          />
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/mypage/auth" element={<AuthPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          {isLogin && (
            <>
              <Route
                path="/post/:board"
                element={<PostPage isLogin={isLogin} />}
              ></Route>
            </>
          )}
        </Routes>
      </ContentContainer>
      <Container>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 80vh;
  background-color: #f4f4f4;
`;

export default App;
