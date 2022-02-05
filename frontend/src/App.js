import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './App.css';

import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ReviewPage from './components/review-page/ReviewPage';
import ReviewDetailPage from './components/review-page/DetailPage';
import BoardDetailPage from './pages/BoardDetailPage';
import MainContents from './pages/mainPage/MainContents';
import BoardForm from './components/Board/CommonBoard/BoardForm';
import Login from './components/login-page/Login';
import Logout from './components/logout-page/Logout';
import PostFree from './components/post-page/Post';
import PostReview from './components/post-page/PostReview';

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
      <ContentContainer>
        <Header isLogin={isLogin} />
        <Routes>
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
          <Route path="/board" element={<BoardForm />} />
          <Route path="/" element={<MainContents />}></Route>
          <Route
            path="/review"
            element={<ReviewPage isLogin={isLogin} />}
          ></Route>
          <Route
            path="/review/detail"
            element={<ReviewDetailPage isLogin={isLogin} />}
          />
          <Route path="/board/detail" element={<BoardDetailPage />} />
          <Route
            path="/login"
            element={<Login setisLogin={setisLogin} isLogin={isLogin} />}
          />
          <Route path="/logout" element={<Logout setisLogin={setisLogin} />} />
          <Route path="/board" element={<BoardForm />} />
          {isLogin && (
            <>
              <Route
                path="/post/free"
                element={<PostFree isLogin={isLogin} />}
              ></Route>
              <Route
                path="/post/review"
                element={<PostReview isLogin={isLogin} />}
              ></Route>
            </>
          )}
        </Routes>

        <Footer />
      </ContentContainer>
    </BrowserRouter>
  );
}

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow-y: hidden;
  width: 100vw;
  min-height: 80vh;
  margin-left: calc(-50vw + 50%);
  background-color: #f4f4f4;
`;

export default App;
