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
import MainContents from './pages/mainPage/MainContents';
import BoardForm from './components/Board/CommonBoard/BoardForm';
import Login from './components/login-page/Login';
import Logout from './components/logout-page/Logout';

function App() {
  const [isLogin, setisLogin] = useState(false);

  useEffect(() => {
    const getMe = async () => {
      await axios
        .get('http://localhost:5000/auth/user', {
          withCredentials: true,
        })
        .then((res) => setisLogin(res.data));
    };
    getMe();
    console.log(isLogin);
  }, []);

  return (
    <BrowserRouter>
      <Container>
        <Header isLogin={isLogin} />
        <ContentContainer>
          <Routes>
            <Route path="/" element={<MainContents />} />
            <Route path="/review" element={<ReviewPage isLogin={isLogin} />} />
            <Route path="/review-detail" element={<ReviewDetailPage />} />
            <Route path="/board-detail" element={<BoardDetailPage />} />
            <Route path="/login" element={<Login setisLogin={setisLogin} />} />
            <Route
              path="/logout"
              element={<Logout setisLogin={setisLogin} />}
            />
            <Route path="/board" element={<BoardForm />} />
          </Routes>
        </ContentContainer>

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
  width: 100vw;
  min-height: 80vh;
  margin-left: calc(-50vw + 50%);
  background-color: #f4f4f4;
`;

export default App;
